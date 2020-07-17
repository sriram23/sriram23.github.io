<template>
    <div>
    <div class="header">
        <span class="site-title">Sriram</span>
        <div class="nav-container hide-sm">
            <router-link to="/" class="nav-option">Home</router-link>
            <!-- <router-link class="nav-option">About</router-link> -->
            <router-link to="/blog" class="nav-option">Blog</router-link>
            <!-- <router-link class="nav-option">Contact</router-link> -->
        </div>
        <div class="hamburger show-sm" @click="toggle">
            <i v-if="!isMenuVisible" class="fa fa-bars fa-3x"></i>
            <i v-if="isMenuVisible" class="fa fa-close fa-3x"></i>
            <div class="list" v-if="isMenuVisible">
                <li class="item"><router-link to="/" class="router-link">Home</router-link></li>
                <!-- <li class="item">About</li> -->
                <li class="item"><router-link to="/blog" class="router-link">Blog</router-link></li>
                <!-- <li class="item">Contact</li> -->
            </div>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            isMenuVisible: false,
        }
    },
    methods: {
        toggle() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        navigateTo(path) {
            console.log('Path', this.$router);
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    background: #AA0000;
    color: #FFF;
}
.nav-container {
    font-size: 1.5rem;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.site-title {
    padding: 0.5rem;
    font-family: 'Modak', cursive;
    font-size: 3.5rem;
}
.nav-option {
    padding: 0.5rem 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    box-shadow: 0.5rem #555;
    color: #fff;
    text-decoration: unset;

}
.nav-option:hover {
    color:#AA0000;
    background: #FFF;
}
.show-sm {
    display: none;
}
.hamburger {
    padding: 1rem;
    align-self: center;
    position: relative;
}
.list {
    display: inline-block;
    position: absolute;
    right: 0.5rem;
    top: 5rem;
    ul, li{
        list-style-type: none;
    }
    background: #ffffff;
}
.item {
    padding: 1rem;
    color: #AA0000;
    background: #ffffff;
    border: 1px solid #eeeeee;
    text-decoration: none;
    .router-link {
        all: unset;
    }
}
@media (max-width: 425px) {
    .hide-sm {
        display: none;
    }
    .show-sm {
        display: block;
    }
}
</style>