<?php

namespace Tests\Feature\Unit;

use App\Models\Auth\User;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use App\Models\Wish\ProductCategory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class ProductCategoryTest extends TestCase
{
    use DatabaseTransactions;

    public function test_create_product_categories()
    {
        $user = User::factory()->create();
        Auth::login($user);

        $category = Category::factory()->create();
        $product = Category::factory()->create();

        ProductCategory::createCategoriesFromArray(
            [
                [
                    'id' => $category->id
                ]
            ],
            $product->id
        );

        $productCategory = ProductCategory::firstOrFail();

        $this->assertInstanceOf(ProductCategory::class, $productCategory);

        $this->assertArrayHasKey('product_id', $productCategory);
        $this->assertArrayHasKey('category_id', $productCategory);
    }
}
