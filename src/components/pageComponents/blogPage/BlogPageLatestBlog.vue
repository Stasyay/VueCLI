<template>
        <div class="latest-blog center">
            <h3 class="latest-blog__latest-post-title">Latest Post</h3>
            <div class="latest-blog__latest-post-container">
                <img class="latest-blog__post-photo" src="../../../assets/latestPost.png" alt="photo">
                <article class="latest-blog__post">
                    <h3 class="latest-blog__post-title">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="latest-blog__post-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                        dignissim maximus.posuere in.Contrary to popular belief. <br><br>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica. </p>
                    <div class="latest-blog__box-data">
                        <p class="latest-blog__post-data">26 December,2022 </p>
                        <a href="article.html"> <svg width="52.000000" height="52.000000" viewBox="0 0 52 52"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs />
                                <circle id="Ellipse" cx="26.000000" cy="25.500000" r="26.000000" fill="#F4F0EC"
                                    fill-opacity="1.000000" />
                                <path id="Vector" d="M23.77 32.18L29.71 25.49L23.77 18.81" stroke="#292F36"
                                    stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"
                                    stroke-linecap="round" />
                            </svg></a>
                    </div>
                </article>
            </div>
        </div>
</template>

<script>
export default {
  name: 'BlogPageLatestBlog',
};
</script>

<style lang="scss" scoped>
.latest-blog {
    margin-top: 200px;

    &__latest-post-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }

    &__latest-post-container {
        display: flex;
        gap: 65px;
        padding-top: 49px;
        padding-left: 22px;
        padding-right: 54px;
    }

    &__post-photo {
        height: 478px;
    }

    &__post {
        padding-top: 52px;
    }

    &__post-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }

    &__post-text {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        margin-bottom: 41px;
    }

    &__box-data {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>