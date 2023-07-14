<template>
  <div>
    <div :class="openBag ? 'open' : ''" class="cards-booking-container">
      <div class="cards-booking-container__cards">
        <h3>your reservations</h3>
        <div class="cards-loop">
          <user-bag-cards />
        </div>
        <div @click="openBag = !openBag" class="bag-icon">
          <div class="num-items">{{ hotelBooked.length }}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path
              d="M222-80q-43.75 0-74.375-30.625T117-185v-125h127v-570l59.8 60 59.8-60 59.8 60 59.8-60 59.8 60 60-60 60 60 60-60 60 60 60-60v695q0 43.75-30.625 74.375T738-80H222Zm516-60q20 0 32.5-12.5T783-185v-595H304v470h389v125q0 20 12.5 32.5T738-140ZM357-622v-60h240v60H357Zm0 134v-60h240v60H357Zm333-134q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM221-140h412v-110H177v65q0 20 12.65 32.5T221-140Zm-44 0v-110 110Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserBagCards from "./UserBagCards.vue";
import { mapState } from "vuex";

export default {
  components: { UserBagCards },
  data() {
    return {
      openBag: false,
    };
  },
  computed: {
    ...mapState(["hotelBooked"]),
    hotelBooked() {
      return this.$store.state.hotelBooked;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-booking-container {
  position: fixed;
  right: -300px;
  top: 0%;
  width: 300px;
  height: 100%;
  z-index: 99999999;
  transition: all 0.38s;

  &__cards {
    position: relative;
    background-color: #255aa5d1;
    width: 100%;
    height: 100%;
    margin: auto;
    // overflow: auto;

    h3 {
      width: 90%;
      margin: 0 auto;
      padding: 30px;
      text-transform: uppercase;
      text-align: center;
      color: #fff;
      letter-spacing: 1.3px;
    }
  }
}
.bag-icon {
  position: absolute;
  top: 50%;
  right: 100%;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  z-index: 55555555;
  transition: all 0.4s;
  box-shadow: 3px 2px 7px #00000082;

  .num-items {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: -5px;
    left: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }

  svg {
    fill: #255aa5;
  }
  &:hover {
    background-color: #255aa5;

    svg {
      fill: #fff;
    }
  }
}
.open {
  right: 0;
}
</style>
