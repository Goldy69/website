import { ReactNode, MouseEventHandler } from 'react';

interface Props {
    children: ReactNode;
    type?: "submit" | "button" | "reset" | undefined;
    processing?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLElement>;
}

export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}