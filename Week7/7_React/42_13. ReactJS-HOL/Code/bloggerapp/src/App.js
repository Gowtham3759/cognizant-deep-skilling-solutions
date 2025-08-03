import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("books");

  let componentToRender;
  if (view === "books") {
    componentToRender = <BookDetails />;
  } else if (view === "blogs") {
    componentToRender = <BlogDetails />;
  } else {
    componentToRender = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧠 Blogger App</h1>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setView("books")}>Show Books</button>{' '}
        <button onClick={() => setView("blogs")}>Show Blogs</button>{' '}
        <button onClick={() => setView("courses")}>Show Courses</button>
      </div>

      {componentToRender}
    </div>
  );
}

export default App;
