<template>
    
    <div class="article__tags">
        <h3 class="article__tags-title">Tags</h3>
        <div class="article__tags-btn">
            <ArticleTagsComponent v-for="(tag,index) in tags" :article__tag_active="activeIndex === index" :tags="tag"
            :key="tag.id" @click="selectTag(index)"></ArticleTagsComponent>
        </div>
        <div class="article__blog-filter">
            <div v-for="article in filteredArticles" class="article__blog-item" :key="article.id">
                <div class="article__subcontent">
                    <div class="article__blog-img-box">
                        <img class="article__blog-item-img" :src="require('../../../assets/' + article.image)" alt="blog">
                    </div>
                    <p class="article__blog-item-text">{{article.title}}</p>
                    <div class="article__box-date">
                        <p class="article__date">{{article.date}} </p>
                        <a href="#">
                            <svg class="article__link-svg" width="52" height="53" viewBox="0 0 52 53"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="article__link-circle" cx="26" cy="26.267" r="26"
                                    fill="#F4F0EC" />
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
import { mapState, mapGetters, mapActions  } from 'vuex';
import ArticleTagsComponent from '@/components/pageComponents/articlePage/ArticleTagsComponent.vue'
export default {
  name: 'ArticleComponent',
  components: {
    ArticleTagsComponent
  },

  data() {
    return {
        // activeIndex: 0,
        // articles: [
        //     {
        //         id: 0,
        //         title: 'Let’s Get Solution For Building Construction Work',
        //         image: 'BlogImg1.png',
        //         tag: 'Kitchen Design',
        //         date: '26 December,2022'
        //     },
        //     {
        //         id: 1,
        //         title: 'Let’s Get Solution For Building Construction Work',
        //         image: 'BlogImg2.png',
        //         tag: 'Living Design',
        //         date: '22 December,2022'
        //     },
        //     {
        //         id: 2,
        //         title: 'Let’s Get Solution For Building Construction Work',
        //         image: 'BlogImg3.png',
        //         tag: 'Kitchen Design',
        //         date: '26 December,2022'
        //     },
        //     {
        //         id: 3,
        //         title: 'Let’s Get Solution For Building Construction Work',
        //         image: 'BlogImg4.png',
        //         tag: 'Kitchen Planning',
        //         date: '26 December,2022'
        //     },
        //     {
        //         id: 4,
        //         title: 'Low Cost Latest Invented Interior Designing Ideas.',
        //         image: 'BlogImg5.png',
        //         tag: 'Living Design',
        //         date: '22 December,2022'
        //     },
        //     {
        //         id: 5,
        //         title: 'Best For Any Office & Business Interior Solution',
        //         image: 'BlogImg6.png',
        //         tag: 'Interior Design',
        //         date: '25 December,2022'
        //     },

        // ],
        // tags: [
        //     { title: 'Kitchen' },
        //     { title: 'Bedroom' },
        //     { title: 'Building' },
        //     { title: 'Architecture' },
        //     { title: 'Kitchen Planning' },
        //     { title: 'Bedroom' }
        // ],
    };
  },

  methods: {
    ...mapActions(['setActiveIndex']),
    },
  computed: {
        ...mapState(['articleData'],['tags'],'activeIndex'),
        ...mapGetters(['filteredArticles']),
  }
};
</script>

<style lang="scss" scoped>

.article {
    
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
        // padding-top: 30px;
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