<?php

namespace Tests\Feature\Integration;

use App\Models\Auth\User;
use App\Models\Wish\Category;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class ProductTest extends TestCase
{
    use DatabaseTransactions;

    private User $user;
    private Category $category;

    private function boot()
    {
        $this->user = User::factory()->create();

        Auth::login($this->user);

        $this->category = $this->user->categories()->create([
            'name' => 'Category',
            'color' => '#ffffff'
        ]);
    }

    public function test_can_register_product()
    {
        $this->boot();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/product', $this->productFields())
            ->assertSessionHasNoErrors();
    }

    protected function productFields($overrides = [])
    {
        return array_merge([
            'name' => 'Product Name',
            'url' => 'https://example.com/',
            'lowest_price' => '120',
            'image_url' => 'https://example.com/image.png',
            'categories' => [
                $this->category->toArray()
            ]
        ], $overrides);
    }
}
