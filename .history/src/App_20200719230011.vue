<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="py-2">
 <router-link class="navbar-brand" style="color:white; font-weight: bold;" to="/"
                >
                <p id="icon" style="text-shadow: rgb(12, 41, 65) 0px 0px 0px, rgb(12, 41, 66) 1px 1px 0px, rgb(12, 41, 66) 2px 2px 0px, rgb(12, 41, 66) 3px 3px 0px, rgb(12, 42, 67) 4px 4px 0px, rgb(12, 42, 67) 5px 5px 0px, rgb(12, 42, 68) 6px 6px 0px, rgb(12, 42, 68) 7px 7px 0px, rgb(12, 43, 68) 8px 8px 0px, rgb(13, 43, 69) 9px 9px 0px, rgb(13, 43, 69) 10px 10px 0px, rgb(13, 43, 70) 11px 11px 0px, rgb(13, 44, 70) 12px 12px 0px, rgb(13, 44, 70) 13px 13px 0px, rgb(13, 44, 71) 14px 14px 0px, rgb(13, 44, 71) 15px 15px 0px, rgb(13, 45, 72) 16px 16px 0px, rgb(13, 45, 72) 17px 17px 0px, rgb(13, 45, 72) 18px 18px 0px, rgb(13, 45, 73) 19px 19px 0px, rgb(13, 46, 73) 20px 20px 0px, rgb(13, 46, 74) 21px 21px 0px, rgb(14, 46, 74) 22px 22px 0px, rgb(14, 46, 74) 23px 23px 0px, rgb(14, 47, 75) 24px 24px 0px, rgb(14, 47, 75) 25px 25px 0px, rgb(14, 47, 76) 26px 26px 0px, rgb(14, 47, 76) 27px 27px 0px, rgb(14, 48, 76) 28px 28px 0px, rgb(14, 48, 77) 29px 29px 0px, rgb(14, 48, 77) 30px 30px 0px, rgb(14, 48, 78) 31px 31px 0px, rgb(14, 49, 78) 32px 32px 0px, rgb(14, 49, 78) 33px 33px 0px, rgb(14, 49, 79) 34px 34px 0px, rgb(14, 49, 79) 35px 35px 0px, rgb(15, 50, 80) 36px 36px 0px, rgb(15, 50, 80) 37px 37px 0px, rgb(15, 50, 80) 38px 38px 0px, rgb(15, 50, 81) 39px 39px 0px, rgb(15, 51, 81) 40px 40px 0px, rgb(15, 51, 82) 41px 41px 0px, rgb(15, 51, 82) 42px 42px 0px, rgb(15, 51, 82) 43px 43px 0px, rgb(15, 52, 83) 44px 44px 0px, rgb(15, 52, 83) 45px 45px 0px, rgb(15, 52, 84) 46px 46px 0px, rgb(15, 52, 84) 47px 47px 0px, rgb(15, 53, 85) 48px 48px 0px, rgb(16, 53, 85) 49px 49px 0px, rgb(16, 53, 85) 50px 50px 0px, rgb(16, 53, 86) 51px 51px 0px, rgb(16, 54, 86) 52px 52px 0px, rgb(16, 54, 87) 53px 53px 0px, rgb(16, 54, 87) 54px 54px 0px, rgb(16, 54, 87) 55px 55px 0px, rgb(16, 55, 88) 56px 56px 0px, rgb(16, 55, 88) 57px 57px 0px, rgb(16, 55, 89) 58px 58px 0px, rgb(16, 55, 89) 59px 59px 0px, rgb(16, 56, 89) 60px 60px 0px, rgb(16, 56, 90) 61px 61px 0px, rgb(16, 56, 90) 62px 62px 0px, rgb(17, 56, 91) 63px 63px 0px, rgb(17, 57, 91) 64px 64px 0px, rgb(17, 57, 91) 65px 65px 0px, rgb(17, 57, 92) 66px 66px 0px, rgb(17, 57, 92) 67px 67px 0px, rgb(17, 58, 93) 68px 68px 0px; font-size: 86px; color: rgb(255, 255, 255); height: 70px; width: 70px; line-height: 90px; border-radius: 19%; text-align: center; background-color: rgb(17, 58, 93);"> MS </p> 
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