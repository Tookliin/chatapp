<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="py-2">
 <router-link class="navbar-brand" style="color:white; font-weight: bold;" to="/"
                >
    <p id="icon" style="text-shadow: rgb(12, 41, 65) 0px 0px 0px, rgb(12, 41, 66) 1px 1px 0px, rgb(12, 42, 67) 2px 2px 0px, rgb(12, 42, 68) 3px 3px 0px, rgb(12, 43, 68) 4px 4px 0px, rgb(13, 43, 69) 5px 5px 0px, rgb(13, 44, 70) 6px 6px 0px, rgb(13, 44, 71) 7px 7px 0px, rgb(13, 45, 72) 8px 8px 0px, rgb(13, 45, 72) 9px 9px 0px, rgb(13, 46, 73) 10px 10px 0px, rgb(14, 46, 74) 11px 11px 0px, rgb(14, 47, 75) 12px 12px 0px, rgb(14, 47, 76) 13px 13px 0px, rgb(14, 48, 77) 14px 14px 0px, rgb(14, 48, 77) 15px 15px 0px, rgb(14, 49, 78) 16px 16px 0px, rgb(14, 49, 79) 17px 17px 0px, rgb(15, 50, 80) 18px 18px 0px, rgb(15, 50, 81) 19px 19px 0px, rgb(15, 51, 82) 20px 20px 0px, rgb(15, 51, 82) 21px 21px 0px, rgb(15, 52, 83) 22px 22px 0px, rgb(15, 52, 84) 23px 23px 0px, rgb(16, 53, 85) 24px 24px 0px, rgb(16, 53, 86) 25px 25px 0px, rgb(16, 54, 86) 26px 26px 0px, rgb(16, 54, 87) 27px 27px 0px, rgb(16, 55, 88) 28px 28px 0px, rgb(16, 55, 89) 29px 29px 0px, rgb(16, 56, 90) 30px 30px 0px, rgb(17, 56, 91) 31px 31px 0px, rgb(17, 57, 91) 32px 32px 0px, rgb(17, 57, 92) 33px 33px 0px; font-size: 86px; color: rgb(255, 255, 255); height: 90px; width: 90px; line-height: 210px; border-radius: 10%; text-align: center; background-color: rgb(17, 58, 93);"> MS </p> 
                </router-link>

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
       

       <!-- <router-link
                  type="button"
                    class="btn "
                    style="background-color: #F9F9F9;"
                    to="contact"
                  >Get in touch😋
    <span class="ml-2">&rarr;</span></router-link> -->
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