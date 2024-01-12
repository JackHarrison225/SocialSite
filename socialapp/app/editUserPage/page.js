"use client"

import React, { useEffect, useState } from 'react';
import NavBar from '../componants/NavBar';

const page = () => {

     const FindUser = () => {
          useEffect(() => {
               let user = JSON.parse(localStorage.getItem('user'))
               let currentUser = JSON.parse(localStorage.getItem('currentUser'))
         
          console.log(user)
          console.log(currentUser)
     
          for(let i in user)
               {
                    if (user[i].name == currentUser.name && user[i].password == currentUser.password)
                    {
                         userObject = user[i]
                    }
               } 
          }, [])
     }
     let [userObject, setuserObject] = useState([FindUser()])
     

     const changeUser = () => {
          const user = JSON.parse(localStorage.getItem('user'))
          const currentUser = JSON.parse(localStorage.getItem('currentUser'))
          for(let i in user){
               if (user[i].name == currentUser.name && user[i].password == currentUser.password)
               {
                    console.log(currentUser)
                    user[i] = userObject
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('currentUser', JSON.stringify(user)) 
               }
          }
     }
     const setCurrentUse = () => {

     }

     const handleSubmit = () => {

          changeUser()
          return( document.location.href=("./profilePage"))

     }
     
     
     const handleInputChange = (event) => {
          console.log(userObject)
          console.log("<<UserObject     event>>")
          console.log([event.target.name])
          setuserObject({
               ...userObject,
               [event.target.name]: event.target.value
          })
          return(userObject)
          
     }
     
     return(
          <main>
               <NavBar />
               <div className='w-screen h-screen flex items-center justify-center'>
                    <form className='flex flex-col p-5 w-96 rounded-lg shadow-lg'
                    id='my-form' onSubmit={handleSubmit}>
                         <label className='ml-[2%]' htmlFor='username'>User name:</label>
                         <input className='rounded-full pl-4' value={userObject.name}
                         name='name' onChange={handleInputChange} ></input> 
                       

                         <label className='ml-[2%]' htmlFor='password'>Password:</label>
                         <input className='rounded-full pl-4' type='password' value={userObject.password}
                         name='password' onChange={handleInputChange}></input>

                         <label className='ml-[2%]' htmlFor='ProfilePictrue'>Profile Picture:</label>
                         <input className='rounded-full pl-4'
                         name='PFP' ></input>

                         <label className='ml-[2%]' htmlFor='status'>Status:</label>
                         <input className='rounded-full pl-4' value={userObject.status}
                         name='status' onChange={handleInputChange}></input>

                         <label className='ml-[2%]' htmlFor='about'>About:</label>
                         <input className='rounded-full pl-4' value={userObject.about}
                         name='about' onChange={handleInputChange}></input>

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