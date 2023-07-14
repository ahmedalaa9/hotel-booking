<template>
  <div class="sec-heading">
    <h4>WELCOME TO Hotel Booking</h4>
    <h2>You'll Never Want To Leave</h2>
  </div>
</template>

<script>
export default {
  name: "HeadSections",
};
</script>

<style lang="scss" scoped>
.sec-heading {
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h4,
  h2 {
    display: block;
    margin-bottom: 5px;

    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
  }
  h4 {
    font-size: 13px;
    color: #255aa5;
  }
  h2 {
    font-size: 38px;
    font-weight: 700;
    padding: 1rem 0;
  }
}
</style>
