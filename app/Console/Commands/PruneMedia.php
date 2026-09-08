<?php

namespace App\Console\Commands;

use App\Models\Auth\User;
use App\Services\ImageStorage;
use App\Services\ProfileCard;
use Illuminate\Console\Command;

class PruneMedia extends Command
{
    protected $signature = 'wishlist:prune-media {--hours=24} {--dry-run}';

    protected $description = 'Remove uploads, thumbnails and profile cards that are no longer referenced';

    public function handle(ImageStorage $images, ProfileCard $cards): int
    {
        $cutoff = time() - ((int) $this->option('hours') * 3600);
        $dryRun = (bool) $this->option('dry-run');

        $referenced = $images->referencedUrls();

        $names = [];
        $hashes = [];

        foreach ($referenced as $url) {
            $hashes[md5($url)] = true;

            if ($images->managedFile($url)) {
                $names[basename((string) parse_url($url, PHP_URL_PATH))] = true;
            }
        }

        $userIds = User::query()->pluck('id')->flip()->all();

        $freed = 0;
        $removed = 0;

        foreach ($this->candidates(public_path(ImageStorage::DIRECTORY . '/*'), $cutoff) as $file) {
            if (!isset($names[basename($file)])) {
                $freed += $this->discard($file, $dryRun);
                $removed++;
            }
        }

        foreach ($this->candidates($cards->everyThumbnail(), $cutoff) as $file) {
            if (!isset($hashes[explode('-', basename($file))[0]])) {
                $freed += $this->discard($file, $dryRun);
                $removed++;
            }
        }

        foreach ($this->candidates($cards->everyCard(), $cutoff) as $file) {
            if (!isset($userIds[(int) explode('-', basename($file))[0]])) {
                $freed += $this->discard($file, $dryRun);
                $removed++;
            }
        }

        $this->info(sprintf(
            '%s %d arquivo(s), %s KB.',
            $dryRun ? 'Removeria' : 'Removido(s)',
            $removed,
            number_format($freed / 1024, 1)
        ));

        return self::SUCCESS;
    }

    private function candidates(string $pattern, int $cutoff): array
    {
        return array_filter(
            glob($pattern) ?: [],
            fn (string $file) => is_file($file) && filemtime($file) < $cutoff
        );
    }

    private function discard(string $file, bool $dryRun): int
    {
        $size = filesize($file) ?: 0;

        $this->line(($dryRun ? '  [dry-run] ' : '  ') . str_replace(public_path(), '', $file));

        if (!$dryRun) {
            @unlink($file);
        }

        return $size;
    }
}
