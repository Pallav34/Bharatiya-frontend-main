import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { server } from '../index';
import axios from 'axios'
const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get(`${server}/blogs/`,{
        withCredentials:true,
    })
    .then((res)=>{
        setPosts(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])

  return (
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post._id} className="w-1/2 p-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
