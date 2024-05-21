import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        activeIndex: 0,
        projectData: [
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
        articleData: [
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
        tags: [
            { title: 'Kitchen' },
            { title: 'Bedroom' },
            { title: 'Building' },
            { title: 'Architecture' },
            { title: 'Kitchen Planning' },
            { title: 'Bedroom' }
        ],
    },
    actions: {
        setActiveIndex(state, index) {
            state.activeIndex = index;
        }
    },
    getters: {
        filteredArticles: state => {
            return state.articleData.filter(article => article.tag.includes(state.tags[state.activeIndex].title))
        }
    },

});

export default store;