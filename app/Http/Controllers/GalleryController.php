<?php

namespace App\Http\Controllers;

use App\Models\Img;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function show(string $category)
    {
        $imgs = Img::where('category', $category)->join('users', 'users.id', 'imgs.user_id')->select('imgs.*', 'users.name as user_name')->get();
        return Inertia::render('Gallery', ['category' => $category, 'foreCloseUploadForm' => false, "imgs" => $imgs]);
    }

    public function destroy(Img $img){
        $category = $img->category;
        $img->delete();
        return  to_route('gallery', [
            'category' => $category
        ]);
    }

    public function create(Request $request, string $category)
    {
        $request->validate([
            'img' => ['required', File::image()->max(12 * 1024)],
        ]);
        $file = $request->file('img');
        $img_saved = $file->store('public/imgs');
        $user = $request->user();
        $user->imgs()->create([
            "name" => $img_saved,
            "category" => $category
        ]);
        return  to_route('gallery', [
            'category' => $category
        ]);
    }


}
