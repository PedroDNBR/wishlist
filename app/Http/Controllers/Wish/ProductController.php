<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use App\Models\Wish\ProductCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Kovah\HtmlMeta\Facades\HtmlMeta;

class ProductController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        $categories = Category::fromLoggedUser()->orderBy('name')->get();
        return Inertia::render('Wish/Products', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'categories' => ['required', 'array'],
            'categories.*.id' => ['required', 'integer'],
        ]);

        $product = Product::createProductAndCategories($request->all());

        return Inertia::render('Wish/Products');
    }

    public function getImage(Request $request)
    {
        $metas = HtmlMeta::forUrl($request['url'])->getMeta();

        return $metas['og:image'];
    }
}
