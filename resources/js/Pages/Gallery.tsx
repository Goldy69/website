import { Props } from '@/types/props.type';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Navbar } from '@/Components/Navbar';
import { useCategories } from '@/hooks/useCategories';
import { FormEvent, useEffect, useState } from 'react';
import {Inertia} from "@inertiajs/inertia";

interface img {
    category: string,
    created_at: string,
    id: number,
    user_id: number,
    name: string,
    updated_at: string
}

export default function Gallery(props: Props<{ category: string, foreCloseUploadForm: boolean, imgs: img[]}>) {
    const [showUploadForm, setShowUploadForm] = useState<boolean>(false)
    const [imgUrl, setImgUrl] = useState<string|undefined>(undefined)

    const { data, setData, post, processing, errors, reset } = useForm<{
        img: null | File,
    }>({
        img: null,
    });

    useEffect(()=>{
        if (props.foreCloseUploadForm) {
            setShowUploadForm(false);
            reset();
        }
    }, [props.foreCloseUploadForm])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        post(route('gallery', props.category));
    }

    const  deleteImg = (id: number) => { 
        Inertia.delete(route('gallery', id));
    }

    return <>

        <Head title="Home"/>


        <div className=" relative gap-2 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
            {(showUploadForm  || errors.img) && <div className='fixed z-10 bg-gray-900/60 top-0 left-0 w-screen h-screen grid place-items-center'>
                <form onSubmit={(e)=>onSubmit(e)} className='bg-gray-800 flex flex-col gap-4  px-5 py-10'>
                    <h3 className='text-center font-bold text-2xl pb-5'>UPLOAD IMAGE</h3>
                    <label htmlFor='img'>Image</label>
                    {errors.img && <div className='text-red-600'>{errors.img}</div>}
                    <input onChange={e => setData('img', e.target.files ? e.target.files[0] : null)} id='img' name='img' type="file" accept="image/png, image/gif, image/jpeg" />
                    <div className='mt-5 flex justify-between'>
                        <input className='border rounded px-2' type='submit' value='UPLOAD'/>
                        <button onClick={()=>setShowUploadForm(false)} className='border rounded px-2'>CANCEL</button>
                    </div>
                </form>
            </div> }

            {imgUrl && <div className='fixed z-10 bg-gray-900/60 top-0 left-0 w-screen h-screen grid place-items-center'>
                    <div className='border-2 relative mx-2'>
                        <img src={imgUrl}></img>
                        <button className=' absolute top-0 right-0 text-red-600 font-bold text-[2rem]' onClick={()=>setImgUrl(undefined)}>
                                X
                            </button>
                    </div>
                </div>}

            <Navbar user={props.auth.user}/>

            <main className=' flex flex-col gap-4 p-4'>
                <div className='flex justify-between'>
                    <div className='text-2xl capitalize'>{props.category}</div>
                    <button onClick={()=>setShowUploadForm(true)} className='border rounded px-2'>UPLOAD</button>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-4 justify-start  '>
                    {props.imgs.map((img, index) => {
                        const backgroundUrl = img.name.replace('public/', 'storage/');
                        const backgroundImage = `url('/${backgroundUrl}')`;
                        return <div className='relative' key={`img_${index}`}>
                            <div onClick={()=>setImgUrl(`/${backgroundUrl}`)} className='bg-center bg-cover bg-red-600 aspect-square w-full md:w-60 rounded ' style={{backgroundImage}}></div>
                            <button className=' absolute top-0 right-0 text-red-600 font-bold text-[2rem]' onClick={()=>deleteImg(img.id)}>
                                X
                            </button>
                        </div>
                        }

                    )}

                </div>
            </main>

        </div>

    </>
}
