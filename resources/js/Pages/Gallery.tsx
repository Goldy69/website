import { Props } from '@/types/props.type';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Navbar } from '@/Components/Navbar';
import { FormEvent, useEffect, useState } from 'react';
import {Inertia} from "@inertiajs/inertia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faX, faPen} from '@fortawesome/free-solid-svg-icons'
import { UploadForms } from '@/Components/UploadForms';
import { Category } from './Home';

export interface img {
    category: Category,
    created_at: string,
    id: number,
    user_id: number,
    name: string,
    updated_at: string,
    user_name: string
}

export default function Gallery(props: Props<{ category: Category, imgs: img[]}>) {
    const [showUploadForm, setShowUploadForm] = useState<boolean>(false)
    const [showEditForm, setShowEditForm] = useState<boolean>(false)
    const [selectedEditImg, setSeletectedEditImg] = useState<img|null>(null)
    const [imgUrl, setImgUrl] = useState<string|undefined>(undefined)

    console.log(props)

    const  deleteImg = (id: number) => { 
        Inertia.delete(route('gallery', id));
    }

    const clickEdit = (img: img) => {
        setSeletectedEditImg(img);
        setShowEditForm(true);
    }

    return <>

        <Head title="Home"/>


        <div className=" relative gap-2 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
            {(showUploadForm) &&  <UploadForms {...props} update={false} title="UPLOAD IMAGE" showUploadForm={showUploadForm} setShowUploadForm={setShowUploadForm}/>}
            {(showEditForm) &&  <UploadForms {...props} update={true} update_img={selectedEditImg?.id} title="CHANGE IMAGE" showUploadForm={showEditForm} setShowUploadForm={setShowEditForm}/>}

            {imgUrl && <div className='fixed z-10 bg-gray-900/60 top-0 left-0 w-screen h-screen grid place-items-center'>
                    <div className='border-2 relative mx-2'>
                        <img src={imgUrl}></img>
                        <button className='   text-red-600 absolute top-0 right-0 font-bold text-[1.5rem]  ' onClick={()=>setImgUrl(undefined)}>
                            <FontAwesomeIcon className='rounded-full aspect-square bg-white p-1' icon={faX} />
                        </button>
                    </div>
                </div>}

            <Navbar user={props.auth.user}/>

            <main className=' flex flex-col gap-4 p-4'>
                <div className='flex justify-between'>
                    <div className='text-2xl capitalize'>{props.category.name}</div>
                    <button onClick={()=>setShowUploadForm(true)} className='border rounded px-2'>UPLOAD</button>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-4 justify-start  '>
                    {props.imgs.map((img, index) => {
                        const backgroundUrl = img.name.replace('public/', 'storage/');
                        const backgroundImage = `url('/${backgroundUrl}')`;
                        return <div className='relative' key={`img_${index}`}>
                            <div onClick={()=>setImgUrl(`/${backgroundUrl}`)} className='bg-center bg-cover bg-red-600 aspect-square w-full md:w-60 rounded ' style={{backgroundImage}}></div>
                            <div className='transition opacity-0 hover:opacity-100 absolute top-0 right-0 w-full flex flex-col h-full'>
                                <div className=' flex gap-2 justify-between px-2 '>
                                    
                                    <div  className=' text-red-600 font-bold w-full text-[1.5rem] leading-8 my-2 px-2 overflow-hidden text-ellipsis self-start bg-white rounded' >
                                        {img.user_name}
                                    </div>

                                    {props.auth.user.id === img.user_id && <button className=' text-red-600 self-start py-2' onClick={()=>clickEdit(img)}>
                                        <FontAwesomeIcon className='bg-white rounded-full p-2 aspect-square' icon={faPen} />
                                    </button>
                                    }

                                    {props.auth.user.id === img.user_id && <button className=' text-red-600 self-start py-2' onClick={()=>deleteImg(img.id)}>
                                        <FontAwesomeIcon className='bg-white rounded-full p-2 aspect-square' icon={faTrash} />
                                    </button>
                                    }
                                
                                </div>
                                <div onClick={()=>setImgUrl(`/${backgroundUrl}`)} className='w-full h-full'>

                                </div>
                            </div>
                        </div>
                        }

                    )}

                </div>
            </main>

        </div>

    </>
}
