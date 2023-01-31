import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import { Link, Head } from '@inertiajs/inertia-react';
import { Props } from '@/types/props.type';

export interface Category {
    name: string;
}

export default function Browse(props: Props<{
    canLogin: boolean;
    canRegister: boolean;
    laravelVersion: string;
    phpVersion: string;
    categories: Category[];
}>) {
    return <>
        <Head title="Home" />
        <div className="font-lucky relative gap-2 grid grid-rows-[auto,1fr,auto] min-h-screen bg-cat bg-center bg-cover text-white">
            <Navbar user={props.auth.user} />

            <main className='relative z-50 px-4 py-2 flex flex-col gap-4'>
                <h1 className='text-2xl'>Categories</h1>
                <div className='flex flex-wrap  gap-2 items-start'>
                    {props.categories.map((value, index, array) => <div key={`category_${index}`} className='text-2xl border rounded transition hover:bg-white/10'>
                        <Link className=' px-4 py-10 grid place-items-center capitalize' href={route('gallery', value)}>
                            {value.name}
                        </Link>
                    </div>)}
                </div>
            </main>

            <Footer />

            <div className='absolute top-0 left-0 h-[100vh] w-screen bg-gradient-to-b from-gray-800'>

                </div>
        </div>
    </>
}