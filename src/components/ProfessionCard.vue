<template>
    <div>
        <div class="company-container">
            <div class="company-logo">
                <img class="company-logo-image" :src="require(`../assets/${source}`)" alt="Squash Apps"/>
            </div>
            <div class="company-content">
                <div class="designation">{{designation}}</div>
                <div class="company">{{company}}</div>
                <div class="time">{{time}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProfessionCard',
    props:{
        source:String,
        designation:String,
        company:String,
        time:String
    },
    methods:{
        getImage(src) {
            return `../assets/${src}`
        }
    }
}
</script>

<style lang="scss" scoped>
.company-container {
    display: flex;
    border: 0.5px solid #000;
    box-shadow: 0 0 10px #000000;
    border-radius: 0.5rem;
    padding: 2rem;
    .company-logo {
        max-width: 10rem;
        max-height: 7rem;
        border: 0.5px solid #000;
        box-shadow: 0 0 10px #000000;
        border-radius: 0.5rem;
        padding: 0.2rem;
        .company-logo-image {
            width: 100%;
            height: 100%;
        }
    }
    .company-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        text-align: center;
        .designation {
            font-size: 2rem;
            font-weight: bold;
        }
        .company {
            font-size: 1.5rem;
        }
        .time {
            font-size: 0.75rem;
            font-style: italic;
        }
    }
}

@media (max-width: 768px) {
    .designation, .company {
        font-size: 1rem !important;
    }
    .company-logo {
        max-width: 6rem !important;
        max-height: 4rem !important;
    }
}

@media (max-width: 425px) {
    .designation, .company {
        font-size: 0.75rem !important;
    }
    .company-logo {
        max-width: 4rem !important;
        max-height: 3rem !important;
    }
}
</style>