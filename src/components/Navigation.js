import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Post</Link>
        </nav>
    );
};

export default Navigation;