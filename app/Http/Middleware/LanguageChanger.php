<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LanguageChanger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // read the language from the request header
        $locale = $request->header('Content-Language');

        // if the header is missed
        if (!in_array($locale, ['en', 'pt-BR']) || empty($locale)) {
            // take the default local language
            $locale = config('app.locale');
        }

        // set the local language
        App::setLocale($locale);

        return $next($request);
    }
}
