<?php

namespace App\Http\Controllers\Wish;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use App\QueryBuilder\Filters\FilterByCategories;
use App\QueryBuilder\Sorts\SortByCategories;
use App\Services\ProfileCard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class WishController extends Controller
{
    public function index(Request $request)
    {
        $products = QueryBuilder::for(Product::class)
            ->fromLoggedUser()
            ->allowedFilters([
                'name',
                'lowest_price',
                AllowedFilter::custom('categories', new FilterByCategories),
            ])
            ->defaultSort('-created_at')
            ->allowedSorts([
                'name',
                'lowest_price',
                'created_at',
                AllowedSort::custom('categories', new SortByCategories),
            ])
            ->with('categories')
            ->get();

        $categories = Category::fromLoggedUser()->orderBy('name')->get();

        return Inertia::render('Wish/Home', [
            'products' => $products,
            'categories' => $categories,
            'request' => $request->all(),
        ]);
    }

    public function indexPublicProfile(Request $request, User $user, ProfileCard $card)
    {
        $products = QueryBuilder::for(Product::class)
            ->fromUser($user->id)
            ->allowedFilters([
                'name',
                'lowest_price',
                AllowedFilter::custom('categories', new FilterByCategories),
            ])
            ->defaultSort('-created_at')
            ->allowedSorts([
                'name',
                'lowest_price',
                'created_at',
                AllowedSort::custom('categories', new SortByCategories),
            ])
            ->with('categories')
            ->get();

        $categories = Category::fromUser($user->id)->orderBy('name')->get();

        return Inertia::render('Wish/PublicProfile', [
            'products' => $products,
            'categories' => $categories,
            'request' => $request->all(),
            'profile_user' => $user
        ])->withViewData(['meta' => $this->profileMeta($user, $card)]);
    }

    public function shareCard(User $user, ProfileCard $card)
    {
        $summary = $card->summary($user);
        $path = $card->path($user, $card->signature($user, $summary));

        if (!is_file($path) && !$card->make($user, $summary, $path)) {
            abort_if(empty($user->profile_picture), 404);

            return redirect()->away($user->profile_picture);
        }

        return response()->file($path, [
            'Content-Type' => 'image/webp',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

    private function profileMeta(User $user, ProfileCard $card): array
    {
        $summary = $card->summary($user);

        return [
            'title' => __('meta.wishlist-from', ['name' => $user->name]),
            'description' => __('meta.profile-description', [
                'products' => $summary['products'],
                'categories' => $summary['categories'],
                'name' => $user->name,
            ]),
            'url' => route('public_dashboard', $user),
            'image' => route('public_dashboard.card', [
                'user' => $user,
                'v' => $card->signature($user, $summary),
            ]),
            'width' => ProfileCard::WIDTH,
            'height' => ProfileCard::HEIGHT,
        ];
    }
}
