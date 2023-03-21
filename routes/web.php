<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\Wish\CategoryController;
use App\Http\Controllers\Wish\ProductController;
use App\Http\Controllers\Wish\WishController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/register', 'Auth/RegisteredUserController@create')->name('auth.register');
Route::get('/login', 'Auth/AuthenticatedSessionController@create')->name('auth.login');

Route::prefix('/users')->group(function () {
    Route::post('/register', [RegisteredUserController::class, 'store']);
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    Route::delete('/logout', [AuthenticatedSessionController::class, 'destroy']);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/wishes', [WishController::class, 'index'])->name('dashboard');
    Route::get('/categories', [CategoryController::class, 'create'])->name('categories');
    Route::get('/categories/search', [CategoryController::class, 'search'])->name('categories.search');
    Route::post('/categories', [CategoryController::class, 'store'])->name('category.store');
    Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('category.destroy');
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');

    Route::post('/product', [ProductController::class, 'store'])->name('product.store');
    Route::put('/product/{product}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('category.destroy');

    Route::get('/create-product', [ProductController::class, 'create'])->name('product');
    Route::get('/update-product/{product}', [ProductController::class, 'edit'])->name('product.edit');

    Route::get('/profile', [ProfileController::class, 'create'])->name('profile');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::get('/', function () {
    return Inertia::render('Home');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
