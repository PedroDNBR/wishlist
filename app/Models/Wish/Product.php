<?php

namespace App\Models\Wish;

use App\Models\BaseModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

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

    public static function createProductAndCategories(array $data)
    {
        $user_id = Auth::user()->id;

        $product = Product::create([
            'name' => $data['name'],
            'url' => $data['url'],
            'lowest_price' => $data['lowest_price'],
            'image_url' => $data['image_url'],
            'user_id' =>  $user_id,
        ]);

        ProductCategory::createCategoriesFromArray($data['categories'], $product->id);

        $product->load('categories');
        return $product;
    }

    public static function getAuthenticatedProductsWithCategories()
    {
        $products = Auth::user()->products;
        $products->load('categories');
        return $products;
    }
}
