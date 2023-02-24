<?php

namespace App\Models\Wish;

use App\Models\BaseModel;
use Database\Factories\ProductFactory;
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

    protected static function newFactory()
    {
        return ProductFactory::new();
    }

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
            'url' => ['required', 'url', 'max:255'],
            'lowest_price'  => ['required', 'string', 'max:255'],
            'image_url'  => ['required', 'string'],
            'user_id'  => ['required', 'integer'],
        ];
    }

    public function scopeFromLoggedUser($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }

    public static function createProductAndCategories(array $data)
    {
        $user_id = Auth::user()->id;

        $product = Product::create([
            'name' => $data['name'] ?? null,
            'url' => $data['url'] ?? null,
            'lowest_price' => str_replace(',', '', $data['lowest_price']) ?? null,
            'image_url' => $data['image_url'] ?? null,
            'user_id' =>  $user_id,
        ]);

        ProductCategory::createCategoriesFromArray($data['categories'], $product->id);

        $product->load('categories');
        return $product;
    }

    public static function updateProductAndCategories(array $data, $product)
    {
        $user_id = Auth::user()->id;

        $product->update([
            'name' => $data['name'],
            'url' => $data['url'],
            'lowest_price' => str_replace(',', '', $data['lowest_price']),
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
