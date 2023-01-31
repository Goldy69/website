import { Link, Head } from '@inertiajs/inertia-react';
import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components/Footer';
import { LinkWhite } from '@/Components/Buttons/LinkWhite';
import { Props } from '@/types/props.type';

export default function About(props: Props) {
    return <>
        <Head title="Home" />
        <div className=" font-lucky relative gap-2 grid grid-rows-[auto,1fr,auto] min-h-screen  bg-cat bg-center bg-cover text-white">
            <Navbar user={props.auth.user} />

            <main className='relative z-50 px-4 py-2 flex flex-col items-center justify-center gap-[5rem] text-left'>
                <h1 className='text-[3rem]'>About</h1>
                <div className='font-sans'>
                   Nuotrauku kelimo puslapis
                </div>
            </main>

            <Footer />

            <div className='absolute top-0 left-0 h-[100vh] w-screen bg-gradient-to-b from-gray-800'>

            </div>
        </div>
    </>
}