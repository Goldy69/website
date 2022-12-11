<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @vite('resources/css/app.css')
    </head>
    <body class="text-gray-100 bg-gray-900">
        <nav class="flex md:text-left text-center flex-col md:flex-row justify-between gap-4 p-4 ">
            <a href="/" class="font-bold text-2xl transition hover:text-amber-100">IMG HUB</a>
            <div class="flex flex-col md:flex-row  gap-2">
                <a class="transition hover:text-amber-100" href="">Login</a>
                <a class="transition hover:text-amber-100" href="">Register</a>
                <a class="transition hover:text-amber-100" href="">USERNAME</a>
            </div>
        </nav>

    </body>
</html>
