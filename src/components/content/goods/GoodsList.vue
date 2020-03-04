<template>
    <div class="goods">
        <goods-list-item v-for="(good) in goods" :goods-item="good"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "@/components/content/goods/GoodsListItem";
    export default {
        name: "GoodsList",
        props: {
            goods: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        methods: {},
        computed: {},
        components: {
            GoodsListItem,
        },
        data() {

        },
    }

</script>

<style  lang="scss" scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
