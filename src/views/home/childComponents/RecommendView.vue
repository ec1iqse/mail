<template>
    <div class="recommend">
        <div class="recommend-item" v-for=" recommend in recommends ">
            <a :href="recommend.link">
                <img :src="recommend.image" alt="">
                <div>
                    {{recommend.title}}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        data() {

        },
        methods: {},
        computed: {},
        props: {
            recommends: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
    }
</script>

<style lang="scss" scoped>
    $recommend_pic_size:70px;
    .recommend {
        width: 100%;
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0px 20px;
        border-bottom: 8px solid rgba(238, 238, 238, 1);
    }

    .recommend-item {
        flex: 1;

        img {
            width: $recommend_pic_size;
            height: $recommend_pic_size;
            margin-bottom: 10px;
        }
    }
</style>
