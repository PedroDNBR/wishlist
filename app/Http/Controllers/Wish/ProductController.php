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

        $user_id = Auth::user()->id;

        $product = Product::create([
            'name' => $request['name'],
            'url' => $request['url'],
            'lowest_price' => $request['lowest_price'],
            'image_url' => $request['image_url'],
            'user_id' =>  $user_id,
        ]);


        foreach ($request['categories'] as $category) {
            ProductCategory::create([
                'product_id' =>  $product->id,
                'category_id' => $category['id'],
            ]);
        }
        $product->load('categories');

        return Inertia::render('Wish/Products');
    }

    public function getImage(Request $request)
    {
        $metas = HtmlMeta::forUrl($request['url'])->getMeta();

        return $metas['og:image'];
    }
}
