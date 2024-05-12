<template>
  <button class="article__tag" :class="{article__tag_active}" @click="$emit('click')">{{tags.title}}</button>
</template>

<script>
export default {
  name: 'ArticleTagsComponent',
  props: {
    tag_active: { type: Boolean, default: false },
    tags: { type: Object, default() {
        return { title: ''}
      } 
    },
  },

};
</script>

<style lang="scss" scoped>

</style>