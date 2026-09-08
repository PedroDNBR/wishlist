<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->index('user_id');
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->index('user_id');
        });

        Schema::table('product_categories', function (Blueprint $table) {
            $table->index('product_id');
            $table->index('category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropIndex(['user_id']);
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->dropIndex(['user_id']);
        });

        Schema::table('product_categories', function (Blueprint $table) {
            $table->dropIndex(['product_id']);
            $table->dropIndex(['category_id']);
        });
    }
};
