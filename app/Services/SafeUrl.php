<?php

namespace App\Services;

class SafeUrl
{
    public function isFetchable(?string $url): bool
    {
        if (empty($url) || strlen($url) > 2048) {
            return false;
        }

        $parts = parse_url($url);

        if (!is_array($parts) || empty($parts['host']) || empty($parts['scheme'])) {
            return false;
        }

        if (!in_array(strtolower($parts['scheme']), ['http', 'https'], true)) {
            return false;
        }

        $addresses = $this->resolve($parts['host']);

        if ($addresses === []) {
            return false;
        }

        foreach ($addresses as $address) {
            if (!$this->isPublic($address)) {
                return false;
            }
        }

        return true;
    }

    private function resolve(string $host): array
    {
        $host = trim($host, '[]');

        if (filter_var($host, FILTER_VALIDATE_IP)) {
            return [$host];
        }

        $addresses = gethostbynamel($host) ?: [];

        foreach (@dns_get_record($host, DNS_AAAA) ?: [] as $record) {
            if (!empty($record['ipv6'])) {
                $addresses[] = $record['ipv6'];
            }
        }

        return $addresses;
    }

    private function isPublic(string $address): bool
    {
        return (bool) filter_var(
            $address,
            FILTER_VALIDATE_IP,
            FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
        );
    }
}
