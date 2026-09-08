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

    public function create(Request $request)
    {
        $categories = Category::getOrSearchCategory($request['search']);

        return Inertia::render('Wish/Categories', [
            'categories' => $categories
        ]);
    }

    public function search(Request $request)
    {
        $categories = Category::getOrSearchCategory($request['search']);
        return $categories;
    }

    public function store(Request $request)
    {
        $request->session()->put('category', 'creating');
        Category::create([
            'color' => $request['color'],
            'name' => $request['name'],
            'user_id' =>  Auth::user()->id,
        ]);
        return redirect()->back();
    }

    public function update(Category $category, Request $request)
    {
        $this->checkUserCompatibility($category->user_id);
        $request->session()->put('category', 'editing');
        $category->update([
            'color' => $request['color'],
            'name' => $request['name'],
        ]);
        return redirect()->back();
    }

    public function destroy(Category $category)
    {
        $this->checkUserCompatibility($category->user_id);
        $category->forceDelete();
        return redirect()->back();
    }
}
