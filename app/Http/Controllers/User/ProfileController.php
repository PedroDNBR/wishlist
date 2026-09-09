<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
    }

    public function create(Request $request)
    {
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

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', Rule::unique('users')->ignore($user->id)],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'current_password' => ['required_with:password', 'current_password'],
            'password' => ['nullable', 'string', 'between:6,50', 'confirmed'],
            'profile_picture' => ['nullable', 'url', 'max:255'],
        ]);

        $user->fill($request->only('name', 'username', 'email', 'profile_picture'));

        if ($request->filled('password')) {
            $user->password = $request['password'];
        }

        $user->save();

        return redirect()->back();
    }
}
