<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">
                购物街
            </div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
        <ul>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
            <li>888</li>
        </ul>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar.vue";
    import {getHomeMultiData} from "@/network/home.ts";
    import getHomeGoods from "@/network/home.ts";
    import HomeSwiper from "./childComponents/HomeSwiper.vue";
    import RecommendView from "./childComponents/RecommendView";
    import FeatureView from "@/views/home/childComponents/FeatureView";
    import TabControl from "@/components/content/tabControl/TabControl";
    import GoodsList from "@/components/content/goods/GoodsList";

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    "pop": {page: 0, list: []},
                    "news": {page: 0, list: []},
                    "sell": {page: 0, list: []},
                },
                currentType: "pop",
            };
        },
        created() {
            // 生命周期函数，发起请求
            // 请求多个数据
            this.getHomeMultiData();
            //请求商品数据
            this.getHomeGoods("pop");
            // this.getHomeGoods("new");
            // this.getHomeGoods("sell");
        },
        methods: {

            //事件监听相关的方法
            tabClick(index) {
                console.log(index);
                switch (index) {
                    case 0:
                        this.currentType = "pop";
                        break;
                    case 1:
                        this.currentType = "new";
                        break;
                    case 2:
                        this.currentType = "sell";
                        break;
                }
            },
            //网络请求相关的方法
            getHomeMultiData() {
                getHomeMultiData().then(res => {
                    // 异步操作
                    // console.log(res);
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                });
            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1;
                getHomeGoods(type, page).then(res => {
                    console.log(res);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1
                });
            },
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list;
            },
        },
    }
</script>

<style lang="scss" scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #ffffff;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        z-index: 9;
    }

    #home {
        padding-top: 44px;
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }
</style>
