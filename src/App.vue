<template>
    <div id="app">
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
    </div>
</template>
<script>
    import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
    import Home from "views/home/Home.vue";
    export default {
        name: "App",
        components: {
            MainTabBar,
        },
    }
</script>
<style lang="scss">
    @import "assets/css/base.scss";
</style>
