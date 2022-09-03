<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WishController extends Controller
{
    public function index()
    {
        $products = Auth::user()->products;
        $products->load('categories');
        return Inertia::render('Wish/Home', [
            'products' => $products,
        ]);
    }
}
