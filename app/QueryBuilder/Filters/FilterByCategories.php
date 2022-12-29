<?php

namespace App\QueryBuilder\Filters;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterByCategories implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        foreach ($value as $id) {
            $query->whereHas('categories', function ($q) use ($id) {
                $q->where('categories.id', $id);
            });
        }
    }
}
