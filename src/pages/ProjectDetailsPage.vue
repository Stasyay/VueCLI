<template>
    <div id="ProjectDetailsPage">
      <HeaderComponent />
      <ProjectDetailsPageBanner />
      <ProjectDetails />
      <SliderComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ProjectDetailsPageBanner from '../components/pageComponents/projectDetailsPage/ProjectDetailsPageBanner.vue'
  import ProjectDetails from '../components/pageComponents/projectDetailsPage/ProjectDetails.vue'
  import SliderComponent from '../components/SliderComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'ProjectDetailsPage',
  
    components: {
          HeaderComponent,
          ProjectDetailsPageBanner,
          ProjectDetails,
          SliderComponent,
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