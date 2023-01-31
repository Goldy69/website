import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export function LinkRed({routeName, children}:{routeName: string, children: string}) {
    return <div className='transition hover:bg-red-700 text-[1.5rem] px-2 rounded bg-red-600 grid items-center pt-1 text-white'>
        <Link href={route(routeName)} method="post">
        {children}
    </Link>
    </div>
}