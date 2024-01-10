import React from 'react'

const ProfilePic = (
     imageLink
) => {
  return (
     <div className='absolute float-left w-20 h-20 right-4 top-4 bg-[#000000] rounded-full overflow-x-hidden overflow-y-hidden'>
     <img className='min-w-[150px] min-h-[150px] ml-[-30px] mt-[-30px]' 
     src={imageLink} alt="PFP" 
     />
</div>
  )
}

export default ProfilePic