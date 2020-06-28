<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" dark transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
 <router-link class="navbar-brand" style="color:grey; font-weight: bold;" to="/"
                >Contact Me</router-link>

        <!-- <a class="navbar-brand text-dark" href="/">DevME</a> -->
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
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item ">
              <router-link class="nav-link" style="color:grey; font-weight: bold;" to="/contact"
                >Contact Me</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" style="color:grey; font-weight: bold;" to="/projects"
                >Projects</router-link
              >
            </li>

          </ul>
        </div>
     

        </mdb-navbar-nav>
     
      </mdb-navbar-toggler>
    </mdb-navbar>
    </main>

    <router-view></router-view>
  </div>
</template>
<style lang="css" scoped>
</style>

<script>
 import {
    mdbNavbar,
    
    mdbNavbarNav,
    mdbNavbarToggler,
   
  } from "mdbvue";
export default {
  name: "App",
  components: {
     mdbNavbar,
   
      mdbNavbarNav,
      mdbNavbarToggler,
  },
  data() {
    return {};
  },
};
</script>