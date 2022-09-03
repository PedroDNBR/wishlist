<?php

namespace App\Models\Wish;

use App\Models\BaseModel;

class Product extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'url',
        'lowest_price',
        'image_url',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'url' => ['required', 'string', 'max:255'],
            'lowest_price'  => ['required', 'string', 'max:255'],
            'image_url'  => ['required', 'string'],
            'user_id'  => ['required', 'integer'],
        ];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }
}
