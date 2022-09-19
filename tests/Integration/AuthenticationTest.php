<?php

namespace Tests\Feature\Integration;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class AuthenticationTest extends TestCase
{
    use DatabaseTransactions;

    public function test_login_screen_is_display()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function test_register_screen_is_display()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_cannot_register_new_user_without_data()
    {
        $response = $this->post('/users/register')
            ->assertSessionHasErrors([
                'name',
                'email',
                'password',
            ]);
    }

    public function test_cannot_register_new_user_with_invalid_username()
    {
        $response = $this->post('/users/register', $this->userFields(['name' => '']))
            ->assertSessionHasErrors([
                'name' => 'The name field is required.',
            ]);
    }

    public function test_cannot_register_new_user_with_invalid_email()
    {
        $response = $this->post('/users/register', $this->userFields(['email' => 'testeteste']))
            ->assertSessionHasErrors([
                'email' => 'The email must be a valid email address.',
            ]);
    }

    public function test_cannot_register_new_user_with_invalid_password()
    {
        $response = $this->post(
            '/users/register',
            $this->userFields([
                'password' => 'teste',
                'password_confirmation' => 'teste'
            ])
        )
            ->assertSessionHasErrors([
                'password' => 'The password must be between 6 and 50 characters.',
            ]);
    }

    public function test_cannot_register_new_user_with_mismatch_passwords()
    {
        $response = $this->post('/users/register', $this->userFields(['password_confirmation' => 'teste321']))
            ->assertSessionHasErrors([
                'password' => 'The password confirmation does not match.',
            ]);
    }

    public function test_can_register_new_user()
    {
        $response = $this->post('/users/register', $this->userFields())
            ->assertSessionHasNoErrors();
    }

    protected function userFields($overrides = [])
    {
        return array_merge([
            'name' => 'teste',
            'email' => 'teste@teste.com',
            'password' => 'teste123',
            'password_confirmation' => 'teste123'
        ], $overrides);
    }
}
