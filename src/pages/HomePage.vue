<template>
  <div id="HomePage">
    <HeaderComponent />
    <HomePageBanner />
    <HomePageProject />
    <HomePageCounters />
    <HomePageBlog />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import HomePageBanner from '../components/pageComponents/homePage/HomePageBanner.vue'
import HomePageProject from '../components/pageComponents/homePage/HomePageProject.vue'
import HomePageCounters from '../components/pageComponents/homePage/HomePageCounters.vue'
import HomePageBlog from '../components/pageComponents/homePage/HomePageBlog.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        HomePageBanner,
        HomePageProject,
        HomePageCounters,
        HomePageBlog,
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