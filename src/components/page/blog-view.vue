<template>
    <div>
        <div v-for="blog in blogs" :key="blog._id">
            <div v-if="params.id===blog._id && params.title===blog.title">
                <div class="title">{{blog.title}}</div>
                <div class="blog-content">
                    <h1 style="text-align: center">{{blog.title}}</h1>
                    <hr/>
                    <br>
                    <div v-html="blog.content"></div>
                </div>
                <div class="footer">Written by <b>{{blog.author}}</b> on <i>{{convertTime(blog.createdAt)}}</i></div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
    name: 'BlogView',
    data() {
        return{
            params: {}
        }
    },
    computed: {
        ...mapState([
            'blogs'
        ])
    },
    methods: {
        convertTime(isoTime) {
            const time = moment(isoTime).fromNow();
            return time;
        }
    },
    mounted() {
        this.params = this.$route.params;
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 3rem;
    background: #aa0000;
    color: #fff;
    border-top: 1px solid #fff;
}
.blog-content {
    border: 0.5px solid #000;
    box-shadow: 0 0 10px #000000;
    border-radius: 0.5rem;
    padding: 5rem;
    margin: 3rem !important;
    @media (max-width: 425px){
        padding: 2rem;
        margin: 1rem !important;
    }
}
.footer {
    padding: 2rem;
    background: #aa0000;
    color: #fff;
}
</style>