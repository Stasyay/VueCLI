<template>
  <div class="blog center">
            <div class="blog__blog-heading">
                <h3 class="blog__blog-title">Articles & News</h3>
                <p class="blog__blog-text">It is a long established fact that a reader will be distracted by the of
                    readable
                    content
                    of a page when lookings at its layouts the points of using.</p>
            </div>

            <div class="blog__blog-items">

                <div class="blog__blog-item" v-for="article in articleData" :key="article.id">
                    <div class="blog__subcontent">
                        <div class="blog__blog-img-box">
                            <img class="blog__blog-item-img" :src="require('../../../assets/' + article.image)" alt="blog">
                            <h3 class="blog__tag">{{article.tag}}</h3>
                        </div>
                        <p class="blog__blog-item-text">{{article.title}}</p>
                        <div class="blog__box-date">
                            <p class="blog__date">{{article.date}} </p>
                            <a href="#">
                                <svg class="blog__link-svg" width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle class="blog__link-circle" cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    name: 'HomePageBlog',
    computed: {
    ...mapState(['articleData']),
    }, 
};
</script>

<style lang="scss" scoped>
.blog {

&__blog-heading {
    width: 1014px;
    padding-left: 232px;
    margin-bottom: 52px;
}

&__blog-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
    padding-bottom: 12px;
}

&__blog-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
}

&__blog-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 27px;
    margin-bottom: 96px;
}

&__blog-item:nth-last-child(-n+3) {
    display: none;
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

&__tag {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;

    background: rgb(255, 255, 255);
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    left: 20px;
    bottom: 40px;
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