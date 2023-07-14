<template>
  <div>
    <nav-bar></nav-bar>

    <Header />
    <service />
    <booking />
    <user-bag />
    <!-- <h1>{{ $store.state.count }}</h1> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import Booking from "@/components/Booking.vue";
import Service from "@/components/ServiceSection.vue";
import UserBag from "@/components/UserBag.vue";
export default {
  components: { NavBar, Header, Booking, Service, UserBag },
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
