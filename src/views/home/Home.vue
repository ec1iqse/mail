<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">
                购物街
            </div>
        </nav-bar>
    </div>
</template>

<script>

    import NavBar from "components/common/navbar/NavBar.vue";
    import {getHomeMultiData} from "network/home.ts";

    export default {
        name: "Home",
        components: {
            NavBar,
        },
        data() {
            return {
                banners: [],
                recommands: []
            };
        },
        created() {
            // 生命周期函数，发起请求
            // 请求多个数据
            getHomeMultiData().then(res => {
                // 异步操作
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommands = res.data.recommand.list;
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
