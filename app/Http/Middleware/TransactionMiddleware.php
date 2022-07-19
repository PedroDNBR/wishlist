<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionMiddleware
{
    /**
     * Engloba todas as operações SQL executadas pela Interface dentro de uma só transaction
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        DB::beginTransaction();
        $response = $next($request);

        // Verifica se o status da resposta é de sucesso
        if ($response->getStatusCode() >= 200 && $response->getStatusCode() <= 303) {
            DB::commit();
        } else {
            DB::rollBack();
        }

        return $response;
    }
}