import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export function LinkWhite({routeName, children}:{routeName: string, children: string}) {
    return <div className='transition hover:bg-gray-200 text-[1.5rem] px-2 rounded bg-white grid items-center pt-1 text-red-600'>
        <Link href={route(routeName)} >
        {children}
    </Link>
    </div>
}