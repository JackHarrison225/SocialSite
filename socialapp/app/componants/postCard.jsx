
"use client";

import { ThumbsUp } from "lucide-react"

const PostCard = ({
    text,
    image,
    liked,
    user
}) => {
    
    return (
    <div>
     <div className="w-48 h-72 rounded-lg overflow-hidden relative">
        <img src={image} alt={text} className="w-full h-full object-cover"/>
        {liked ? <ThumbsUp
            className="absolute bottom-2 right-2 text-green-600"
            size={24}
        /> : <X
            className="absolute bottom-2 right-2 text-white"
            size={24}
        /> }
    </div>
    </div>
  )
}
export default PostCard