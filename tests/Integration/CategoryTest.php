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

    // private function boot()
    // {
    //     $response = $this->post('/users/register', [
    //         'name' => 'teste',
    //         'email' => 'teste@teste.com',
    //         'password' => 'teste123',
    //         'password_confirmation' => 'teste123'
    //     ]);
    // }

    private function boot()
    {
        $this->user = User::factory()->create();
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

    protected function categoryFields($overrides = [])
    {
        return array_merge([
            'color' => '#ffffff',
            'name' => 'test cat',
        ], $overrides);
    }
}
