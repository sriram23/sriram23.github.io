export default {
    newBlog: (state, payload) => {
        state.blogs.unshift(payload);
    },
    fetchBlog: (state, payload) => {
        state.blogs = payload.data;
    },
    setBlog: (state, payload) => {
        state.currentBlog = payload;
    }
}
