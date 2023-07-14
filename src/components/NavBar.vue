<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__content">
        <div class="logo"><span>H</span>otel<span>B</span>ooking</div>
        <div class="nav-items">
          <ul>
            <li>Home</li>
            <a href="#booking"> <li>hotels</li> </a>
            <li>About</li>
            <li>Contact US</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  &__content {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 1.6rem;
      color: #fff;
      font-weight: bold;
      span {
        color: #072550;
        font-size: 1.9rem;
      }
    }
    .nav-items {
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        a {
          text-decoration: none;
        }
        li {
          margin-left: 20px;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
