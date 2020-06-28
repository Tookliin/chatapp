<template>
  <div class="container-fluid">
    <div class="row">
      <div class="backgroum-img col-12 col-md-12">
        <header class="alert">
          <div class="text-box">
            <div class="Home container">
              <div class="row">
                <div class="col-md-8 offset-md-5 pb-5">
                  <h2 class="p">
                    <span class="home-span"> Hi, </span> I am Makhosandile Skuni
                  </h2>
                  <p class="mb-5">
                    Software developer, with Data and Business Analyst
                    skills
                  </p>
                  <router-link
                    class="btn btn-outline btn-large btn-info"
                    to="contact"
                  >
                    Contact Me 😋
                    <span class="ml-2">&rarr;</span></router-link
                  >
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
                </div>
              </div>
            </div>
          </div>
        </header>
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
