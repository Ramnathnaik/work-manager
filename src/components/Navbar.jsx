'use client';

import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-sky-500 to-indigo-500 px-20 py-2 h-14 flex justify-between items-center'>
        <div className='brand'>
            <h1 className='text-xl font-semibold'><a href="#!">Task Manager</a></h1>
        </div>
        <div>
            <ul className='flex space-x-7'>
                <Link href={'/'} className='hover:text-white hover:font-semibold'>Home</Link>
                <Link href={'/add-task'} className='hover:text-white hover:font-semibold'>Add Task</Link>
                <Link href={'/show-tasks'} className='hover:text-white hover:font-semibold'>Show Tasks</Link>
            </ul>
        </div>
        <div>
            <ul className='flex space-x-5 font-semibold'>
                <li><a href="#!">Login</a></li>
                <li><a href="#!">Signup</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar