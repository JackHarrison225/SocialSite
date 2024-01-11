'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const AuthBox = () => {
     const [userObject, setuserObject] = useState({})
     const [userList, setUsers] = useState([])
     
     const handleInputChange = (event) => {
          console.log(event.target.name)
          setuserObject({
               ...userObject,
               [event.target.name]: event.target.value
          })
     }
     
     useEffect(() => {
          const userList = JSON.parse(localStorage.getItem('users'));
          if (!userList) return;
          setUsers(userList);
     }, [])

     const setCurrentUser = () => {
          const currentUser = {name : userObject.name , password : userObject.password};
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return console.log(currentUser);
     };

     const checkInput = () =>
          {
               let valid = false
               if(!userList) return console.log("there is an error no users");
               for(let i in userList)
               {
                    if(userList[i].name == userObject.name)
                    { 
                         if(userList[i].Password == userObject.Password)
                         {
                              valid = true
                              setCurrentUser()
                         }
                    }
               }
               if(valid == false){return console.log("there is an error inncorrect email ");}
               else if(valid == true){return document.location.href=("./profilePage")}
          }

     const handleSubmit = (event) => {
          event.preventDefault();
          if (!userObject.name || !userObject.password) {
               console.log("there is an error no input");
               return
          }
          checkInput()
     };
  
     return (
          <div>
               <h3 className='text-center text-3xl'>Sign In To Dino Book</h3>
               <form className='bg-[#71df99] w-96 h-52 rounded-xl flex flex-col px-5 py-5' 
               id='my-form' onSubmit={handleSubmit}>
                    <label htmlFor="" className='ml-[2%]'>Email or Username:</label>
                    <input  name='name' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' 
                    placeholder='JohnDoe@email.com' onChange={handleInputChange} value={userObject.name}/>

                    <label htmlFor="password" className='ml-[2%]'>Password:</label>
                    <input name='password' type='password' className='bg-[#b9d9f8] rounded-full text-center placeholder-[#808080]' 
                    placeholder='********' onChange={handleInputChange} value={userObject.password}/>
                    <a className='ml-[2%]'>Forgot Username or password?</a>
                    <div className='flex gap-5 justify-center pt-[10px]'>
                    <Link href={"./createUserPage"} className='bg-[#4CAF50] py-1 px-2 rounded-full'>Sign Up</Link>
                    <button type='submit' className='bg-[#4CAF50] py-1 px-2 rounded-full'>Sign In</button>
                    </div>     
               </form>
          </div>

     )
}

export default AuthBox