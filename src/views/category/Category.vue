<template>
    <div id="category">
        <nav-bar class="nav-bar">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="content">
            <tab-menu :categories="categories"
                      @selectItem="selectItem"></tab-menu>

            <scroll id="tab-content" :data="[categoryData]">
                <div>
                    <tab-content-category :subcategories="showSubcategory"></tab-content-category>
                    <tab-control :titles="['综合', '新品', '销量']"
                                 @itemClick="tabClick"></tab-control>
                    <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Category",

    }
</script>

<style scoped>
    #category {
        height: 100vh;
    }

    .nav-bar {
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;
    }

    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;

        display: flex;
    }

    #tab-content {
        height: 100%;
        flex: 1;
    }
</style>
