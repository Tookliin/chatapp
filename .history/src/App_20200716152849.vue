<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="py-2">
 <router-link class="navbar-brand" style="color:white; font-weight: bold;" to="/"
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
            <li class="nav-item ">
              <router-link class="nav-link" style="color:white; font-weight: bold;" to="/contact"
                >Contact </router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" style="color:white; font-weight: bold;" to="/projects"
                >Experience</router-link
              >
            </li>

          </ul>
        </div>
     

        </mdb-navbar-nav>
  
    <div class="">
       <a class="btn btn-amber btn-md ml-0" href="#" role="button">Play the game<i class="fas fa-trophy ml-2"></i></a>

       <router-link
                  type="button"
                    class="btn "
                    style="background-color: #FBB040;"
                    to="contact"
                  >Hire Me 😋
    <span class="ml-2">&rarr;</span></router-link>
    </div>
      </mdb-navbar-toggler>
    </mdb-navbar>


    <!-- <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <a class="navbar-brand" href="#"><strong>Navbar</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                </li>
            </ul>
        </div>
    </nav> -->
    </main>

    <router-view></router-view>

<!-- <footer class="page-footer font-small cyan darken-3">
 

  <div class="container">

  
    <div class="row">

 
      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

       
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
         
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
         
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
      
        
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>
</footer> -->

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