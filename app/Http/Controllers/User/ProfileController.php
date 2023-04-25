<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Wish\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
    }

    public function create(Request $request)
    {
        $categories = Category::getOrSearchCategory($request['search']);

        return Inertia::render('User/Profile', [
            'user' => auth()->user(),
            'url' => config('app.url'),
        ]);
    }

    public function store(Request $request)
    {
        return redirect()->back();
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        $user->update($request->all());
        return redirect()->back();
    }

    public function destroy(Category $category)
    {
        $category->forceDelete();
        return redirect()->back();
    }
}
