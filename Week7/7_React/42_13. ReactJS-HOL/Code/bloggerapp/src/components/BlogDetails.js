// src/components/BlogDetails.js
import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Tips & Tricks' },
    { id: 2, title: 'Understanding JSX' }
  ];

  return (
    <div>
      <h3>📝 Blog Details</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
