<template>
  <div v-for="hotel in hotelBooked" :key="hotel.id" class="card-booked">
    <div class="card-booked__img">
      <!-- <img :src="hotel.img" alt="" /> -->
      <!-- <img src="././../assets/savoy-sharm-el-sheikh-1.jpg" alt="" /> -->
      <!-- <h6>{{ hotel.location }}</h6>
      <h6>{{ hotel.rate }}</h6> -->
    </div>
    <div class="card-booked__details">
      <h4>{{ hotel.name }}</h4>

      <button @click="deleteHotel(hotel.id)" class="btn btn-cancel">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["hotelBooked"]),
    hotelBooked() {
      return this.$store.state.hotelBooked;
    },
  },
  methods: {
    ...mapMutations(["deleteHotel"]),
  },
};
</script>

<style lang="scss" scoped>
.card-booked {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 5px;
  background-color: #eee;
  border-radius: 10px;
  margin: 5px;

  &__img {
    width: 110px;
    height: 75px;
    border-radius: 5px;
    background-color: brown;
    background-image: linear-gradient(
        to right bottom,
        rgba(47, 137, 252, 0.1),
        rgba(47, 137, 252, 0.4)
      ),
      url("./../assets/savoy-sharm-el-sheikh-1.jpg");
    background-size: cover;
    background-position: center center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__details {
    // background-color: rgb(156, 174, 101);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h4 {
      font-size: 1.1rem;
      padding: 5px 0;
    }
    h6 {
      font-size: 0.91rem;
      padding-bottom: 5px;
    }

    .btn-cancel {
      background-color: brown;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
