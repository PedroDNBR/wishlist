<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use App\QueryBuilder\Filters\FilterByCategories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class WishController extends Controller
{
    public function index(Request $request)
    {
        $products = QueryBuilder::for(Product::class)
            ->fromLoggedUser()
            ->allowedFilters([
                'name',
                'lowest_price',
                AllowedFilter::custom('categories', new FilterByCategories),
            ])
            ->defaultSort('-created_at')
            ->allowedSorts([
                'name',
                'lowest_price',
                'created_at',
            ])
            ->with('categories')
            ->get();

        $categories = Category::fromLoggedUser()->orderBy('name')->get();

        return Inertia::render('Wish/Home', [
            'products' => $products,
            'categories' => $categories,
            'request' => $request->all(),
        ]);
    }

    public function indexPublicProfile(Request $request, User $user)
    {
        $products = QueryBuilder::for(Product::class)
            ->fromUser($user->id)
            ->allowedFilters([
                'name',
                'lowest_price',
                AllowedFilter::custom('categories', new FilterByCategories),
            ])
            ->defaultSort('created_at', 'desc')
            ->allowedSorts([
                'name',
                'lowest_price',
                'created_at',
            ])
            ->with('categories')
            ->get();

        $categories = Category::fromUser($user->id)->orderBy('name')->get();

        return Inertia::render('Wish/PublicProfile', [
            'products' => $products,
            'categories' => $categories,
            'request' => $request->all(),
            'profile_user' => $user
        ]);
    }
}
