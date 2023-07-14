<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="booking" class="section-bg">
    <div class="container">
      <head-sections />
      <div class="cards">
        <hotel-card />
      </div>
    </div>
  </div>
</template>

<script>
import HotelCard from "./HotelCard.vue";
import HeadSections from "./shared component/HeadSections.vue";
export default {
  components: { HotelCard, HeadSections },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Booking",
};
</script>

<style lang="scss" scoped>
.section-bg {
  background-color: #eee;
  padding: 4rem 0;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
}
</style>
