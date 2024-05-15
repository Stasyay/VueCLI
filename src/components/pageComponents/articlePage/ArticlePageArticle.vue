<template>
    <div class="article center">

    <article class="article__article-content">
        <h1 class="article__article-title">
            Let’s Get Solution for Building
            Construction Work
        </h1>

        <img src="../../../assets/article1.png" alt="photo">

        <div class="article__article-date">
            <p class="article__date">26 December,2022 </p>
            <nav class="article__article-box-breadcrumbs">
                <a href="index.html" class="article__article-breadcrumbs">Interior / </a>
                <a href="blog.html" class="article__article-breadcrumbs"> Home / </a>
                <a href="blog.html" class="article__article-breadcrumbs"> Decore</a>
            </nav>
        </div>

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injecthumour, or randomised words which don't look even
            slightly believable. <br> <br>

            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
            repeat predefined chunks as necessary.
        </p>

        <img class="article__article-quotes" src="../../../assets/Quotes.png" alt="photo">

        <h1 class="article__article-title">
            Design sprints are great
        </h1>

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered.
        </p>

        <ol class="article__article-list">
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
        </ol>

        <img class="article__article-photo" src="../../../assets/article1_1.png" alt="photo">

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered.
        </p>
    </article>

    <ArticleComponent />

    </div>
</template>

<script>
import ArticleComponent from '../articlePage/ArticleComponent.vue'
export default {
  name: 'ArticlePageArticle',
  components: {
    ArticleComponent,
  }
};
</script>

<style lang="scss" scoped>
.article {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 96px;

    &__article-content {
        width: 799px;
    }

    &__article-title {
        width: 684px;
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        margin-bottom: 21px;
    }

    &__article-date {
        margin-top: 46px;
        margin-bottom: 48px;
        display: flex;
        justify-content: space-between;
    }

    &__article-box-breadcrumbs {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__date {
        color: rgb(77, 80, 83);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
    }

    &__article-breadcrumbs {
        color: rgb(77, 80, 83);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
    }

    &__article-text {
        // margin-bottom: 35px;
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
    }

    &__article-quotes {
        margin-top: 35px;
    }

    &__article-list {
        margin-top: 20px;
        margin-bottom: 44px;
        padding-left: 24px;
    }

    &__article-li {
        margin-bottom: 32px;
    }

    &__article-photo {
        margin-top: 12px;
        margin-bottom: 35px;
    }

    &__tags {
        margin-left: 57px;
    }

    &__tags-title {
        padding-bottom: 24px;
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }

    &__tags-btn {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;
        padding-bottom: 10px;
    }

    &__tag {
        background: rgb(244, 240, 236);
        color: rgb(41, 47, 54);
        border-radius: 10px;
        border: 1px solid rgb(244, 240, 236);
        padding: 9px 30px;
        font-size: 18px;
        font-weight: 400;
        line-height: 125%;
        text-align: center;
    }

    &__tag:hover {
        background: #292F36;
        color: rgb(255, 255, 255);
    }

    &__tag_active {
        background-color: #292F36;
        color: rgb(255, 255, 255);
    }

    &__blog-filter {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__blog-item {
        position: relative;
        width: 382px;
        height: 521px;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 62px;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    }

    &__blog-item:hover {
        background-color: rgb(244, 240, 236);
    }

    &__blog-item:hover &__link-circle {
        fill: #FFFFFF;
    }

    &__subcontent {
        position: absolute;
        padding: 21px;
    }

    &__blog-img-box {
        position: relative;
    }

    &__blog-item-img {
        position: relative;
        padding-bottom: 21px;
    }


    &__blog-item-text {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }

    &__box-date {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__date {
        color: rgb(77, 80, 83);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        text-transform: capitalize;
    }

}
</style>