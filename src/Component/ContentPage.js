import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../index";
import "./ContentPageStyles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
   <>
   <Navbar post={Navbar}/>
    <div className="content-body">
    <section className="uppersection">
    <div className="post-details">
     
      <h1>{post.title}</h1>
      
      <img className="postpic" src={post.imgUrl} alt={post.title} />
     </div>
      </section>
      {/* Render Quill content using dangerouslySetInnerHTML */}
      <section className="bottomsection">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Other content fields can be rendered as normal */}
      <p>{post.otherField}</p>
      </section>
     
    </div>
     <Footer post={Footer}/>
    </>
  );
};

export default ContentPage;
