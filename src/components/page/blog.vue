<template>
    <div class="blog-container">
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="fullPage"></loading>
        <div class="blog-card" v-for="blog in blogs" :key="blog._id">
            <BlogCard @cardClicked="navigateTo(blog)" :title="blog.title" :author="blog.author" :desc="blog.content" :date="convertTime(blog.createdAt)"/>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import BlogCard from './blog-card'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Blog',
    components: {
        BlogCard,
        Loading,
    },
    data() {
        return{
            isLoading: true,
        }
    },
    computed: {
        ...mapState([
            'blogs'
        ])
    },
    methods: {
        ...mapActions(['fetchBlog']),
        navigateTo(blog) {
            this.$router.push(`/blog/${blog._id}/${blog.title}`);
        },
        async renderBlogs() {
            this.isLoading = true;
            await this.fetchBlog();
            this.isLoading = false;
        },
        convertTime(isoTime) {
            const time = moment(isoTime).fromNow();
            return time;
        }
    },
    mounted() {
        this.renderBlogs();
    }
}
</script>

<style lang="scss" scoped>
.blog-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem !important;
    .blog-card {
        width: 90%;
        margin: 1rem 0 !important;
        @media (max-width: 425px) {
            width: 100%;
        }
    }
}
</style>