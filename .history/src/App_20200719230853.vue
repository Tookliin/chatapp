<template>
  <div id="app">
    <main class>
     <mdb-navbar position="top" transparent scrolling>
     
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="py-2">
 <router-link class="navbar-brand" style="color:white; font-weight: bold;" to="/"
                >
    <p id="icon" style="text-shadow: rgb(179, 85, 97) 0px 0px 0px, rgb(181, 87, 98) 1px 1px 0px, rgb(183, 88, 99) 2px 2px 0px, rgb(186, 89, 100) 3px 3px 0px, rgb(188, 90, 102) 4px 4px 0px, rgb(190, 91, 103) 5px 5px 0px, rgb(193, 92, 104) 6px 6px 0px, rgb(195, 93, 106) 7px 7px 0px, rgb(198, 95, 107) 8px 8px 0px, rgb(200, 96, 108) 9px 9px 0px, rgb(202, 97, 110) 10px 10px 0px, rgb(205, 98, 111) 11px 11px 0px, rgb(207, 99, 112) 12px 12px 0px, rgb(210, 100, 113) 13px 13px 0px, rgb(212, 101, 115) 14px 14px 0px, rgb(214, 103, 116) 15px 15px 0px, rgb(217, 104, 117) 16px 16px 0px, rgb(219, 105, 119) 17px 17px 0px, rgb(222, 106, 120) 18px 18px 0px, rgb(224, 107, 121) 19px 19px 0px, rgb(226, 108, 122) 20px 20px 0px, rgb(229, 109, 124) 21px 21px 0px, rgb(231, 111, 125) 22px 22px 0px, rgb(233, 112, 126) 23px 23px 0px, rgb(236, 113, 128) 24px 24px 0px, rgb(238, 114, 129) 25px 25px 0px, rgb(241, 115, 130) 26px 26px 0px, rgb(243, 116, 132) 27px 27px 0px, rgb(245, 117, 133) 28px 28px 0px, rgb(248, 119, 134) 29px 29px 0px, rgb(250, 120, 135) 30px 30px 0px, rgb(253, 121, 137) 31px 31px 0px; font-size: 28px; color: rgb(17, 58, 93); height: 50px; width: 50px; line-height: 50px; border-radius: 20%; text-align: center; background-color: rgb(255, 122, 138);"> MS </p> 
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