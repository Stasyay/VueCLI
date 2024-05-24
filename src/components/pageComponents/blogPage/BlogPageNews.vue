<template>
        <div class="news center">
            <div class="news__blog-heading">
                <h3 class="news__blog-title">Articles & News</h3>
            </div>

            <div class="news__blog-items">

                <div class="news__blog-item" v-for="article in articles" :key="article.id">
                    <div class="news__subcontent">
                        <div class="news__blog-img-box">
                            <img class="news__blog-item-img" :src="require('../../../assets/' + article.image)" alt="blog">
                            <h3 class="news__tag">{{article.tag}}</h3>
                        </div>
                        <p class="news__blog-item-text">{{article.title}}</p>
                        <div class="news__box-date">
                            <p class="news__date">{{article.date}} </p>
                            <a href="#">
                                <svg class="news__link-svg" width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle class="news__link-circle" cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <PaginationComponent />            
        </div>
</template>

<script>
import PaginationComponent from '../../../components/PaginationComponent.vue'
export default {
  name: 'BlogPageNews',
  components: {
    PaginationComponent
  },
  data() {
    return {
        // activeIndex: 0,
        articles: [
            {
                id: 0,
                title: 'Let’s Get Solution For Building Construction Work',
                image: 'BlogImg1.png',
                tag: 'Kitchen Design',
                date: '26 December,2022'
            },
            {
                id: 1,
                title: 'Let’s Get Solution For Building Construction Work',
                image: 'BlogImg2.png',
                tag: 'Living Design',
                date: '22 December,2022'
            },
            {
                id: 2,
                title: 'Let’s Get Solution For Building Construction Work',
                image: 'BlogImg3.png',
                tag: 'Kitchen Design',
                date: '26 December,2022'
            },
            {
                id: 3,
                title: 'Let’s Get Solution For Building Construction Work',
                image: 'BlogImg4.png',
                tag: 'Kitchen Planning',
                date: '26 December,2022'
            },
            {
                id: 4,
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                image: 'BlogImg5.png',
                tag: 'Living Design',
                date: '22 December,2022'
            },
            {
                id: 5,
                title: 'Best For Any Office & Business Interior Solution',
                image: 'BlogImg6.png',
                tag: 'Interior Design',
                date: '25 December,2022'
            },

        ],
    }
}  
};
</script>

<style lang="scss" scoped>
.news {
    margin-top: 156px;
    margin-bottom: 200px;

    &__blog-heading {
        margin-bottom: 30px;
    }

    &__blog-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
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