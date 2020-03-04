<template>
    <div class="tab-control">
        <div class="tab-control-title"
             @click="titleClick(index)"
             v-for="(title,index) in titles"
             :class="{active:index === currentIndex}">
            <span>
                {{title}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        data() {
            return {
                currentIndex: 0
            };
        },
        computed: {},
        methods: {
            titleClick(index) {
                this.currentIndex = index;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background: #ffffff;
    }

    .tab-control-title {
        flex: 1;

        span {
            padding: 5px;
        }

    }

    .active {
        color: var(--color-high-text);

        span {
            border-bottom: 3px solid var(--color-tint);
        }
    }
</style>
