import axios from "axios";

const url = "http://localhost:5000/posts";

// api calls

// fetching all posts

export const fetchPosts = () => axios.get(url);

// fetching a certain post

export const fetchPost = (id) => axios.get(`${url}/${id}`);

//creating a post

export const createPost = (newPost) => axios.post(url, newPost);

// updating a post

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

// delete a post

export const deletePost = (id) => axios.delete(`${url}/${id}`);
