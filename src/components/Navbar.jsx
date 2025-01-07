import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo" className='h-10 w-10' />
                <span className="text-lg tracking-tight">VirtualR</span>
            </div>
            <ul className="lg:flex hidden mx-14 space-x-12">
                {navItems.map((item, index)=>(
                    <li key={index}>
                        <a href={item.href}> {item.label} </a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center gap-12 w-fit">
                <a href="#" className='border rounded-md px-3 py-2'>Sign In</a>
                <a href="#" className='rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 '>Create an account</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar