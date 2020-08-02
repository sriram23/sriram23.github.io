<template>
    <div>
        <form class="form">
            <input required class="input" type="text" v-model="blogData.author" placeholder="Your Name">
            <input required class="input" type="text" v-model="blogData.title" placeholder="Title">
            <div v-html="blogData.content"></div>
            <textarea required class="input" v-model="blogData.content" placeholder="Your blog goes here" cols="30" rows="10"></textarea>
            <button @click.prevent="submitBlog" class="input submit-button">Submit</button>
        </form>
    </div>
</template>
<script>
import  { mapActions } from 'vuex';
export default {
    data() {
        return {
            blogData: {}
        }
    },
    methods: {
        ...mapActions([
            'postBlog'
        ]),
        submitBlog() {
            this.postBlog(this.blogData)
            .then((res) => {
                if(res.status === 200){
                    this.$toasted.success('Blog Upload successful').goAway(3000);
                    this.$router.replace('/blog');
                }
            }).catch((err)=> {
                if(err)
                    this.$toasted.error(`Something went wrong: ${err.response.status}`).goAway(3000);
                else
                    this.$toasted.error(`Please check your internet connection`).goAway(3000);
            });
        }
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
</style>