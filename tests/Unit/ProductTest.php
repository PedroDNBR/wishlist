<?php

namespace Tests\Feature\Unit;

use App\Models\Auth\User;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class ProductTest extends TestCase
{
    use DatabaseTransactions;

    private function boot()
    {
        $user = User::factory()->create();
        Auth::login($user);
    }

    public function test_create_product()
    {
        $this->boot();

        $category = Category::factory()->create();

        $product = Product::createProductAndCategories([
            'name' => 'Name',
            'url' => 'https://example.com/',
            'lowest_price' => '100',
            'image_url' => 'https://example.com/',
            'categories' => [
                $category->toArray()
            ]
        ]);

        $this->assertInstanceOf(Product::class, $product);
        $this->assertEquals($category->id, $product->categories[0]->id);
        $this->assertEquals($product->url, 'https://example.com/');
        $this->assertEquals($product->name, 'Name');
    }

    public function test_invalid_url_product_creating()
    {
        $this->boot();

        $category = Category::factory()->create();

        $this->expectException(\Watson\Validating\ValidationException::class);

        Product::createProductAndCategories([
            'name' => 'Name',
            'url' => 'aa',
            'lowest_price' => '100',
            'image_url' => 'https://example.com/',
            'categories' => [
                $category->toArray()
            ]
        ]);
    }

    public function test_empty_name_creating()
    {
        $this->boot();

        $category = Category::factory()->create();

        $this->expectException(\Watson\Validating\ValidationException::class);

        Product::createProductAndCategories([
            'name' => '',
            'url' => 'aa',
            'lowest_price' => '100',
            'image_url' => 'https://example.com/',
            'categories' => [
                $category->toArray()
            ]
        ]);
    }

    public function test_empty_url_creating()
    {
        $this->boot();

        $category = Category::factory()->create();

        $this->expectException(\Watson\Validating\ValidationException::class);

        Product::createProductAndCategories([
            'name' => 'name',
            'url' => '',
            'lowest_price' => '100',
            'image_url' => 'https://example.com/',
            'categories' => [
                $category->toArray()
            ]
        ]);
    }

    public function test_empty_price_creating()
    {
        $this->boot();

        $category = Category::factory()->create();

        $this->expectException(\Watson\Validating\ValidationException::class);

        Product::createProductAndCategories([
            'name' => 'name',
            'url' => 'https://example.com/',
            'lowest_price' => '',
            'image_url' => 'https://example.com/',
            'categories' => [
                $category->toArray()
            ]
        ]);
    }

    public function test_empty_image_url_creating()
    {
        $this->boot();

        $category = Category::factory()->create();

        $this->expectException(\Watson\Validating\ValidationException::class);

        Product::createProductAndCategories([
            'name' => 'name',
            'url' => 'https://example.com/',
            'lowest_price' => '100',
            'image_url' => '',
            'categories' => [
                $category->toArray()
            ]
        ]);
    }
}
