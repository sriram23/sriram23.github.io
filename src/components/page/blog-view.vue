<template>
    <div>
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"></loading>
        <div class="title">{{currBlog.title}}</div>
        <div class="blog-content">
            <h1 style="text-align: center">{{currBlog.title}}</h1>
            <hr/>
            <br>
            <div v-html="currBlog.content"></div>
        </div>
        <div class="footer">Written by <b>{{currBlog.author}}</b> on <i>{{convertTime(currBlog.createdAt)}}</i></div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    name: 'BlogView',
    data() {
        return{
            params: {},
            currBlog: [],
            isLoading: true,
        }
    },
    computed: {
        ...mapState([
            'currentBlog'
        ])
    },
    methods: {
        ...mapActions(['getBlog']),
        convertTime(isoTime) {
            const time = moment(isoTime).fromNow();
            return time;
        },
        async getCurrentBlog(id) {
            this.isLoading = true;
            try{
                await this.getBlog(id);
                this.currBlog = this.currentBlog.data[0];
                console.log('Curr: ', this.currBlog);
            } catch(err) {
                this.$toasted.error(`Something went wrong! ${err.response.status}`).goAway(3000);
            }
            this.isLoading = false;
        }
    },
    mounted() {
        this.params = this.$route.params;
        this.getCurrentBlog(this.params.id);
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