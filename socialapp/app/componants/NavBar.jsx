import Link from 'next/link'
import React from 'react'
import ProfilePic from './pfp'

function NavBar() {
  return (
    <nav className='absolute w-screen h-28 t-0 left-0 bg-[#71df9951] flex justify-between items-center pl-32 text-center font-bold text-xl'>
          <div className='flex gap-8 ml-8 items-center'>
            <Link href={'/homePage'} className='hover:bg-[#4CAF50] w-24 h-10 rounded-lg p-2'>Home</Link>
            <Link href={'./profilePage'} className='hover:bg-[#4CAF50] w-20 h-10 rounded-lg p-2'>Profile</Link>
            <Link href={'./'} className='hover:bg-[#4CAF50] w-24 h-10 rounded-lg p-2'>Log Out</Link>
          </div>
          <div className='flex gap-8 items-center mr-8'>
            <Link href={'/postPage'} className='bg-[#4CAF50] w-24 h-10 p-2 rounded-lg hover:bg-green-900 hover:text-white'>Post</Link>
            <ProfilePic />
          </div>
    </nav>
  )
}

export default NavBar