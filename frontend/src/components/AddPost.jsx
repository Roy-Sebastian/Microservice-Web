import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleAddPost = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/posts', { title, content, image }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Post added successfully!');
            window.location.href = '/home';
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Failed to add post!');
        }
    };

    return (
        <form onSubmit={handleAddPost}>
            <h2>Add Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;