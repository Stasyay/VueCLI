<template>
  <div id="app">
    <ArticleComponent/>
  </div>
</template>

<script>
import ArticleComponent from './components/ArticleComponent.vue'

export default {
  name: 'App',
  components: {
    ArticleComponent
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
