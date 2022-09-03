<?php

namespace App\Models\Wish;

use App\Models\BaseModel;

class ProductCategory extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_id',
        'category_id',
    ];

    public function getRules()
    {
        return [
            'product_id'  => ['required', 'integer'],
            'category_id'  => ['required', 'integer'],
        ];
    }
}
