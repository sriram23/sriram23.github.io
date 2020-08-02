import axios from 'axios';

export default {
    postBlog: ({ commit }, blog) => {
        const response = axios.post('https://blooming-sea-36559.herokuapp.com/create',blog);
        commit('newBlog', blog);
        return response;
    },
    fetchBlog: async ({ commit }) => {
        const response = await axios.get('https://blooming-sea-36559.herokuapp.com/fetch-blog');
        commit('fetchBlog', response);
    }
}
