import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    // userBooking: false,
    // bookUser: true,
    count: 0,
    hotelBooked: [...JSON.parse(localStorage.getItem("hotels"))],
    hotelDetails: [
      {
        id: 1,
        name: "San Stefano",
        img: "./assets/San_Stefano.jpg",
        booked: true,
        popUpToggle: false,
        advantegs: [true, true, true, true],
        location: "Alexandria",
        rate: "5 stars",
      },
      {
        id: 2,
        name: "sharm",
        img: "./../assets/icons8-location.gif",
        booked: true,
        popUpToggle: false,
        advantegs: [true, true, true, true],
        location: "Sharm El Shekh",
        rate: "5 stars",
      },
      {
        id: 3,
        name: "maa3ady",
        img: "src/assets/icons8-location.gif",
        booked: true,
        popUpToggle: false,
        advantegs: [true, false, false, true],
        location: "Cairo",
        rate: "4 stars",
      },
      {
        id: 4,
        name: "philsten",
        img: "././../assets/phlsten.jpg",
        booked: true,
        popUpToggle: false,
        advantegs: [true, true, true, false],
        location: "Alexandria",
        rate: "3 stars",
      },
      {
        id: 5,
        name: "el Harm",
        img: "@/assets/icons8-location.gif",
        booked: true,
        popUpToggle: false,
        advantegs: [true, false, false, false],
        location: "Cairo",
        rate: "3 stars",
      },
      {
        id: 6,
        name: "sedy Gaber",
        img: "src/assets/icons8-location.gif",
        booked: true,
        popUpToggle: false,
        advantegs: [true, true, true, false],
        location: "Alexandria",
        rate: "4 stars",
      },
    ],
  },

  mutations: {
    popupForm(state, id) {
      const hotel = state.hotelDetails.find((i) => i.id === id);
      console.log(hotel);
      hotel.popUpToggle = !hotel.popUpToggle;

      // state.userBooking = !state.userBooking;
    },

    getUserBooked(state, id) {
      const hotel = state.hotelDetails.find((i) => i.id === id);
      console.log(hotel);
      alert("thank you for booking");
      hotel.booked = false;
      state.hotelBooked.push(hotel);
      localStorage.setItem("hotels", JSON.stringify(state.hotelBooked));

      console.log(state.hotelBooked, state.hotelBooked.length);
    },
    deleteHotel(state, id) {
      state.hotelBooked = state.hotelBooked.filter((i) => i.id !== id);
      const hotel = state.hotelDetails.find((i) => i.id === id);
      hotel.booked = true;
      localStorage.setItem("hotels", JSON.stringify(state.hotelBooked));
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
