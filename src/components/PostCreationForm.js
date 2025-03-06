import React, { useState } from 'react';

const PostCreationForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError('Title and content are required.');
            return;
        }
        addPost({ title, content });
        setTitle('');
        setContent('');
        setError('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Create a New Post</h1>
                {error && <p className="error">{error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostCreationForm;