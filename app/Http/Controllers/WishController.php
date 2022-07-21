<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WishController extends Controller
{
    public function index()
    {
        return Inertia::render('Wish/Home');
    }
}
