<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WishController extends Controller
{
    public function index()
    {
        // $products = Product::getAuthenticatedProductsWithCategories();
        $products = Auth::user()->products()->orderBy('name', 'asc')->get();
        $products->load('categories');

        $categories = Category::fromLoggedUser()->orderBy('name')->get();

        return Inertia::render('Wish/Home', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}
