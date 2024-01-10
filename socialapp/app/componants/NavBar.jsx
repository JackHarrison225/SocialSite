import Link from 'next/link'
import React from 'react'
import ProfilePic from './pfp'

function NavBar() {
  return (
    <nav className='absolute w-screen h-28 t-0 left-0 bg-[#71df9951] flex gap-8 items-center pl-32 text-center'>
          <Link href={''} className='float-left bg-[#4CAF50] w-20 h-10 pt-2 rounded-lg'>Home</Link>

          <Link href={''} className='float-left bg-[#4CAF50] w-20 h-10 pt-2 rounded-lg'>Post</Link>

          <Link href={'./profilePage'} className='float-left bg-[#4CAF50] w-20 h-10 pt-2 rounded-lg'>Profile</Link>

          <Link href={'./'} className='float-left bg-[#4CAF50] w-20 h-10 pt-2 rounded-lg'>Log Out</Link>

          <ProfilePic />
    </nav>
  )
}

export default NavBar