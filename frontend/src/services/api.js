import axios from 'axios';

const API_BASE_URL = '/api';

export const loginUser = (email, password) => {
    return axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const registerUser = (username, email, password) => {
    return axios.post(`${API_BASE_URL}/auth/register`, { username, email, password });
};

export const getUser = (token) => {
    return axios.get(`${API_BASE_URL}/auth/user`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getPosts = () => {
    return axios.get(`${API_BASE_URL}/posts`);
};

export const createPost = (post, token) => {
    return axios.post(`${API_BASE_URL}/posts`, post, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const updatePost = (id, post, token) => {
    return axios.put(`${API_BASE_URL}/posts/${id}`, post, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const deletePost = (id, token) => {
    return axios.delete(`${API_BASE_URL}/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};