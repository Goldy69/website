<?php

use App\Http\Controllers\BrowseController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'view'])->name('home');

Route::get('/browse', [BrowseController::class, 'view'])->name('browse');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/gallery/{category}', [GalleryController::class, 'show'])->name('gallery');
    Route::post('/gallery/{category}', [GalleryController::class, 'create']);
    Route::delete('/gallery/{img}', [GalleryController::class, 'destroy']);
    Route::post('/gallery/edit/{img}', [GalleryController::class, 'update'])->name('gallery.edit');
});


require __DIR__.'/auth.php';
