export default {
    newBlog: (state, payload) => {
        state.blogs.unshift(payload);
    },
    fetchBlog: (state, payload) => {
        console.log('Payload: ',payload.data);
        state.blogs = payload.data;
    }
}
