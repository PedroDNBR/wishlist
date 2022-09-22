<?php

namespace App\Models\Wish;

use App\Models\BaseModel;
use Illuminate\Support\Facades\Auth;

class Category extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'color',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRules()
    {
        return [
            'name' => ['required', 'string', 'max:12'],
            'color' => ['required', 'string', 'min:7', 'max:7'],
            'user_id'  => ['required', 'integer'],
        ];
    }

    public function scopeFromLoggedUser($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_categories');
    }

    public static function getOrSearchCategory(?string $search)
    {
        $categories = Category::fromLoggedUser();
        if (!empty($search))
            $categories = $categories->where('name', 'like', '%' . $search . '%');

        $categories = $categories->orderBy('name')->get();
        return $categories;
    }
}
