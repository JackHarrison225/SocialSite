'use client'
import React, {useEffect} from 'react'
import ProfilePic from './pfp'
import PostCard from './postCard'

const ProfileBox = (
) => {
     
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
     <div className='flex flex-col bg-[#F5F5DC] mx-[144px] shadow-2xl rounded-lg items-center py-10 gap-10'> 
          <ProfilePic 
          imageLink={getLink} //getLink()
          className1="w-40 h-40 bg-[#ffffff] rounded-full overflow-x-hidden overflow-y-hidden"
          className2="min-w-[300px] min-h-[300px] ml-[-60px] mt-[-60px]"
          />
          <div className='flex gap-10 bg-[#F5F5DC] h-60 w-full px-10'>
               <div className='w-1/3 bg-[#F5F5DC] h-full rounded-lg shadow-lg'>

               </div>{/* status */}
               <div className='shadow-lg w-full bg-[#F5F5DC] rounded-lg h-full'>

               </div>{/* box for user info */}
          </div>
          <div className='flex gap-10 bg-[#F5F5DC] h-full w-full px-10'>
               {/* area for user Posts allow to delete them here as well. */}

          </div>
     
     </div>
  )
}

export default ProfileBox