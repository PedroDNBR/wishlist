<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Product;
use Inertia\Inertia;

class WishController extends Controller
{
    public function index()
    {
        $products = Product::getAuthenticatedProductsWithCategories();

        return Inertia::render('Wish/Home', [
            'products' => $products,
        ]);
    }
}
