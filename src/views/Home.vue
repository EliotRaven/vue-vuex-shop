<template>
  <div class="home">
    <md-content>
      <Products/>
    </md-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue';

export default {
  name: 'home',
  components: {
    Products,
  },
};
</script>

<style scoped>
  .md-content {
    padding: 0 40px;
  }
</style>
