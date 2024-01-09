'use client'
import React from 'react'
import Link from 'next/link'

const AuthBox = () => {
  return (
     <form className='bg-blue-300 w-96 h-52 rounded-xl flex flex-col px-5 py-5'>
               <label htmlFor="" className='ml-[2%]'>Username:</label>
               <input name='Username' className='bg-white rounded-full text-center' placeholder='JohnDoe@email.com'/>
               <label htmlFor="Password" className='ml-[2%]'>Password:</label>
               <input name='Password' type='password' className='bg-white rounded-full text-center' placeholder='********'/>
               <a className='ml-[2%]'>Forgot Username or password?</a>
               <div className='flex gap-5 justify-center pt-[10px]'>
                    <button className='bg-white py-1 px-2 rounded-full'>Sign Up</button>
                    <button className='bg-white py-1 px-2 rounded-full'>Sign In</button>
               </div>     
     </form>
  )
}

export default AuthBox