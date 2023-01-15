<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function view() 
    {
        $categories = Category::all();

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'categories' => $categories
        ]);
    }
}
