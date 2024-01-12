"use client"

import React, { useEffect, useState } from 'react';
import NavBar from '../componants/NavBar';

const page = () => {
     const handleSubmit = () =>{

     }
     const [userObject, setuserObject] = useState({})
     
     
     return(
          <main>
               <NavBar />
               <div className='w-screen h-screen flex items-center justify-center'>
                    <form className='flex flex-col p-5 w-96 rounded-lg shadow-lg'
                    id='my-form' onSubmit={handleSubmit}>
                         <label className='ml-[2%]' htmlFor='username'>User name:</label>
                         <input className='rounded-full'
                         name='username' value={userObject.name}></input>

                         <label className='ml-[2%]' htmlFor='password'>Password:</label>
                         <input className='rounded-full'
                         name='password' value={userObject.password}></input>

                         <label className='ml-[2%]' htmlFor='ProfilePictrue'>Profile Picture:</label>
                         <input className='rounded-full'
                         name='ProfilePictrue' ></input>

                         <label className='ml-[2%]' htmlFor='status'>Status:</label>
                         <input className='rounded-full'
                         name='status'></input>

                         <label className='ml-[2%]' htmlFor='about'>About:</label>
                         <input className='rounded-full'
                         name='about'></input>

                         <div className='flex gap-5 justify-center pt-[10px]'>
					     <button className='bg-[#4CAF50] py-1 px-2 rounded-full' 
					     type='submit'>Submit</button>
				     </div>
                    </form>
                    
               </div>
          </main>
     )

}

export default page