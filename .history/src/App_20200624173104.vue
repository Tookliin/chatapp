<template>
  <div id="app">
    <main class>
      <!--Navbar-->
      <nav class="navbar navbar-light sticky-top  purple lighten-4 mb-4">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#">Navbar</a>

        <!-- Collapse button -->
        <button
          class="navbar-toggler toggler-example purple darken-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent41"
          aria-controls="navbarSupportedContent41"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="white-text"><i class="fas fa-bars fa-1x"></i></span>
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent41">
          <!-- Links -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <!-- Links -->
        </div>
        <!-- Collapsible content -->
      </nav>
      <!--/.Navbar-->
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
