import axios from 'axios';

export default {
    postBlog: ({ commit }, blog) => {
        const response = axios.post('https://blooming-sea-36559.herokuapp.com/create',blog);
        commit('newBlog', blog);
        return response;
    },
    fetchBlog: async ({ commit }, payload) => {
        const response = await axios.get(`https://blooming-sea-36559.herokuapp.com/fetch-blog/${payload.skip}/${payload.limit}`);
        commit('fetchBlog', response);
    },
    getBlog: async({ commit }, payload) => {
        const response = await axios.get(`https://blooming-sea-36559.herokuapp.com/blog/${payload}`);
        commit('setBlog', response);
    }
}
