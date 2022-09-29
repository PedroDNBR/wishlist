<?php

namespace App\Models\Auth;

use App\Models\BaseModel;
use App\Models\Wish\Category;
use App\Models\Wish\Product;
use Database\Factories\UserFactory;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends BaseModel implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
{
    use HasApiTokens,
        Notifiable,
        Authenticatable,
        Authorizable,
        CanResetPassword,
        MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected static function newFactory()
    {
        return UserFactory::new();
    }

    /**
     * Disable soft deletes for this model
     */
    public static function bootSoftDeletes()
    {
    }

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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'unique:users,email'],
        ];
    }

    public function setPasswordAttribute(string $value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function setPasswordConfirmationAttribute(string $value)
    {
        $this->attributes['password_confirmation'] = bcrypt($value);
    }

    public static function createUserAndAuthenticate(array $values)
    {
        $user = User::create($values);

        Auth::login($user);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
