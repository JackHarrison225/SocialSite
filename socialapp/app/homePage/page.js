"use client"

import React, { useEffect, useState } from 'react';
import NavBar from '../componants/NavBar';
import PostCard from '../componants/PostCard';

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('globalPosts');

    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className='p-4'>
        <div className='flex flex-wrap gap-10 mt-28'>
          {posts.map((post) => (
            <PostCard
              key={post.post.id}
              text={post.post.title}
              image={post.post.image}
              liked={post.liked}
              user={post.user}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
