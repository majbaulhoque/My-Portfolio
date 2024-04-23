'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed
        top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                {/* <Link href={"/"} className='text-5xl text-white font-semibold'>LOGO</Link> */}
                <Link href="/" className='text-2xl md:text-5xl text-white font-semibold border-2 border-purple-700 px-4 py-2 shadow-inner'>Majba</Link>
                {/* <Link href="/">
                <Image
                    src="/p.png"
                    alt="Description of the image"
                    width={500}
                    height={300}
                />
                </Link> */}
                <div className='mobile-menu block md:hidden ml-52'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py- border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'><Bars3Icon className='h-5 w-5'/></button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py- border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'><XMarkIcon className='h-5 w-5'/></button>
                    )
                }
                </div>
                <div className='menu block md:block md:w-auto' id='navbar'>
                    <ul className='hidden md:flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, idx) => (<li key={idx}>
                                <NavLink href={link.path} title={link.title} />
                            </li>))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;