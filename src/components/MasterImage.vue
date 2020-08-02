<template>
    <div class="master-container">
        <div class="master-image-container">
            <!-- <img class="master-image" src="@/assets/master-image.png" alt="master image" /> -->
        </div>
        <div class="master-content-container">
            <div class="sub-title">Hello World!</div>
            <div class="title">I'm Sriram</div>
            <div class="description">A passionate Software Engineer from Coimbatore</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.master-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.master-image-container {
    max-width: 16rem;
    max-height: 16rem;
    box-shadow: 0 0 10px #000000;
    border-radius: 5%;
    background: #99000099;
}
.master-image {
    width: 100%;
    height: 100%;
    border-radius: 5%;
}
.master-content-container {
    background: url(../assets/master.png);
    background-size: cover;
    color: #ffffff;
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px #000000;
    padding: 2rem 0;
    .sub-title {
        font-size: 2rem;
    }
    .title {
        font-size: 5rem;
        font-weight: bold;
    }
    .description {
        font-size: 1rem;
        font-style: italic;
    }
}
</style>