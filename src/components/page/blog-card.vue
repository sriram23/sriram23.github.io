<template>
    <div @click="cardClicked" class="blog-card-container">
            <div class="profile-img-container">
                <img class="img-circle" v-if="image" :src="`@/assets/blog/${image}`"/>
                <div class="thumbnail-circle" v-else><span>{{author.slice(0,2)}}</span></div>
            </div>
            <div>
                <div class="blog-title"><b>{{title}}</b> by <i>{{author}}</i></div>
                <span class="time-stamp">Published: {{date}}</span>
                <div class="html-content" v-html="`${desc.slice(0,200)}...`"></div>
            </div>
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: {
        title: String,
        desc: String,
        image: String,
        author: String,
        date: String
    },
    methods: {
        cardClicked(){
            this.$emit('cardClicked');
        }
    }
}
</script>
<style lang="scss" scoped>
.blog-card-container {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 0.5px solid #000;
    box-shadow: 0 0 10px #000000;
    border-radius: 0.5rem;
    padding: 2rem;
    .profile-img-container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 2rem !important;
        .img-circle {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
        }
        .thumbnail-circle {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            color: #fff;
            background: #abc;
            text-align: center;
            line-height: 5rem;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    .blog-title {
        font-size: 3rem;
    }
    .time-stamp {
        font-size: 0.75rem;
    }
    .html-content {
        overflow:hidden;
    }
}
@media (max-width: 768px) {
    .blog-card-container{
        flex-direction: column;
        align-items: center;
    }
    .blog-title {
        font-size: 2rem !important;
    }
}
</style> 