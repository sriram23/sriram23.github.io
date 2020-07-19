<template>
    <div class="blog-container">
        <div class="blog-card" v-for="blog in blogs" :key="blog.id">
            <BlogCard @cardClicked="navigateTo(blog,i)" :title="blog.title" :author="blog.author" :desc="blog.content" :date="blog.date"/>
        </div>
    </div>
</template>

<script>
import BlogCard from './blog-card'
import { mapState } from 'vuex'

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
        navigateTo(blog) {
            this.$router.push(`/blog/${blog.id}/${blog.title}`);
        }
    },
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