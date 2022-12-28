<?php

namespace App\QueryBuilder\Filters;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterByCategories implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        $query->whereHas('categories', function ($query) use ($value) {
            if (gettype($value) == 'string')
                $query->where('categories.id', $value);
            else
                $query->whereIn('categories.id', $value);
        });
    }
}
