import { Link } from '@inertiajs/inertia-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { User } from '@/types/props.type';
import { LinkRed } from './Buttons/LinkRed';
import { LinkWhite } from './Buttons/LinkWhite';

export function Navbar({user}:{user: User | null}) {
    const [toggleDarkMode, isDarkMode] = useDarkMode();

    return <nav className='p-4 relative z-50 flex justify-between  flex-col sm:flex-row items-center sm:items-start '>
        <h2 className='text-[1.5rem] font-bold'>
            <Link href={route('home')}>CATIMG</Link>
        </h2>
        <div className='flex flex-col sm:flex-row gap-2 items-center'>
            <LinkWhite routeName='contact'>Contact</LinkWhite>
            <LinkWhite routeName='about'>About</LinkWhite>
            {user ? (
                <LinkRed routeName='logout'>Logout</LinkRed>
            ) : (
                <>
                    <LinkWhite routeName='login'>Log in</LinkWhite>
                    <LinkWhite routeName='register'>Register</LinkWhite>
                </>
            )}
        </div>
    </nav>
}
