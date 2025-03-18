import React, { useState, useEffect } from 'react';
import { getUser, getPosts, deletePost } from '../services/api';
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Fetch user data
        getUser(token)
            .then((response) => setUser(response.data))
            .catch((error) => console.error('Error fetching user data:', error));

        // Fetch posts data
        getPosts()
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, [token]);

    const handleDelete = (id) => {
        deletePost(id, token)
            .then(() => setPosts(posts.filter((post) => post.id !== id)))
            .catch((error) => console.error('Error deleting post:', error));
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="profile">
                    <img src="assets/hero.jpg" alt="Profile" className="profile-pic" />
                    <h2>{user.username}</h2>
                    <p>@{user.username}</p>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/add">Add Post</a></li>
                        <li><a href="/login" onClick={() => localStorage.clear()}>Logout</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <section id="posts" className="posts">
                    <h2>Your Posts</h2>
                    {posts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="post-header">
                                <img src="assets/hero.jpg" alt="Profile" className="post-profile-pic" />
                                <div className="post-user-info">
                                    <h3>{user.username}</h3>
                                    <p>@{user.username}</p>
                                </div>
                            </div>
                            <div className="post-content">
                                {post.image && <img src={post.image} alt="Post" className="post-image" />}
                                <p>{post.content}</p>
                            </div>
                            <div className="post-actions">
                                <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
                                <a href={`/edit/${post.id}`} className="edit-button">Edit</a>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Home;