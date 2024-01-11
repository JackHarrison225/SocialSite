'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ProfilePic from './pfp'

function NavBar() {
     const getLink = () => {
          useEffect(() => {
               let userList = JSON.parse(localStorage.getItem('user'));
               let currentUser = JSON.parse(localStorage.getItem("currentUser"))
          
               for(let i in userList){
                    if(userList[i].name == currentUser.name && userList[i].password == currentUser.password){
                         imgLink = userList[i].PFP
                         return(imgLink)
                    }
               }
          }, [])
     }

     return (
          <nav className='absolute w-screen h-28 t-0 left-0 bg-[#71df9951] flex justify-between items-center pl-32 text-center font-bold text-xl'>
               <div className='flex gap-8 ml-8 items-center'>
                    <Link href={'/homePage'} className='hover:bg-[#4CAF50] w-24 h-10 rounded-lg p-2'>Home</Link>
                    <Link href={'./profilePage'} className='hover:bg-[#4CAF50] w-20 h-10 rounded-lg p-2'>Profile</Link>
                    <Link onClick={setCurrentUser} href={'./'} className='hover:bg-[#4CAF50] w-24 h-10 rounded-lg p-2'>Log Out</Link>
               </div>
               <div className='flex gap-8 items-center mr-8'>
                    <Link href={'/postPage'} className='bg-[#4CAF50] w-24 h-10 p-2 rounded-lg hover:bg-green-900 hover:text-white'>Post</Link>
                    <ProfilePic 
                    imageLink={getLink} 
                    className1={'float-left w-20 h-20 right-4 top-4 bg-[#000000] rounded-full overflow-x-hidden overflow-y-hidden for navbar'}
                    className2={'min-w-[150px] min-h-[150px] ml-[-30px] mt-[-30px]'} />
               </div>
          </nav>
     )
}

export default NavBar