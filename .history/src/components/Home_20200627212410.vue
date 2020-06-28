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
                     developer, with Data and Business Analyst
                    skills
                  </p>
                  <router-link
                    class="btn btn-outline btn-large btn-info"
                    to="contact"
                  >
                    Contact Me 😋
                    <span class="ml-2">&rarr;</span></router-link
                  >
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
