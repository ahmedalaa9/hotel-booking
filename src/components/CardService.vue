<template>
  <div v-for="serv in servs" :key="serv" class="service-card">
    <div class="service-card__img">
      <div class="circle">
        <img src="../assets/about-icon1.svg" alt="" />
      </div>
    </div>
    <div class="service-card__content">
      <p>{{ serv.parg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servs: [
        {
          id: 1,
          parg: "Friendly Service",
        },
        {
          id: 2,
          parg: "Get Breakfast",
        },
        {
          id: 3,
          parg: "Transfer Services",
        },
        {
          id: 4,
          parg: "Suits & SPA",
        },
        {
          id: 5,
          parg: "Cozy Rooms",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;

  width: 220px;

  &__img {
    position: relative;
    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      box-shadow: 0px -4px 15px -15px rgba(0, 0, 0, 0.62);

      img {
        width: 100%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }
  &__content {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    transition: all 0.43s ease;
    border-radius: 8px;

    p {
      margin-top: 30px;
      font-weight: bold;
    }
    &:hover {
      background-color: #255aa5;

      & p {
        color: #fff;
      }
    }
  }
}
</style>
