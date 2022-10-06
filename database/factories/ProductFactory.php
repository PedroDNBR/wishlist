<?php

namespace Database\Factories;

use App\Models\Wish\Category;
use App\Models\Wish\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'url' => fake()->url(),
            'lowest_price'  => fake()->numberBetween(1, 10000),
            'image_url'  => fake()->url(),
            'user_id'  => Auth::user()->id,
        ];
    }
}
