import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import PostCreationForm from './components/PostCreationForm';
import PostDetailView from './components/PostDetailView';
import Navigation from './components/Navigation';
import './App.css'; // Add this line at the top

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on initial render
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Function to add a new post
  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/create" element={<PostCreationForm addPost={addPost} />} />
          <Route path="/post/:id" element={<PostDetailView posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;