<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        return Inertia::render('Wish/Categories');
    }

    public function store()
    {
    }
}
