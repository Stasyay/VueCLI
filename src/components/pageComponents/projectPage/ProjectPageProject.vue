<template>
        <div class="project center">
            <div class="project__filter-bnt">
                <div class="project__filter-box">
                    <button class="project__filter">Bathroom</button>
                    <button class="project__filter project__filter-active">Bed Room</button>
                    <button class="project__filter">Kitchan</button>
                    <button class="project__filter">Living Area</button>
                </div>
            </div>
            <div class="project__box-items">
                <div v-for="project in projects" :key="project.id" class="project__project-item">
                    <img class="project__project-img" :src="require('../../../assets/' + project.image)" alt="our project">
                    <div class="project__project-content">
                        <div>
                            <h3 class="project__title-item">{{ project.title }}</h3>
                            <nav class="project__project-box-breadcrumbs">
                                <a href="#" class="project__project-blog-breadcrumbs">Decor / </a>
                                <a href="#" class="project__project-blog-breadcrumbs">Artchitecture</a>
                            </nav>
                        </div>
                        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <PaginationComponent />
        </div>
</template>

<script>
import PaginationComponent from '../../../components/PaginationComponent.vue'
export default {
  name: 'ProjectPageProject',
  components: {
    PaginationComponent
  },
  data() {
    return {
        // activeIndex: 0,
        projects: [
            {
                id: 0,
                title: 'Minimal Bedroom',
                image: 'Project1.png',                
            },
            {
                id: 1,
                title: 'Minimal Bedroom',
                image: 'Project5.png',
            },
            {
                id: 2,
                title: 'Classic Minimal Bedroom',
                image: 'Project2.png',
            },
            {
                id: 3,
                title: 'Modern Bedroom',
                image: 'Project6.png',
            },
            {
                id: 4,
                title: 'Minimal Bedroom table',
                image: 'Project3.png',
            },
            {
                id: 5,
                title: 'System Table',
                image: 'Project7.png',
            },
            {
                id: 6,                
                title: 'Modern Medroom',
                image: 'Project4.png',
            },
            {
                id: 7,
                title: 'Modern Bedroom',
                image: 'Project8.png',
            },

        ],
    }
}
}
</script>

<style lang="scss" scoped>
.project {
    margin-bottom: 100px;

    &__filter-bnt {
        display: flex;
        justify-content: center;
        margin-bottom: 61px;          
    }

    &__filter-box {        
        border: 1px solid rgb(205, 162, 116);
        border-radius: 5px;
    }

    &__filter {
        background-color: white;
        border-radius: 5px;
        border: none;
        color: rgb(41, 47, 54);
        // font-family: Jost;
        font-size: 18px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
        padding: 10px 20px;    
    }

    &__filter:hover {
        background-color: rgb(205, 162, 116);
        border-radius: 5px;
        border: none;
        color: rgb(255, 255, 255);  
    }

    &__filter-active {
        background-color: rgb(205, 162, 116);
        border-radius: 5px;
        border: none;
        color: rgb(255, 255, 255);  
    }

    &__box-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 100px;
        padding-bottom: 54px;
    }

    &__project-content {
        display: flex;
        justify-content: space-between;
        padding-top: 28px;
    }

    &__title-item {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }

    &__project-blog-breadcrumbs {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        color: rgb(77, 80, 83);
    }
}
</style>