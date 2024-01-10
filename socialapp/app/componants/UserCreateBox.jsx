'use client'
import React from 'react'
import Link from 'next/link'

const UserCreateBox = () => {
     const checkPasswordValid = (password) => {
          const isRight = /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,20}$/g.test(password);
          return isRight ? alert("Valid") : alert("Password should be 8-20 charicters long, conatain at least one number, one uppercase and one lowercase letter.") 
     
     };
     const checkPasswordsAreSame = (password, passwordRepeat) => {
          return password == passwordRepeat? alert("same") : alert("Passwords Should match")
     }

     const checkPassword = (password1 , password2) => {
          checkPasswordValid(password1);
          checkPasswordsAreSame(password1, password2)
          return
     }

  return (
    <div>
      <h3 className='text-center text-3xl'>Sign Up For Dino Book</h3>
      <form className='bg-[#71df99] w-96 h-56 rounded-xl flex flex-col px-5 py-5'>
          <label htmlFor="" className='ml-[2%]'>Username:</label>
          <input name='Username' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' placeholder='JohnDoe@email.com'/>
          <label htmlFor="Password" className='ml-[2%]'>Password:</label>
          <input name='Password' type='password' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' placeholder='********'/>
          <label htmlFor="PasswordRepeat" className='ml-[2%]'>Repeat Password:</label>
          <input name='PasswordRepeat' type='password' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' placeholder='********'/>
          <div className='flex gap-5 justify-center pt-[10px]'>
            <button className='bg-[#4CAF50] py-1 px-2 rounded-full' onClick={checkPassword()}>Sign Up</button>
          </div>     
      </form>
    </div>

  )
}

export default UserCreateBox