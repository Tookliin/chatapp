<template>
  <!-- Material form contact -->
  <form>
    <p class="h4 text-center mb-4">Write to us</p>
    <div class="grey-text">
      <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
      <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
      <mdb-input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
    </div>
  </form>
  <!-- Material form contact -->
</template>
<script>
  import { mdbInput, mdbBtn, mdbtextarea } from 'mdbvue';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn,
      mdbTextarea
    }
  }
</script>
