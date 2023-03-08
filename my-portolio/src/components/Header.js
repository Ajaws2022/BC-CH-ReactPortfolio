import React from 'react'
import Navbar from './Navbar'
export default function Header(){
    return(
        <header className='w-full bg-gray-600 flex items-end justify-between h-28'>
            <h1 className='text-3xl ml-5 text-green-400 py-8'> Alex Jaworski </h1>
            <Navbar />
        </header>
    )
}