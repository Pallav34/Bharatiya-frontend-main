import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { _id, title, content, imgUrl } = post; 

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        
        {/* Render Quill content using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: content.split(' ').slice(0, 50).join(' ') }} />
        ...
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/content/${_id}`} className="text-indigo-600 hover:text-indigo-900">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
