<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          
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
         
        </mdb-navbar-nav>
     
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

  </style>

<script>
  import {
    mdbNavbar,
    
    mdbNavbarNav,
    mdbNavbarToggler,
   
  } from "mdbvue";
  export default {
    name: "NavigationPage",
    components: {
      mdbNavbar,
   
      mdbNavbarNav,
      mdbNavbarToggler,
      // mdbInput,
      // mdbNavbarBrand
    },
  };

  
 

</script>
