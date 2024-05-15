<template>
  <div id="ProjectPage">
    <HeaderComponent />
    <ProjectPageBanner />   
    <ProjectPageProject />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectPageBanner from '../components/pageComponents/projectPage/ProjectPageBanner.vue'
import ProjectPageProject from '../components/pageComponents/projectPage/ProjectPageProject.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'ProjectPage',
  components: {
        HeaderComponent,
        ProjectPageBanner,
        ProjectPageProject,
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