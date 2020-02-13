<template>
    <div id="app">
    <main-tab-bar></main-tab-bar>
    </div>
</template>
<script>
    import MainTabBar from "components/content/mainTabbar/MainTabBar";
    export default {
        name: 'App',
        components: {
            MainTabBar,
        }
    }
</script>
<style lang="scss">
    @import "assets/css/base.scss";
</style>
