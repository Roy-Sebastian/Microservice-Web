import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`/api/posts/${id}`);
                setTitle(response.data.title);
                setContent(response.data.content);
                setImage(response.data.image);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    const handleEditPost = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`/api/posts/${id}`, { title, content, image }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Post updated successfully!');
            window.location.href = '/home';
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to update post!');
        }
    };

    return (
        <form onSubmit={handleEditPost}>
            <h2>Edit Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPost;