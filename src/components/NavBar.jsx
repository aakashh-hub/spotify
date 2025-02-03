import React from 'react'
import { AudioLines, House, Search, FolderSearch2 } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='flex bg-gray-300 w-full h-10'>
        <div className='flex w-180 bg-blue-300 align-center'>
            <AudioLines />
        </div>
        <div className='flex w-200 bg-yellow-200 justify-center'>
            <House />
            <Search />
            <input className='w-80 border border-black-300 rounded-full' type='text' placeholder='what song do you want ?'/>
            <FolderSearch2 />
        </div>
        <div className='flex w-200 bg-black text-white justify-around'>
            <button>Premium</button>
            <button>Support</button>
            <button>Download</button>
            <button>Install</button>
            <button>Sign up</button>
            <button>Log In</button>
        </div>
    </div>
  )
}

export default NavBar
