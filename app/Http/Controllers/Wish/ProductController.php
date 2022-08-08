<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        return Inertia::render('Wish/Products');
    }
}
