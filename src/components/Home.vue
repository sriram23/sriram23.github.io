<template>
    <div>
        <!-- <Header class="header"/> -->
        <MasterImage />
        <Profession />
        <!-- <Blog /> -->
        <router-view></router-view>
    </div>
</template>

<script>
// import Header from './Header'
import MasterImage from './MasterImage'
import Profession from './Profession'
// import Blog from './page/blog'

export default {
    name: 'Home',
    components: {
        // Header,
        MasterImage,
        Profession,
        // Blog,
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: sticky;
    top: 0;
}
</style>