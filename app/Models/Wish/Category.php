<?php

namespace App\Models\Wish;

use App\Models\BaseModel;

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
            'color' => ['required', 'string', 'digits:6'],
        ];
    }
}
