import React, { createContext, useContext, useEffect, useReducer } from 'react'
import blogReducer from '../reducer/blogReducer';
import axios from "axios";

const BlogContext = createContext();

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    blog: [],
    idSingleLoading: false,
    isSingleError: false,
};

const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState);

    const getBlogs = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get("/api/blog/getblogs");
            const blogs = await response.data;
            dispatch({ type: "SET_API_DATA", payload: blogs });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <BlogContext.Provider value={{ ...state }} >
            {children}
        </BlogContext.Provider>
    );
}

const useBlogContext = () => {
    return useContext(BlogContext);
}

export { BlogProvider, BlogContext, useBlogContext };