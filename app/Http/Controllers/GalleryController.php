<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Img;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function show(Category $category)
    {
        return Inertia::render('Gallery', ['category' => $category, 'foreCloseUploadForm' => true, "imgs" => $this->get_imgs($category)]);
    }

    public function destroy(Img $img){
        $category = $img->category()->first();
        $img->delete();
        return  to_route('gallery', [
            'category' => $category
        ]);
    }

    public function create(Request $request, Category $category)
    {
        $request->validate([
            'img' => ['required', File::image()->max(12 * 1024)],
        ]);
        $file = $request->file('img');
        $img_saved = $file->store('public/imgs');
        $user = $request->user();
        $user->imgs()->create([
            "name" => $img_saved,
            "category_id" => $category->id
        ]);
        return  to_route('gallery', [
            'category' => $category
        ]);
    }

    public function update(Img $img, Request $request)
    {
        $request->validate([
            'img' => ['required', File::image()->max(12 * 1024)],
        ]);
        $category = $img->category()->first();
        $file = $request->file('img');
        $img_saved = $file->store('public/imgs');
        $img->update([
            'name' => $img_saved
        ]);
        
        return  to_route('gallery', [
            'category' => $category
        ]);
    }

    private function get_imgs(Category $category){
        return Img::join('categories', 'categories.id', 'imgs.category_id')->join('users', 'users.id', 'imgs.user_id')->where('categories.id', $category->id)->select('imgs.*', 'users.name as user_name')->get();
    }
}
