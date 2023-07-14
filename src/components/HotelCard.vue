<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div v-for="hotel in hotels" :key="hotel.id" class="card">
    <!-- <div class="popup-container"> -->
    <pop-up-booking :hotelss="hotel" v-if="hotel.popUpToggle" />
    <!-- </div> -->
    <div class="card__img">
      <h3>
        <span>{{ hotel.name }} </span>
      </h3>
    </div>

    <div class="card__details">
      <h5>Advantages</h5>
      <ul>
        <li>Rating is : {{ hotel.rate }}</li>
        <li>
          Breakfast included
          <svg
            v-if="hotel.advantegs[0]"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path
              d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
            />
          </svg>
        </li>
        <li>
          Close to the beach
          <svg
            v-if="hotel.advantegs[1]"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path
              d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
            />
          </svg>
        </li>
        <li>
          Free wifi in all rooms
          <svg
            v-if="hotel.advantegs[2]"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path
              d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
            />
          </svg>
        </li>
        <li>
          Air conditioning and heating
          <svg
            v-if="hotel.advantegs[3]"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#255aa5"
          >
            <path
              d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div class="card__address">
      <div class="location-icon">
        <img src="../assets/icons8-location.gif" alt="" />
      </div>
      <h5>{{ hotel.location }}</h5>
    </div>

    <button
      :disabled="!hotel.booked"
      :class="!hotel.booked ? 'danger' : ''"
      @click="popupForm(hotel.id)"
      class="btn book"
    >
      <a> {{ hotel.booked ? "Book Now" : "Booked" }}</a>
    </button>
  </div>
</template>

<script>
import PopUpBooking from "./PopUpBooking.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: { PopUpBooking },

  data() {
    return {
      // userBooking: false,
    };
  },
  computed: {
    ...mapState(["bookUser"]),
    hotels() {
      return this.$store.state.hotelDetails;
    },
  },
  methods: {
    ...mapMutations(["popupForm"]),
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  margin-right: 15px;
  margin-bottom: 35px;
  height: 650px;
  width: 25%;
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: all 0.3s;
  position: relative;

  &__details {
    width: 70%;
    margin: 20px auto 5px;
    text-align: center;

    h5 {
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgba(30, 18, 2, 0.224);
        display: inline-block;
        margin-top: 7px;
      }
    }
    ul {
      list-style: none;

      li {
        padding: 0.3rem 0;

        &::after {
          content: "";
          width: 100%;
          height: 1px;
          background-color: rgba(30, 18, 2, 0.224);
          display: block;
          margin-top: 7px;
        }
      }
    }
  }

  &__img {
    border-radius: 5px;
    position: relative;
    height: 40%;
    background-image: linear-gradient(
        to right bottom,
        rgba(47, 137, 252, 0.1),
        rgba(47, 137, 252, 0.4)
      ),
      url("./../assets/savoy-sharm-el-sheikh-1.jpg");
    background-size: cover;
    background-position: center center;
    transition: all 0.3s;
    z-index: 2;

    &:hover {
      transform: scale(1.09);
    }

    h3 {
      position: absolute;
      bottom: 5px;
      right: 20px;

      span {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        background-image: linear-gradient(
          to right bottom,
          rgba(21, 86, 146, 0.85),
          rgba(31, 20, 136, 0.85)
        );
      }
    }
  }

  &__address {
    //  width: 80%;
    //  margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .location-icon {
      img {
        width: 90%;
      }
    }
  }
  .btn {
    width: 80%;
    cursor: pointer;
    margin: 10px auto;
    display: block;
    padding: 15px 40px;
    border-radius: 10px;
    border: none;
    transition: all 0.21s;
    background-color: #255aa5;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 3px 5px 5px #00000047;
      background-color: #00487a;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
}
.danger {
  opacity: 0.5;
}
</style>
