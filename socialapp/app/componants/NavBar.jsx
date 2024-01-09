import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='absolute w-screen h-28 t-0 left-0 bg-[#00000090] flex gap-8 items-center pl-8 text-center'>
          <Link href={''} className='float-left bg-white w-20 h-10 pt-2 rounded-lg'>Home</Link>

          <Link href={''} className='float-left bg-white w-20 h-10 pt-2 rounded-lg'>Post</Link>

          <Link href={''} className='float-left bg-white w-20 h-10 pt-2 rounded-lg'>Profile</Link>

          <Link href={'./'} className='float-left bg-white w-20 h-10 pt-2 rounded-lg'>Log Out</Link>
    </nav>
  )
}

export default NavBar