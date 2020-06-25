<template>
  <div class="container-fluid">
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
          </div>
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
