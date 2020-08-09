<template>
    <div>
        <div v-if="isLoading" class="loader" scale="10">
            <vue-loaders-ball-scale-multiple color="#aa0000"/>
        </div>
        <form v-if="!isLoading" class="form">
            <input disabled class="input" type="text" v-model="blogData.author" placeholder="Your Name">
            <input required class="input" type="text" v-model="blogData.title" placeholder="Title">
            <div v-html="blogData.content"></div>
            <textarea required class="input" v-model="blogData.content" placeholder="Your blog goes here" cols="30" rows="10"></textarea>
            <button @click.prevent="editButtonClicked" class="input submit-button">Update</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'BlogUpdate',
    data() {
        return {
            blogData: '',
            isLoading: false,
        };
    },
    computed: {
        ...mapState(['allBlogs']),
    },
    methods: {
        ...mapActions(['getAllBlogs', 'updateBlog']),
        async getCurrentBlog() {
            this.isLoading = true;
            await this.getAllBlogs();
            console.log('Route', this.$route.params.id);
            console.log('Blogs', this.allBlogs.data);
            this.blogData = await this.allBlogs.data.find(blog => blog._id === this.$route.params.id);
            this.isLoading = false;
        },
        async editButtonClicked() {
            const payload = {_id: this.blogData._id, title: this.blogData.title, content: this.blogData.content};
            const res = await this.updateBlog(payload);
            console.log(res);
        }
    },
    mounted() {
        this.getCurrentBlog();
    },
}
</script>
<style lang="scss" scoped>
.form {
    padding: 3rem;  
    display: flex;
    flex-direction: column;
}
.input {
    margin: 1rem !important;
    padding: 1rem;
}
.submit-button {
    background: #aa0000;
    color: #fff;
}
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>
