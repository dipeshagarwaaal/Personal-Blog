import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ posts }) => {
    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post, index) => (
                    <div className="blog-post" key={index}>
                        <h2>
                            <Link to={`/post/${index}`}>{post.title}</Link>
                        </h2>
                        <p>{post.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default HomePage;