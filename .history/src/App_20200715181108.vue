<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" dark transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
 <router-link class="navbar-brand" style="color:black; font-weight: bold;" to="/"
                >DevME</router-link>

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
            <!-- <li class="nav-item ">
              <router-link class="nav-link" style="color:grey; font-weight: bold;" to="/contact"
                >Contact Me</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" style="color:black; font-weight: bold;" to="/projects"
                >Experience</router-link
              >
            </li>

          </ul>
        </div>
     

        </mdb-navbar-nav>
     
      </mdb-navbar-toggler>
    </mdb-navbar>
    </main>

    <router-view></router-view>
<!-- Footer -->
<footer class="page-footer font-small cyan darken-3">
 
  <!-- Footer Elements -->
  <div class="container">

    <!-- Grid row-->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

          <!-- Facebook -->
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!-- Twitter -->
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!-- Google +-->
          <a class="gplus-ic">
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Linkedin -->
          <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Instagram-->
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Pinterest-->
          <a class="pin-ic">
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row-->

  </div>
  <!-- Footer Elements -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
  
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