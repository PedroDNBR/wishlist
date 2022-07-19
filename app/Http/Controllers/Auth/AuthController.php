<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function store(Request $request)
    {
        $user = User::create($request->all());
        dd($user);
    }
}