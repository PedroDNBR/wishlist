<?php

namespace App\QueryBuilder\Sorts;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Sorts\Sort;

class SortByCategories implements Sort
{
    private const SIGNATURE = "(
        select group_concat(categories.name order by categories.name separator 0x1f)
        from product_categories
        inner join categories
            on categories.id = product_categories.category_id
            and categories.deleted_at is null
        where product_categories.product_id = products.id
    )";

    public function __invoke(Builder $query, bool $descending, string $property)
    {
        $direction = $descending ? 'desc' : 'asc';

        $query
            ->orderByRaw(self::SIGNATURE . ' is null asc')
            ->orderByRaw(self::SIGNATURE . ' ' . $direction);
    }
}
