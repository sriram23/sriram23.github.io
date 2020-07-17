<template>
    <div class="blog-container">
        <div class="blog-card" v-for="(blog,i) in myBlogs" :key="i">
            <BlogCard @cardClicked="navigateTo(blog,i)" :title="blog.title" :author="blog.author" :desc="blog.content" :date="blog.date"/>
        </div>
    </div>
</template>

<script>
import BlogCard from './blog-card'
import blogs from './readBlog'

export default {
    name: 'Blog',
    components: {
        BlogCard
    },
    data() {
        return{
            myBlogs: {}
        }
    },
    methods: {
        navigateTo(blog,index) {
            console.log('skjhskdfh',blog, index);
            this.$router.push({name:'BlogView', params: blog});
        }
    },
    mounted() {
        this.myBlogs = blogs;
        console.log('Blogs:', this.myBlogs);
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
        max-width: 90%;
    }
}
</style>