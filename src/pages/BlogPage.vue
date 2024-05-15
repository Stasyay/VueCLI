<template>
    <div id="BlogPage">
      <HeaderComponent />
      <BlogPageBanner />
      <BlogPageLatestBlog />
      <BlogPageNews />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  
  import HeaderComponent from '../components/HeaderComponent.vue'
  import BlogPageBanner from '../components/pageComponents/blogPage/BlogPageBanner.vue'
  import BlogPageLatestBlog from '../components/pageComponents/blogPage/BlogPageLatestBlog.vue'
  import BlogPageNews from '../components/pageComponents/blogPage/BlogPageNews.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'BlogPage',
  
    components: {
          HeaderComponent,
          BlogPageBanner,
          BlogPageLatestBlog,
          BlogPageNews,
          FooterComponent
      }
  };
  </script>
  
  <style lang="scss" scoped>
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
  
  </style>