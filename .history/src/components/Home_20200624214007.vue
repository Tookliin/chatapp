<template>
  <div class="container-fluid">
    <div class="row">
      <div class="backgroum-img col-12 col-md-12">
        <header class="alert">
          <div class="text-box">
            <div class="Home container">
              <div class="row">
                <div class="col-md-12 offset-md-5">
                  <h2>
                    <span class="home-span"> Hi </span>, I am a Makhosandile
                    Skuni
                  </h2>
                  <p class="mt-3 py-2 mr-3">
                    Eat Healthy, Stay Healthy 😍😍 !!
                  </p>
                  <nuxt-link
                    class="btn btn-outline btn-large btn-info"
                    to="recipes/"
                  >
                    View 😋 ur Recipes
                    <span class="ml-2">&rarr;</span>
                  </nuxt-link>
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
