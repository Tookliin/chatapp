<template>
  <div class="container-fluid">
    <div class="row">
      <div class="backgroum-img col-12 col-md-12">
        <header class="alert">
          <div class="text-box">
            <div class="container">
              <div class="row">
                <div class="col align-self-start">
                  One of three columns
                  <h2>Hey, Foodies</h2>
                  <p class="mt-4 py-">Eat Healthy, Stay Healthy 😍😍 !!</p>
                  <nuxt-link
                    class="btn btn-outline btn-large btn-info"
                    to="recipes/"
                  >
                    View 😋 ur Recipes
                    <span class="ml-2">&rarr;</span>
                  </nuxt-link>
                </div>
                <div class="col align-self-center">
                  One of three columns
                  <h2>Hey, Foodies</h2>
                  <p class="mt-4 py-">Eat Healthy, Stay Healthy 😍😍 !!</p>
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
