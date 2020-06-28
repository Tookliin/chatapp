<template>
  <div id="app">
    <main class>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark py-4" position="top" dark transparent scrolling>
        <a class="navbar-brand" href="/">DevME</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/contact"
                >Contact Me</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects"
                >Projects</router-link
              >
            </li>

          </ul>
        </div>
            <ul class="navbar-nav nav-flex-icons ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#!">
          <i class="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#!">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#!">
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
      </nav>
    </main>

    <router-view></router-view>
  </div>
</template>
<style lang="css" scoped>
nav {

  background-image: 
   linear-gradient(
    171.8deg,
    rgba(5, 111, 146, 1) 13.5%,
    rgb(31, 138, 196) 78.6%
  );
  
  background: url("https://mdbootstrap.com/img/Photos/Others/img (40).jpg");
}
</style>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>