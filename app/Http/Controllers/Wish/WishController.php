<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishController extends Controller
{
    public function index()
    {
        return Inertia::render('Wish/Home');
    }
}
