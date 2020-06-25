<template>
  <main class>
 
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="display-4">Healthy Food & Exercise</p>

        <p
          class="lead"
        >Eat Good feel Good, Join A Number Of Healthy Fitness & Food Lovers Groups. Outdoor, Indoor.</p>

        <p class="lead">
          <a class="my-3 btn btn-primary btn-lg" to="/gym/register" href="/gym/register" role="button">
            Join Us Today
            <span class="ml-2">&rarr;</span>
          </a>
        </p>
      </div>
    </div>

    <div class="container py-4">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <blockquote class="blockquote text-center">
            <h2 class="pr-4">Weekly Chef's Favorite</h2>
            <p
              class="mb-0"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-5 col-md-6">
          <div class="blog1 card card-image">
          
            <!-- Content -->
            <div
              class="text-white text-center d-flex align-items-center rgba-black-strong py-2 px-2"
            >
              <div class="text-dark">
                <h3 class="card-title pt-2">
                  <strong>Good Diet</strong>
                </h3>
                <p>Rev up your usual routine by doing this 30-minute outdoor workout circuit, developed by Vindum.</p>
                <p>Try it in your backyard or at a local park—you'll burn about 250 calories with these outdoor exercises while firming up all over.</p>
                <p>Then be sure to keep reading for 10 more unique outdoor workout ideas to keep things fresh and fun.</p>
                <a
                  class="my-3 btn btn-dark btn-sm"
                  to="/gym/join"
                  href="/gym/join"
                  role="button"
                >View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-6">
          <div class="blog2 card card-image">
            <!-- Content -->
            <div
              class="text-dark text-center d-flex align-items-center rgba-black-strong py-2 px-4"
            >
              <div class>
                <h3 class="card-title pt-2 text-dark">
                  <strong>Healthy Work Guide</strong>
                </h3>
                <p>Rev up your usual routine by doing this 30-minute outdoor workout circuit, developed by Vindum.</p>
                <p>Try it in your backyard or at a local park—you'll burn about 250 calories with these outdoor exercises while firming up all over.</p>
                <p>Then be sure to keep reading for 10 more unique outdoor workout ideas to keep things fresh and fun.</p>
                <a
                  class="my-3 btn btn-dark btn-sm"
                  to="/gym/join"
                  href="/gym/join"
                  role="button"
                >View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template>
      <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 py-5">
          <div class="col mb-4" v-for="i in recipes" :key="i.id">
            <div class="card h-100">
              <!--Card image-->
              <div class="view overlay">
                <img class="card-img-top" :src="i.picture" alt="Card image cap" width="50" />
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <!--Card content-->
              <div class="card-body">
                <!-- Card content -->
                <div class="card-body">
                  <!-- Title -->
                  <h4 class="card-title font-weight-bold">
                    <a>{{i.name}}</a>
                  </h4>

                  <p class="mb-2">
                    $ •
                    <span class="text-primary">Ingredients:</span>
                    <br />
                    {{i.ingredients}}
                  </p>

                  <p class="mb-2">
                    $ •
                    <span class="text-primary">Guide</span>
                    <br />
                    {{i.prep_guide}}
                  </p>

                  <hr class="my-4" />

                  <ul class="list-unstyled list-inline d-flex justify-content-between mb-0">
                    <li class="list-inline-item mr-0">
                      <div class="chip mr-0">
                        Prep Time:
                        <span class="badge badge-pill badge-success">{{i.prep_time}}: min</span>
                      </div>
                    </li>
                    <li class="list-inline-item mr-0">
                      <div class="chip mr-0">
                        Difficulty:
                        <span class="badge badge-pill badge-warning">{{i.difficulty}}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
                <a href="#" class="btn btn-primary btn-sm">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="d-flex flex-column">
      <footer class="footer">
        <div>
          <a href="https://coreui.io">CoreUI</a>
          <span>&copy; 2020 creativeLabs.</span>
        </div>
        <div class="ml-auto">
          <span>Powered by</span>
          <a href="https://coreui.io">CoreUI</a>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import RecipeCard from "~/components/RecipeCard.vue";
// import NavBar from "~/components/NavBar.vue";

export default {
  head() {
    return {
      title: "Recipes List"
    };
  },
  components: {
    RecipeCard
    //NavBar
  },
  async asyncData({ $axios, params }) {
    try {
      let recipes = await $axios.$get(`/`);
      return { recipes };
      console.warn({ recipes });
    } catch (error) {
      return { recipes: [] };
    }
  },

  data() {
    return {
      recipes: []
    };
  },
  methods: {
    async deleteRecipe(recipe_id) {
      try {
        await this.$axios.$delete(`/recipes/${recipe_id}/`); // Delete recipe
        let newRecipes = await this.$axios.$get("/recipes/"); //Get New :ist Recipe
        this.recipes = newRecipes; //Update List
      } catch (error) {
        console.warn(error);
      }
    }
  },
  watch: {}
};
</script>

<style lang="css" scoped>
nav {
  background: #0b0613; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0f2129,
    #02202be3,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0a032286,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.blog1 {
  background-image: url("/food1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
    /* width: 100%;
  height: auto; */
}

.blog2 {
  background-image: url("/balance.png");
  background-repeat: no-repeat;
  background-size: cover;
  overlay: 
}
img{
  width: 100%;
  height: auto;
}

.full {
  width: 100%;
  height: auto;
}
img {
  height: 250px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 1s;
}
img:hover {
  cursor: pointer;
}
.jumbotron {
  /* background-color: black; */
  background: #0b0613; /* fallback for old browsers */
  background-image: url("/images/b.jpg");
}

.lead {
  color: rgb(44, 37, 37);
}
</style>





