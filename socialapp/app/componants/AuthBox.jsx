'use client'
import React from 'react'
import Link from 'next/link'

const AuthBox = () => {
  return (
    <div>
      <h3 className='text-center text-3xl'>Sign In To Tick Talk</h3>
      <form className='bg-[#71df99] w-96 h-52 rounded-xl flex flex-col px-5 py-5'>
          <label htmlFor="" className='ml-[2%]'>Username:</label>
          <input name='Username' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' placeholder='JohnDoe@email.com'/>
          <label htmlFor="Password" className='ml-[2%]'>Password:</label>
          <input name='Password' type='password' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' placeholder='********'/>
          <a className='ml-[2%]'>Forgot Username or password?</a>
          <div className='flex gap-5 justify-center pt-[10px]'>
            <button className='bg-[#4CAF50] py-1 px-2 rounded-full'>Sign Up</button>
            <button className='bg-[#4CAF50] py-1 px-2 rounded-full'>Sign In</button>
          </div>     
      </form>
    </div>

  )
}

export default AuthBox