<template>
    <div style="height: 110vh">
      <div class="view intro-2" style="height: 80vh">
        <div class="full-bg-img">
          <div class="mask rgba-purple-light">
            <div class="container flex-center">
              <div class="white-dark text-center py-3">
                <h2>
                 <span class="home-span mb-3"> Hi, </span> I am Makhosandile Skuni
                </h2>
                <h4>
                 Software developer, with Data and Business Analyst
                    skills
                </h4>
                <p>
                  Full page intro with background image will be always displayed
                  in full screen mode, regardless of device
                </p>
                

                  <router-link
                  type="button"
                    class="btn btn-outline-white btn-md "
                    to="contact"
                  >
                    Contact Me 😋
                    <span class="ml-2">&rarr;</span></router-link
                  >


                  <div class="container py-3">
  <div class="row justify-content-md-center ">
    <div class="col col-lg-2">
      <a class="nav-link" href="https://www.instagram.com" target="blank" >
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>

        
    </div>
    <div class="col-md-auto">
      <a class="nav-link" href="https://www.twitter.com" target="blank" >
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
    </div>
    <div class="col col-lg-2">
      <a class="nav-link" href="https://www.facebook.com" target="blank" >
          <i class="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
    </div>

     <div class="col col-lg-2">
      <a class="nav-link" href="https://www.github.com" target="blank" >
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
        
    </div>
    
  </div>
              </div>
             
 
    </div>
 
           
            </div>
          </div>
        </div>
      </div>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  
</div>
    </div>
</template>
<script>
export default {
  name: "Home",
  props: {},
};
</script>
