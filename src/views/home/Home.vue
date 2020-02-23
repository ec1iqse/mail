<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">
                购物街
            </div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar.vue";
    import {getHomeMultiData} from "network/home.ts";
    import HomeSwiper from "./childComponents/HomeSwiper.vue";
    import RecommendView from "./childComponents/RecommendView";

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
        },
        data() {
            return {
                banners: [],
                recommends: [],
            };
        },
        created() {
            // 生命周期函数，发起请求
            // 请求多个数据
            getHomeMultiData().then(res => {
                // 异步操作
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
    }
</script>

<style lang="scss" scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #ffffff;
    }
</style>
