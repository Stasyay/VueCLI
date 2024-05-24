import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import BlogPage from '../pages/BlogPage.vue';
import ArticlePage from '../pages/ArticlePage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/blog', name: 'Blog', component: BlogPage },
    { path: '/Article', name: 'Article', component: ArticlePage },
    { path: '/project', name: 'Project', component: ProjectPage },
    { path: '/projects', name: 'ProjectDetails', component: ProjectDetailsPage },
    { path: '/404', name: '404', component: NotFoundPage },
    { path: '*', redirect: '/404' },
]

const router = new Router({
    mode: 'history',
    routes
});

export default router;