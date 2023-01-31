import { Link, Head } from '@inertiajs/inertia-react';
import { Props } from '@/types/props.type';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Navbar } from '@/Components/Navbar';
import { useState } from 'react';
import { Footer } from '@/Components/Footer';
import { LinkWhite } from '@/Components/Buttons/LinkWhite';

export interface Category {
    name: string;
}

export default function Home(props: Props<{
    canLogin: boolean;
    canRegister: boolean;
    laravelVersion: string;
    phpVersion: string;
    categories: Category[];
}>) {

    return (
        <>

            <Head title="Home" />
            <div className=" font-lucky relative gap-2 grid grid-rows-[auto,1fr,auto] min-h-screen  bg-cat bg-center bg-cover text-white">
                <Navbar user={props.auth.user} />

                <main className='relative z-50 px-4 py-2 flex flex-col md:flex-row items-center justify-center gap-[5rem] text-center'>
                    <div className='flex flex-col justify-center  '>
                    <img className='w-[15rem] h-[15rem] mx-auto visible md:hidden' src="/paw.png" alt="" />
                    <h1 className='text-[4rem] '>POST <br /> IMAGES FOR <br /> FREE</h1>
                    <div className='mx-auto'><LinkWhite routeName='browse'>Browse</LinkWhite></div>
                    </div>
                    <img className='w-[15rem] h-[15rem] hidden md:block' src="/paw.png" alt="" />
                </main>

                <Footer />

                <div className='absolute top-0 left-0 h-[50vh] w-screen bg-gradient-to-b from-gray-800'>

                </div>
            </div>
        </>
    );
}
