import React from 'react'

const ProfilePic = ({
     imageLink,
     className1,
     className2
}) => {
  return (
     <div className={className1}>
      <img className={className1}
      src={imageLink} alt="PFP" 
      />
    </div>

  )
}

export default ProfilePic
