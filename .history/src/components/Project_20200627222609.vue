<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">MacDev</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          
          <mdb-nav-item href="/contact" waves-fixed>
              <router-link class="nav-link" to="/contact"
                >Contact Me</router-link
              >
          </mdb-nav-item>
          <mdb-nav-item href="/projects" waves-fixed>
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
    <div style="height: 110vh">
      <div class="view intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask rgba-purple-light">
            <div class="container flex-center">
              <div class="white-text text-center">
                <h2>
                  This Navbar is fixed
                </h2>
                <h4>
                  It will always stay visible on the top, even when you scroll
                  down
                </h4>
                <p>
                  Full page intro with background image will be always displayed
                  in full screen mode, regardless of device
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="m-5">
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
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
