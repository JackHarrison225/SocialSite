'use client'
import React, { useEffect, useState } from 'react'
import ProfilePic from './pfp'
import PostCard from './postCard'

const ProfileBox = (
) => {
     const [posts, setPosts] = useState([]);

     const edit = () => {
          return(document.location.href="./editUserPage")
     }
     useEffect(() => {
       const storedPosts = localStorage.getItem('globalPosts');
   
       if (storedPosts) {
         const parsedPosts = JSON.parse(storedPosts);
         setPosts(parsedPosts);
       }
     }, []);
     const checkPost = (post) => {
          let currentUser = JSON.parse(localStorage.getItem("currentUser"))
          if (post.user == currentUser.name){
               return(
                    <div>
                         <PostCard
                         key={post.post.id}
                         text={post.post.title}
                         image={post.post.image}
                         liked={post.liked}
                         user={post.user}
                         />
                         <button>Delete</button>
                    </div>
               )
          }
     }
          
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
     <div className='flex flex-col bg-[#F5F5DC] mx-[144px] shadow-2xl rounded-lg items-center pb-10 gap-10'> 
          <div className='w-full p-2'>
               <button onClick={edit} className=' float-right px-2 py-1 rounded-lg bg-green-200'>edit</button>
          </div>
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
               {posts.map((post) => (
                    checkPost(post)
               ))}

          </div>
     
     </div>
  )
}

export default ProfileBox