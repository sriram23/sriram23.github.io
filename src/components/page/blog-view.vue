<template>
    <div>
        <div v-if="isLoading" class="loader" scale="10">
            <vue-loaders-ball-scale-multiple color="#aa0000"/>
        </div>
        <div class="title-container">
            <div class="title">{{currBlog.title}}</div>
            <div class="edit-button" @click="editClicked">Edit</div>
        </div>
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
        },
        editClicked() {
            console.log('ID:',this.params.id);
            this.$router.replace(`/update/${this.params.id}`)
        }
    },
    mounted() {
        this.params = this.$route.params;
        this.getCurrentBlog(this.params.id);
    }
}
</script>

<style lang="scss" scoped>
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #aa0000;
    border-top: 1px solid #fff;
    padding: 1rem;
    .title {
        font-size: 3rem;
        color: #fff;
    }
    .edit-button {
        background: #fff;
        padding: 1rem 1.5rem;
        margin: 1.5rem;
        color: #aa0000;
        font-weight: bold;
        border-radius: 1rem;
        box-shadow: 2px 2px #fff;
        cursor: pointer;
    }
    .edit-button:active {
        box-shadow: 1px 1px #fff;
    }
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
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>