import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 
import { Context, server } from "../index";
import { Navigate } from 'react-router-dom';
const CreatePost = () => {
    const { isAuthenticated } = useContext(Context);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [content, setContent] = useState(''); // State to manage Quill content

  
  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent page reload
  
    try {
      const postData = { ...data, content }; // Include content from Quill editor in the data
  
      const response = await axios.post(`${server}/blogs/new`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
  
      if (response.status === 201) {
        console.log('Blog post created successfully.');
      } else {
        console.error('Error creating blog post.');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };


  const handleContentChange = (value) => {
    setContent(value);
  };

  if (!isAuthenticated) return <h1>Login first</h1>;
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit((data, e) => onSubmit(data, e))}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', {
              required: 'Title is required',
            })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-600">
            Content
          </label>
          <Quill
            id="content"
            value={content}
            onChange={handleContentChange}
          />
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="imgUrl"
            {...register('imgUrl')}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
