<?php

namespace App\Services;

use App\Models\Auth\User;
use App\Models\Wish\Product;

class ImageStorage
{
    public const DIRECTORY = 'media/images';

    public function forget(?string $url): void
    {
        $this->forgetThumbnails($url);

        $file = $this->managedFile($url);

        if ($file === null || $this->isReferenced($url)) {
            return;
        }

        @unlink($file);
    }

    public function forgetThumbnails(?string $url): void
    {
        if (empty($url)) {
            return;
        }

        foreach (glob(app(ProfileCard::class)->thumbnailPattern($url)) ?: [] as $thumbnail) {
            @unlink($thumbnail);
        }
    }

    public function isReferenced(?string $url): bool
    {
        if (empty($url)) {
            return false;
        }

        return Product::where('image_url', $url)->exists()
            || User::where('profile_picture', $url)->exists();
    }

    public function managedFile(?string $url): ?string
    {
        if (empty($url) || !str_contains($url, '/' . self::DIRECTORY . '/')) {
            return null;
        }

        $name = basename((string) parse_url($url, PHP_URL_PATH));
        $file = public_path(self::DIRECTORY . '/' . $name);

        return is_file($file) ? $file : null;
    }

    public function referencedUrls(): array
    {
        return Product::query()->distinct()->pluck('image_url')
            ->merge(User::query()->distinct()->pluck('profile_picture'))
            ->filter()
            ->unique()
            ->values()
            ->all();
    }
}
