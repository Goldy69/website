import { Category } from "@/Pages/Home";
import { useForm } from "@inertiajs/inertia-react";
import { FormEvent, useEffect, useState } from "react"

export function UploadForms({ category, setShowUploadForm, showUploadForm, update_img, title, update}:{category: Category, showUploadForm: boolean, setShowUploadForm: (state: boolean)=>void, title: string, update: boolean, update_img?: number}) {


    const { data, setData, post, patch , processing, errors, reset } = useForm<{
        img: null | File,
    }>({
        img: null,
    });


    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if(!update) post(route('gallery', category));
        else post(route('gallery.edit', update_img));
    }

    return <div className='fixed z-10 bg-gray-900/60 top-0 left-0 w-screen h-screen grid place-items-center'>
    <form onSubmit={(e)=>onSubmit(e)} className='bg-gray-800 flex flex-col gap-4  px-5 py-10'>
        <h3 className='text-center font-bold text-2xl pb-5'>{title}</h3>
        <label htmlFor='img'>Image</label>
        {errors.img && <div className='text-red-600'>{errors.img}</div>}
        <input onChange={e => setData('img', e.target.files ? e.target.files[0] : null)} id='img' name='img' type="file" accept="image/png, image/gif, image/jpeg" />
        <div className='mt-5 flex justify-between'>
            <input className='border rounded px-2' type='submit' value='UPLOAD'/>
            <button onClick={()=>setShowUploadForm(false)} className='border rounded px-2'>CANCEL</button>
        </div>
    </form>
</div>
}