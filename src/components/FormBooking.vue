<template>
  <div class="form-booking">
    <div @click="popupForm" class="close-popup">
      <img src="../assets/close.png" alt="" />
    </div>
    <div class="form-booking__content">
      <h3>
        Hello and welcome to {{ $store.state.hotelDetails[0].name }} hotel
      </h3>
      <form @submit="popupForm">
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
          <button @click="getUserBooked(x.id)" class="btn" type="submit">
            Book Now
            {{ x }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  // computed: { ...mapState(["bookUser"]) },
  props: ["x"],
  methods: {
    ...mapMutations(["popupForm", "userBook", "getUserBooked"]),
  },
};
</script>

<style lang="scss" scoped>
.form-booking {
  width: 40%;
  background-color: #eee;
  position: relative;

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
        }
      }
    }
  }
}
.btn {
  margin-top: 30px;
  font-weight: bold;
}
</style>
