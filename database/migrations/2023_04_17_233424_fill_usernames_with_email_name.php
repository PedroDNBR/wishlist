<?php

use App\Models\Auth\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->get()->each(function ($user) {
            User::where('id', $user->id)->update(['username' => preg_replace('/\@(.*)/', '', $user->email)]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
