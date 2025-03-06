import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailView = ({ posts }) => {
    const { id } = useParams();
    const post = posts[id];

    if (!post) {
        return <h2>Post not found!</h2>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetailView;