<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <head-sections />
    <div class="cards">
      <card-service />
    </div>
  </div>
</template>

<script>
import CardService from "./CardService.vue";
import HeadSections from "./shared component/HeadSections.vue";
export default {
  components: { HeadSections, CardService },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem 0;
  .cards {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
