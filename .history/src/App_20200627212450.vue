<template>
  <div id="app">
    <main class>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">MacDev</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          
          <mdb-nav-item href="#" waves-fixed>
              <router-link class="nav-link" to="/contact"
                >Contact Me</router-link
              >
          </mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>
              <router-link class="nav-link" to="/projects"
                >Projects</router-link
              >
          </mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input
            type="text"
            class="text-white"
            placeholder="Search"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
    </main>

    <router-view></router-view>
  </div>
</template>

<script>
// export default {
//   name: "App",
//   components: {},
//   data() {
//     return {};
//   },
// };


  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand
  } from "mdbvue";
  export default {
     name: "App",
  
  data() {
    return {};
  },
   
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbInput,
      mdbNavbarBrand
    },
  };
</script>
