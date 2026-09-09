<?php

use App\Services\HtmlSanitizer;
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
        $sanitizer = new HtmlSanitizer();

        DB::table('products')
            ->whereNotNull('description')
            ->where('description', '<>', '')
            ->orderBy('id')
            ->chunkById(200, function ($products) use ($sanitizer) {
                foreach ($products as $product) {
                    $clean = $sanitizer->clean($product->description);

                    if ($clean !== $product->description) {
                        DB::table('products')
                            ->where('id', $product->id)
                            ->update(['description' => $clean]);
                    }
                }
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
};
