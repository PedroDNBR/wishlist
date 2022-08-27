<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        $categories = Category::fromLoggedUser()->orderBy('name')->get();
        return Inertia::render('Wish/Products', [
            'categories' => $categories,
        ]);
    }
}
