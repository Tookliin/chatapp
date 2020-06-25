<template>
  <div id="app">
    <main class>
      <!--Navbar-->
      <nav class="navbar navbar-light sticky-top bg-primary py-4">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#">Navbar</a>

        <!-- Collapse button -->

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent15">
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
