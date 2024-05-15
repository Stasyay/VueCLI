<template>
        <div class="banner-blog">
            <div class="banner-blog__banner-item">
                <img src="../../../assets/Banner-blog-page.jpeg" alt="banner" class="banner-blog__banner-photo">
            </div>
            <div class="banner-blog__banner-intro">
                <h3 class="banner-blog__blog-title">Articles & News</h3>
                <nav class="banner-blog__box-breadcrumbs">
                    <a href="index.html" class="banner-blog__blog-breadcrumbs">Home / </a>
                    <a href="blog.html" class="banner-blog__blog-breadcrumbs">Blog</a>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
  name: 'BlogPageBanner',
};
</script>

<style lang="scss" scoped>
.banner-blog {
    padding-left: calc(50% - 1920px / 2);
    padding-right: calc(50% - 1920px / 2);
    height: 356px;
    margin-bottom: 45px;

    &__banner-item {
        position: relative;
        width: auto;
        height: 356px;
        overflow: hidden;
    }

    &__banner-photo {
        width: 1920;
        height: auto;
        padding: 0;
        margin: 0;
    }

    &__banner-item>&__banner-photo {
        display: block;
        margin-left: -16px;
        margin-top: -484px;
    }

    &__banner-intro {
        position: relative;
        border-radius: 37px 37px 0px 0px;
        background: rgb(255, 255, 255);
        width: 503px;
        height: 178px;
        left: calc(50% - 503px / 2);
        bottom: 228px;
    }

    &__blog-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        text-align: center;
        padding-top: 41px;
    }

    &__box-breadcrumbs {
        padding-bottom: 41px;
        padding-left: 189px;
    }

    &__blog-breadcrumbs {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
    }
}
</style>