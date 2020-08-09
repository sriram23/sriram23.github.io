<template>
    <div class="blog-container">
        <div v-if="isLoading" class="loader" scale="10">
            <vue-loaders-ball-scale-multiple color="#aa0000"/>
        </div>
        <div class="blog-card" v-for="blog in currentBlog" :key="blog._id">
            <BlogCard @cardClicked="navigateTo(blog)" :title="blog.title" :author="blog.author" :desc="blog.content" :date="convertTime(blog.createdAt)"/>
        </div>
        <div @click="loadMore" class="load-more">Load More</div>
    </div>
</template>

<script>
import moment from 'moment'
import BlogCard from './blog-card'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Blog',
    components: {
        BlogCard,
    },
    data() {
        return{
            isLoading: true,
            skip: 1,
            limit: 5,
            currentBlog: [],
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
        async renderBlogs(data) {
            this.isLoading = true;
            await this.fetchBlog(data);
            this.currentBlog = this.blogs;
            this.isLoading = false;
        },
        convertTime(isoTime) {
            const time = moment(isoTime).fromNow();
            return time;
        },
        async loadMore() {
            this.isLoading = true;
            ++this.skip;
            await this.fetchBlog({skip: this.skip-1, limit: this.limit});
            if(this.blogs.length>0)
                this.currentBlog.push(...this.blogs);
            else
                this.$toasted.info('That\'s All!').goAway(3000);
            this.isLoading = false;
        }
    },
    mounted() {
        this.renderBlogs({skip: this.skip-1, limit: this.skip * this.limit});
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
.load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    color: white;
    background: blue;
    width: 9rem;
    height: 3rem;
    border-radius: 1rem;
    border: 1px solid darkblue;
    box-shadow: 2px 4px darkblue;
}
.load-more:hover {
    box-shadow: 2px 6px darkblue;
}
.load-more:active {
    box-shadow: 2px 4px darkblue;
}
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>