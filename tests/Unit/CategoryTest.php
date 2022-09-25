<?php

namespace Tests\Feature\Unit;

use App\Models\Auth\User;
use App\Models\Wish\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class CategoryTest extends TestCase
{
    use DatabaseTransactions;

    private function boot(int $quantity = 1)
    {
        $user = User::factory()->create();
        Auth::login($user);

        for ($i = 0; $i < $quantity; ++$i) {
            Category::factory()->create();
        }
    }

    public function test_list_categories()
    {
        $this->boot(2);

        $newCategory = Category::factory()->create();

        $categories = Category::getOrSearchCategory();

        $this->assertCount(3, $categories);
        $this->assertInstanceOf(Collection::class, $categories);
        foreach ($categories as $category) {
            $this->assertInstanceOf(Category::class, $category);
        }
        $this->assertTrue($categories->contains('id', $newCategory->id));
    }

    public function test_list_searched_categories()
    {
        $this->boot(2);

        $searchWord = 'testt';

        $newCategory = Category::factory()->create([
            'name' => $searchWord
        ]);

        $categories = Category::getOrSearchCategory($searchWord);

        $this->assertCount(1, $categories);
        $this->assertInstanceOf(Collection::class, $categories);
        foreach ($categories as $category) {
            $this->assertInstanceOf(Category::class, $category);
        }
        $this->assertTrue($categories->contains('id', $newCategory->id));
        $this->assertTrue($categories->contains('name', $searchWord));
    }
}
