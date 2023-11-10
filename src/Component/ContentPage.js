import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../index";

const ContentPage = () => {
  const { contentId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`${server}/blogs/${contentId}`, {
      withCredentials: true,
    })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contentId]);

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imgUrl} alt={post.title} />

      {/* Render Quill content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Other content fields can be rendered as normal */}
      <p>{post.otherField}</p>
    </div>
  );
};

export default ContentPage;
