<template>
  <div id="app">
    <HomePage/>
    <BlogPage/>
    <ArticlePage />
    <ProdectPage/>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import BlogPage from './pages/BlogPage.vue'
import ArticlePage from './pages/ArticlePage.vue'
import ProdectPage from './pages/ProdectPage.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    ArticlePage,
    ProdectPage,  
  }
}
</script>

<style lang="scss" scoped>
#app {
  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

summary {
    display: block;
}

summary::-webkit-details-marker {
    display: none;
}

body {
    font-family: "Jost", sans-serif;
    font-style: normal;
    line-height: normal;
}

.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

}
</style>
