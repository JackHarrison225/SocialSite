import React from 'react'
import NavBar from '../componants/NavBar'
import ProfileBox from '../componants/profileBox'

const page = () => {
  return (
     <div className='w-full h-full'>
          <NavBar />
          <div className='flex flex-col pt-[144px]'>
            <ProfileBox />
          </div>
          
     </div>
  )
}

export default page