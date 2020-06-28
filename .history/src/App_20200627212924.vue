<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="/">MacDev</mdb-navbar-brand>
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

  </div>
</template>

<style scoped>
  .view {
    background: url("https://mdbootstrap.com/img/Photos/Others/img (40).jpg")
      no-repeat center center;
    background-size: cover;
    height: 100%;
  }

  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }
  </style>

<script>
  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand
  } from "mdbvue";
  export default {
    name: "NavigationPage",
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
