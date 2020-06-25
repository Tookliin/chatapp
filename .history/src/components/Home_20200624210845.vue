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


<div class="backgroum-img container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
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
