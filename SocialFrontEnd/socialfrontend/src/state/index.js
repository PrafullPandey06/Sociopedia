import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: "prafull", // inital null
    token: null, 
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user; // here use and token are just parameters
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.log("user friends non-existent");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post; // if any new post is created than return it or return post
                return post;
            });
            state.posts = updatedPosts;
        }
    }
})

export const { setMode, setLogin, setFriends, setLogout, setPost, setPosts } = authSlice.actions
export default authSlice.reducer;
