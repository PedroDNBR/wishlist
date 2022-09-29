<?php

namespace Tests\Feature\Integration;

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

    private User $user;

    private function boot()
    {
        $this->user = User::factory()->create();

        Auth::login($this->user);
    }

    public function test_can_register_category()
    {
        $this->boot();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields())
            ->assertSessionHasNoErrors();
    }

    public function test_can_list_categories()
    {
        $this->boot();

        $name = 'thisisaname';

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields([
                'name' => $name
            ]))
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields([
                'name' => $name . 'a'
            ]))
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories')
            ->assertSessionHasNoErrors()
            ->assertSee($name)
            ->assertSee($name . 'a');
    }

    public function test_can_search_by_category_name()
    {
        $this->boot();

        $nameToSearch = 'thisisaname';
        $nameToIgnore = 'notaname';

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields([
                'name' => $nameToSearch
            ]));

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields([
                'name' => $nameToIgnore
            ]));

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories/search?search=' . $nameToSearch)
            ->assertSessionHasNoErrors()
            ->assertSee($nameToSearch)
            ->assertDontSee($nameToIgnore);
    }

    public function test_can_update_category()
    {
        $this->boot();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields())
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories')
            ->assertSessionHasNoErrors()
            ->assertSee('test cat');

        $category = $this->user->categories()->first();
        $newCategoryName = 'newone';
        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->put('/categories/' . $category->id, [
                'name' => $newCategoryName
            ])
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories')
            ->assertSessionHasNoErrors()
            ->assertSee($newCategoryName)
            ->assertDontSee('test cat');
    }

    public function test_can_delete_category()
    {
        $this->boot();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->post('/categories', $this->categoryFields())
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories')
            ->assertSessionHasNoErrors()
            ->assertSee('test cat');

        $category = $this->user->categories()->first();
        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->delete('/categories/' . $category->id,)
            ->assertSessionHasNoErrors();

        $this->actingAs($this->user)
            ->withSession(['banned' => false])
            ->get('/categories')
            ->assertSessionHasNoErrors()
            ->assertDontSee('test cat');
    }

    protected function categoryFields($overrides = [])
    {
        return array_merge([
            'color' => '#ffffff',
            'name' => 'test cat',
        ], $overrides);
    }
}
