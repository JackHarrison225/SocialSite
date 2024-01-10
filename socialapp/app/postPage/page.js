"use client";

import {useState, useEffect} from 'react';

const page = () => {

  const [postObject, setPostObject] = useState({})
  const [posts, setPosts] = useState([])
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (event) => {
    console.log(event.target.name)
    setPostObject((prevPostObject) => ({
        ...prevPostObject,
        [event.target.name]: event.target.value
    }));
}

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (!posts) return;
    setPosts(posts);
}, [])

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Text:', postObject.text);
  console.log('Image:', postObject.image);
  if (!postObject.text || !postObject.image) {
      console.log("there is an error");
      setIsError(true);
      setTimeout(() => {
          setIsError(false);
      }, 3000);
      return;
  }

  setPosts((prevPosts) => {
    const updatedPosts = [...prevPosts, postObject];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    return updatedPosts;
  });

  setIsSuccess(true);
  setPostObject({});
  setTimeout(() => {
      setIsSuccess(false);
  }, 3000);
};

  return (
     <div className='flex flex-col items-center'>
        <div>
          <h1 className='text-5xl font-bold pt-36 text-center'>Create a Post</h1>
        </div>
        <form className='w-1/2 flex flex-col mt-10 gap-4' onSubmit={handleSubmit}>
          <input
            placeholder='Enter text' name='text'
            onChange={handleInputChange}
            value={postObject.text}
          />
          <input
            placeholder='Enter image URL' name='image'
            onChange={handleInputChange}
            value={postObject.image}
          />
          <button type='submit' className='bg-[#4CAF50] w-24 h-10 p-2 rounded-lg font-bold hover:bg-green-900 hover:text-white'>
            Post
          </button>
        </form>
     </div>
  )
  }

export default page