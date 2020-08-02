<template>
    <div>
        <MasterImage />
        <Profession />
        <router-view></router-view>
    </div>
</template>

<script>
import MasterImage from './MasterImage'
import Profession from './Profession'

export default {
    name: 'Home',
    components: {
        MasterImage,
        Profession,
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