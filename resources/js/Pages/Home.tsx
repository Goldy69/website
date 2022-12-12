import { Link, Head } from '@inertiajs/inertia-react';
import { Props } from '@/types/props.type';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Navbar } from '@/Components/Navbar';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';

export default function Home(props: Props<{
    canLogin:       boolean;
    canRegister:    boolean;
    laravelVersion: string;
    phpVersion:     string;
}>) {
    const [categories, setCategories] = useCategories();

    return (
        <>

            <Head title="Home"/>
            <div className=" relative gap-2 grid grid-rows-[auto,1fr] min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
                <Navbar user={props.auth.user}/>

                <main className='px-4 py-2 flex flex-col gap-4'>
                    <h1 className='text-2xl'>Categories</h1>
                    <div className='flex flex-wrap  gap-2 items-start'>
                        {categories.map((value, index, array)=><div key={`category_${index}`} className='text-2xl border rounded transition hover:bg-gray-800'>
                            <Link className=' px-4 py-10 grid place-items-center capitalize' href={route('gallery', value)}>
                                {value}
                            </Link>
                        </div>)}
                    </div>
                </main>
            </div>
        </>
    );
}
