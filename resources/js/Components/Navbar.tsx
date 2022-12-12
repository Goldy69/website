import { Link } from '@inertiajs/inertia-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { User } from '@/types/props.type';

export function Navbar({user}:{user: User | null}) {
    const [toggleDarkMode, isDarkMode] = useDarkMode();

    return <nav className='p-4 flex justify-between  flex-col sm:flex-row items-center sm:items-start dark:bg-gray-800'>
        <h2 className='text-2xl font-bold'>
            <Link href={route('home')}>IMG HUB</Link>
        </h2>
        <div className='flex flex-col sm:flex-row gap-2 items-center'>
            <button className='border px-2 rounded' onClick={() => toggleDarkMode()}>{isDarkMode ? 'Dark' : 'Light'}</button>
            {user ? (
                <div className='border px-2 rounded'>
                    <Link href={route('logout')} method="post">
                        Logout
                    </Link>
                </div>
            ) : (
                <>
                    <div className='border px-2 rounded'>
                        <Link href={route('login')} >
                            Log in
                        </Link>
                    </div>

                    <div className='border px-2 rounded'>
                        <Link
                            href={route('register')}

                        >
                            Register
                        </Link>
                    </div>
                </>
            )}
        </div>
    </nav>
}
