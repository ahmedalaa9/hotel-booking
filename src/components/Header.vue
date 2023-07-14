<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-bg">
    <div class="header-content">
      <h1>Hotels for the whole family, all year round.</h1>
      <div class="btns-container">
        <a class="btn book" href="#booking">Book Now</a>

        <a class="btn contact" href="#">Contact US</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-bg {
  background-image: linear-gradient(
      to right bottom,
      rgba(47, 137, 252, 0.6),
      rgba(47, 137, 252, 0.4)
    ),
    url("./../assets/bg_1.jpg");
  background-size: cover;
  height: 100vh;

  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      font-size: 3.5rem;
      color: #fff;
      text-shadow: 2px 5px 2px #00000094;
    }

    .btns-container {
      margin: 4rem 0;
      .book {
        margin-right: 10px;
      }
      .btn {
        padding: 15px 40px;
        border-radius: 10px;
        border: none;
        transition: all 0.21s;
        background-color: #fff;
        text-decoration: none;
        color: #000;
        display: inline-block;
        //  width: 100%;
        //  height: 100%;
        &:hover {
          transform: translateY(-2px);
          box-shadow: 3px 5px 5px #00000047;
        }
      }
    }
  }
}
</style>
