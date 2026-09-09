<?php

namespace App\Services;

use App\Models\Auth\User;
use Intervention\Image\Facades\Image;
use Throwable;

class ProfileCard
{
    public const WIDTH = 1200;
    public const HEIGHT = 630;

    private const AVATAR_LEFT = 60;
    private const AVATAR_TOP = 60;
    private const AVATAR_SIZE = 200;
    private const TEXT_LEFT = 300;
    private const LINE_SIZE = 30;
    private const TITLE_SIZE = 48;

    private const PRODUCTS_ON_CARD = 5;
    private const THUMBNAIL_SIZE = 200;
    private const DOWNLOAD_TIMEOUT = 5;
    private const DOWNLOAD_MAX_BYTES = 5242880;

    private const BACKGROUND = '#272a37';
    private const SURFACE = '#323644';
    private const TEXT = '#f8f8f9';
    private const MUTED = '#9aa5b5';
    private const ACCENT = '#1e84df';

    public function summary(User $user): array
    {
        $products = $user->products()->orderByDesc('created_at')->get(['id', 'image_url']);

        return [
            'products' => $products->count(),
            'categories' => $user->categories()->count(),
            'images' => $products->take(self::PRODUCTS_ON_CARD)->pluck('image_url')->all(),
        ];
    }

    public function signature(User $user, array $summary): string
    {
        return substr(md5(json_encode([
            $user->id,
            $user->name,
            $user->profile_picture,
            $user->created_at,
            $summary['products'],
            $summary['categories'],
            $summary['images'],
        ])), 0, 12);
    }

    public function path(User $user, string $signature): string
    {
        return $this->directory() . '/' . $user->id . '-' . $signature . '.webp';
    }

    public function cardPattern(int $userId): string
    {
        return $this->directory() . '/' . $userId . '-*.webp';
    }

    public function thumbnailPattern(string $url): string
    {
        return $this->thumbnailDirectory() . '/' . md5($url) . '-*.webp';
    }

    public function everyCard(): string
    {
        return $this->directory() . '/*.webp';
    }

    public function everyThumbnail(): string
    {
        return $this->thumbnailDirectory() . '/*.webp';
    }

    public function forget(int $userId): void
    {
        foreach (glob($this->cardPattern($userId)) ?: [] as $card) {
            @unlink($card);
        }
    }

    public function make(User $user, array $summary, string $path): bool
    {
        try {
            $canvas = Image::canvas(self::WIDTH, self::HEIGHT, self::BACKGROUND);

            $this->drawAvatar($canvas, $user->profile_picture);
            $this->drawDetails($canvas, $user, $summary);
            $this->drawProducts($canvas, $summary['images']);

            $this->forget($user->id);
            $canvas->save($path, 85, 'webp');

            return true;
        } catch (Throwable $e) {
            report($e);

            return false;
        }
    }

    private function drawAvatar($canvas, ?string $url): void
    {
        $left = self::AVATAR_LEFT;
        $top = self::AVATAR_TOP;

        $canvas->rectangle($left, $top, $left + self::AVATAR_SIZE, $top + self::AVATAR_SIZE, function ($shape) {
            $shape->background(self::SURFACE);
        });

        $avatar = $this->thumbnail($url, self::AVATAR_SIZE);

        if ($avatar) {
            $canvas->insert(Image::make($avatar)->fit(self::AVATAR_SIZE), 'top-left', $left, $top);
        }
    }

    private function drawDetails($canvas, User $user, array $summary): void
    {
        [$title, $titleSize] = $this->fitTitle(__('meta.wishlist-from', ['name' => $user->name]));

        $lines = [
            __('meta.user-since') . ' ' . $user->created_at,
            __('meta.total-products') . ' ' . $summary['products'],
            __('meta.total-categories') . ' ' . $summary['categories'],
        ];

        $titleMetrics = $this->metrics($titleSize);
        $lineMetrics = $this->metrics(self::LINE_SIZE);

        $ink = $titleMetrics['ascent'] + $titleMetrics['descent']
            + (count($lines) * ($lineMetrics['ascent'] + $lineMetrics['descent']));

        $unit = max(0, self::AVATAR_SIZE - $ink) / (count($lines) + 1);

        $baseline = self::AVATAR_TOP + $titleMetrics['ascent'];

        $canvas->text($title, self::TEXT_LEFT, (int) round($baseline), function ($font) use ($titleSize) {
            $font->file($this->font());
            $font->size($titleSize);
            $font->color(self::TEXT);
        });

        $baseline += $titleMetrics['descent'] + ($unit * 2) + $lineMetrics['ascent'];

        foreach ($lines as $line) {
            $canvas->text($line, self::TEXT_LEFT, (int) round($baseline), function ($font) {
                $font->file($this->font());
                $font->size(self::LINE_SIZE);
                $font->color(self::MUTED);
            });

            $baseline += $lineMetrics['descent'] + $unit + $lineMetrics['ascent'];
        }

        $canvas->rectangle(60, 330, 1140, 334, function ($shape) {
            $shape->background(self::ACCENT);
        });
    }

