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

                  <button
                    type="submit"
                    class="btn btn-outline-secondary btn-large btn-block"
                  >
                    Login
                  </button>
                </fieldset>

                <div class="row py-4">
                  <div class="col-6 col-md-3 ml-5">
                    <a href="https://www.facebook.com" target="blank" class
                      >Facebook</a
                    >
                  </div>
                  <div class="col-6 col-md-3">
                    <a href="https://www.twitter.com" target="blank" class
                      >Twitter</a
                    >
                  </div>
                  <div class="col-5 col-md-3 pr-4">
                    <a href="https://www.instagram.com" target="blank" class
                      >Instagram</a
                    >
                  </div>
                </div>
              </form>
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
