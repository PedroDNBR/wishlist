<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        $categories = Category::fromLoggedUser()->orderBy('name')->get();
        return Inertia::render('Wish/Categories', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        Category::create([
            'color' => $request['color'],
            'name' => $request['name'],
            'user_id' =>  Auth::user()->id,
        ]);
        return redirect('/categories');
    }

    public function update(Category $category, Request $request)
    {
        $category->update($request->all());
        return redirect('/categories');
    }

    public function destroy(Category $category)
    {
        $category->forceDelete();
        return redirect('/categories');
    }
}