    private function metrics(int $size): array
    {
        $points = $this->points($size);

        return [
            'ascent' => (int) abs(imagettfbbox($points, 0, $this->font(), 'Ldk')[7]),
            'descent' => (int) abs(imagettfbbox($points, 0, $this->font(), 'gjpqy')[1]),
        ];
    }

    private function points(int $size): int
    {
        return (int) ceil($size * 0.75);
    }

    private function fitTitle(string $title): array
    {
        $available = self::WIDTH - 360;
        $size = self::TITLE_SIZE;

        while ($size > 28 && $this->textWidth($title, $size) > $available) {
            $size -= 2;
        }

        if ($this->textWidth($title, $size) <= $available) {
            return [$title, $size];
        }

        while (mb_strlen($title) > 8 && $this->textWidth($title . '…', $size) > $available) {
            $title = mb_substr($title, 0, mb_strlen($title) - 1);
        }

        return [rtrim($title) . '…', $size];
    }

    private function textWidth(string $text, int $size): int
    {
        $box = imagettfbbox($this->points($size), 0, $this->font(), $text);

        return (int) ($box[2] - $box[0]);
    }

    private function drawProducts($canvas, array $images): void
    {
        $size = self::THUMBNAIL_SIZE;
        $gap = 30;
        $slots = min(count($images), self::PRODUCTS_ON_CARD);

        if ($slots === 0) {
            return;
        }

        $total = ($slots * $size) + (($slots - 1) * $gap);
        $offset = (int) ((self::WIDTH - $total) / 2);
        $top = 380;

        foreach (array_slice($images, 0, $slots) as $index => $url) {
            $left = $offset + ($index * ($size + $gap));

            $canvas->rectangle($left, $top, $left + $size, $top + $size, function ($shape) {
                $shape->background(self::SURFACE);
            });

            $thumbnail = $this->thumbnail($url, $size);

            if ($thumbnail) {
                $canvas->insert(Image::make($thumbnail)->fit($size), 'top-left', $left, $top);
            }
        }
    }

    private function thumbnail(?string $url, int $size): ?string
    {
        if (empty($url)) {
            return null;
        }

        $path = $this->thumbnailDirectory() . '/' . md5($url) . '-' . $size . '.webp';

        if (is_file($path)) {
            return $path;
        }

        $contents = $this->download($url);

        if ($contents === null) {
            return null;
        }

        try {
            Image::make($contents)->fit($size)->save($path, 85, 'webp');
        } catch (Throwable $e) {
            return null;
        }

        return $path;
    }

    private function download(string $url): ?string
    {
        if (!app(SafeUrl::class)->isFetchable($url)) {
            return null;
        }

        $context = stream_context_create([
            'http' => [
                'timeout' => self::DOWNLOAD_TIMEOUT,
                'follow_location' => 0,
                'header' => 'User-Agent: Mozilla/5.0 (compatible; WishlistCard/1.0)',
            ],
        ]);

        $contents = @file_get_contents($url, false, $context, 0, self::DOWNLOAD_MAX_BYTES);

        return $contents === false || $contents === '' ? null : $contents;
    }

    private function directory(): string
    {
        return $this->ensure(public_path('media/cards'));
    }

    private function thumbnailDirectory(): string
    {
        return $this->ensure(public_path('media/cards/thumbnails'));
    }

    private function ensure(string $directory): string
    {
        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        return $directory;
    }

    private function font(): string
    {
        return resource_path('fonts/Nunito-Bold.ttf');
    }
}
