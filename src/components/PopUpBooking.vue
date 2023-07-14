<template>
  <div class="overlay">
    <div class="form-booking">
      <div @click="popupForm(hotelss.id)" class="close-popup">
        <img src="../assets/close.png" alt="" />
      </div>
      <div class="form-booking__content">
        <h3>
          Hello and welcome to <span>{{ hotelss.name }}</span> hotel
        </h3>
        <form @submit="popupForm(hotelss.id), getUserBooked(hotelss.id)">
          <div class="form-booking__content-inputs">
            <div class="label-input">
              <label for="userName">Name</label>
              <input required id="userName" type="text" />
            </div>
            <div class="label-input">
              <label for="email">Email</label>
              <input required id="email" type="text" />
            </div>
            <div class="label-input">
              <label for="mobile">Mobile Number</label>
              <input required id="mobile" type="number" />
            </div>
            <button class="btn btn-submit" type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import FormBooking from "./FormBooking.vue";

import { mapMutations } from "vuex";
export default {
  // computed: { ...mapState(["bookUser"]) },
  props: ["hotelss"],
  methods: {
    ...mapMutations(["popupForm", "userBook", "getUserBooked"]),
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000009f;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.form-booking {
  width: 40%;
  background-color: #eee;
  position: fixed;
  z-index: 999;

  .close-popup {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
  &__content {
    background-image: linear-gradient(
        to right bottom,
        rgba(47, 137, 252, 0.8),
        rgba(47, 137, 252, 0.7)
      ),
      url("./../assets/form-bg.jpg");
    background-size: cover;
    margin: 40px;
    border-radius: 5px;

    h3 {
      color: #fff;
      padding-top: 25px;

      span {
        color: #01233b;
      }
    }

    &-inputs {
      padding: 1rem;
      margin: 0.5rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      align-content: space-between;

      .label-input {
        width: 100%;
        display: flex;
        color: #fff;
        font-weight: bold;
        justify-content: space-around;
        justify-items: stretch;

        label {
          width: 50%;
          display: block;
          text-align: left;
          padding: 5px;
          margin: 15px 0 5px;
        }
        input {
          outline: none;
          border: none;
          margin: 10px 0;
          padding: 10px;
          border-radius: 5px;
          width: 50%;
        }
      }
    }
  }
}
.btn-submit {
  margin-top: 30px;
  font-weight: bold;
}
</style>
