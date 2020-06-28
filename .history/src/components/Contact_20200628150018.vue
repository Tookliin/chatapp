<template>
    <div style="height: 110vh">
      <div class="contact intro-2" style="height: 100vh">
        <div class="full-bg-img">
          <div class="mask ">
            <div class="container flex-center">
              <div class="white-text text-center">
         
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
            <div class="row">
      <div class="backgroum-img col-12 col-md-8">
        <header class="alert">
          <div class="text-box">
            <h2>Hey, Foodies</h2>
            <p class="mt-4 py-">Eat Healthy, Stay Healthy 😍😍 !!</p>
            <nuxt-link class="btn btn-outline btn-large btn-info" to="recipes/">
              View 😋 ur Recipes
              <span class="ml-2">&rarr;</span>
            </nuxt-link>
          </div>
        </header>
      </div>

      <div class="change col-6 col-md-4">
        <div class>
          <div class>
            <div class="pt-5 mt-5 py-3">
              <blockquote class="pt-5 mt-4 blockquote text-center">
                <h2>Register For Membership</h2>
              </blockquote>
            </div>

            <div class="justify-content-center">
              <form>
                <fieldset>
                  <div class="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="mt-3 pb-4 form-group">
                    <label for="exampleInputPassword1"></label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <button type="submit" class="btn btn-outline-secondary btn-large btn-block">Login</button>
                </fieldset>

                <div class="row py-4">
                  <div class="col-6 col-md-3 ml-5">
                    <a href="https://www.facebook.com" target="blank" class="fab fa-facebook-f"></a>
                  </div>
                  <div class="col-6 col-md-3">
                    <a href="https://www.twitter.com" target="blank" class="fab fa-twitter"></a>
                  </div>
                  <div class="col-5 col-md-3 pr-4">
                    <a href="https://www.instagram.com" target="blank" class="fab fa-instagram"></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      


      <div class="container mdb-lightbox">
  <div class="row">
    <div class="col">
        <figure class="col-md-4">
        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg" data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg" class="img-fluid z-depth-1">
        </a>
      </figure>
    </div>
    <div class="col">
       <figure class="col-md-4">
        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg" data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg" class="img-fluid z-depth-1">
        </a>
      </figure>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3">
     <figure class="col">
        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg" data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg" class="img-fluid z-depth-1">
        </a>
      </figure>
    </div>
    <div class="col-md-4">
      <!-- Card -->
<div class="card card-image"
  style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);">

  <!-- Content -->
  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
      <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Workpoints Back-Office</h5>
      <h3 class="card-title pt-2"><strong>Tech Stack</strong></h3>
      <p>kk</p>
      <ul>
        <li>1</li>
        <li>1</li>
      </ul>
      <a class="btn btn-pink"><i class="fas fa-clone left"></i> View project</a>
    </div>
  </div>

</div>
<!-- Card -->
    </div>
    <div class="col-md-3">
     <!-- Card Dark -->
<div class="card">

  <!-- Card image -->
  <div class="view overlay py-2">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
      alt="Card image cap">
   
  </div>

  <!-- Card content -->
  <div class="card-body elegant-color white-text rounded-bottom ml-4 mr-4">

    <!-- Social shares button -->
    <!-- <a class="activator waves-effect "><i class="fas fa-share-alt white-text"></i></a> -->
    <!-- Title -->
    <h5 class="card-title">Workpoints </h5>
    <hr class="hr-light">
    <!-- Text -->
    <p class="card-text white-text ">Built in vue.js and typescript</p>
    <ul>
      <li>vue</li>
      <li>vue</li>
      <li>vue</li>
    </ul>
    <!-- Link -->
  

  </div>

</div>
<!-- Card Dark -->
    </div>
  </div>
</div>

    </div>

</template>

<style scoped>

  </style>

<script>
  import {
  
    
   
   
  } from "mdbvue";
  export default {
    name: "Projects",
    components: {
    
   
    },
  };

  
 

</script>
<style lang="css" scoped>
header {
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;
}
.text-box {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: beige;
}
.btn {
  border-radius: 40px;
}

.text-box h1 {
  font-family: cursive;
  font-size: 5rem;
}

.text-box p {
  font-size: 2rem;
  font-weight: lighter;
}
.submit {
  color: var(--dark);
}

.change {
  color: var(--dark);
  background-image: #08aeea;
  background-image: -webkit-linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  background-image: -moz-linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  background-image: -o-linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
}

.container-fluid {
  background-image: url("/images/d.jpg");
}
.btn-outline-secondary {
  color: rgb(197, 183, 183);
  font-weight: bold;
}
</style>

