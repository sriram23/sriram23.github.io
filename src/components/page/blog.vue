<template>
    <div class="blog-container">
        <div class="blog-card" v-for="blog in blogs" :key="blog._id">
            <BlogCard @cardClicked="navigateTo(blog)" :title="blog.title" :author="blog.author" :desc="blog.content" :date="convertTime(blog.createdAt)"/>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import BlogCard from './blog-card'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Blog',
    components: {
        BlogCard
    },
    data() {
        return{
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
            await this.fetchBlog();
        },
        convertTime(isoTime) {
            const time = moment(isoTime).fromNow();
            return time;
        }
    },
    mounted() {
        this.renderBlogs();
        console.log('Blogs: ',this.blogs);
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