<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use App\Models\Wish\ProductCategory;
use DOMDocument;
use DOMXPath;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Kovah\HtmlMeta\Facades\HtmlMeta;
use Intervention\Image\Facades\Image;

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
        if (!empty($metas['og:image'])) return $metas['og:image'];

        $context  = stream_context_create(
            array(
                "http" => array(
                    "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
                )
            )
        );
        libxml_use_internal_errors(true);
        $doc = new DOMDocument();
        $doc->loadHTML(file_get_contents($request['url'], false, $context));
        $xpath = new DOMXPath($doc);
        $query = '//*/meta[starts-with(@property, \'og:\')]';
        $metas = $xpath->query($query);
        foreach ($metas as $meta) {
            $property = $meta->getAttribute('property');
            $content = $meta->getAttribute('content');
            if ($property === "og:image")
                return $content;
        }
    }

    public function storeImage(Request $request)
    {
        $request->validate([
            'file' => 'required|image|mimes:jpeg,jpg,png'
        ]);

        $ext = $request->file->extension();

        $imageName = time() . '.webp';

        $image = $request->file;

        $img = Image::make($image->path());
        $width = null;
        $height = null;
        if ($img->height() < $img->width())
            $height = 300;
        else
            $width = 300;

        $img->resize($width, $height, function ($const) {
            $const->aspectRatio();
        });
        $img->crop(300, 300);
        $img->save(public_path('media/images') . '/' . $imageName, 90, 'webp');

        return [
            'location' => asset('media/images/' . $imageName)
        ];
    }
}
