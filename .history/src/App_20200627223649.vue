<template>
  <div>
    <mdb-navbar position="top" dark transparent scrolling>
      <mdb-navbar-brand href="#">MacDev</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          
          <mdb-nav-item href="/contact" waves-fixed>
              <router-link class="nav-link" to="/contact"
                >Contact Me</router-link
              >
          </mdb-nav-item>
          <mdb-nav-item href="/projects" waves-fixed>
              <router-link class="nav-link" to="/projects"
                >Projects</router-link
              >
          </mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input
            type="text"
            class="text-white"
            placeholder="Search"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  
  </div>
</template>

<style lang="css" scoped>
nav {
  background-image: linear-gradient(
    171.8deg,
    rgba(5, 111, 146, 1) 13.5%,
    rgba(6, 57, 84, 1) 78.6%
  );
}
  </style>

<script>
  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand
  } from "mdbvue";
  export default {
    name: "App",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbInput,
      mdbNavbarBrand
    },
  };

  
 

</script>
