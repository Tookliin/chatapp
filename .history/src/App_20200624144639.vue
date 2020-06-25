<template>
  <div id="app">
    <main class>
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary py-4"
      >
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
            <!-- <li class="nav-item">
            <a class="nav-link" href="#">Lunch</a>
          </li> -->
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </main>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>
