<template>
  <div class="hello">
    <nav>
      <div class="">
        <ul>
          <li>
            <a href="#" to="me">
              Home
            </a>
          </li>
          <li>
            <a href="Contact.vue" to="Contact.vue">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
