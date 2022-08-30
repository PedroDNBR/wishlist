<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;
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

    public function getImage(Request $request)
    {
        $metas = HtmlMeta::forUrl($request['url'])->getMeta();

        return $metas['og:image'];
    }
}
