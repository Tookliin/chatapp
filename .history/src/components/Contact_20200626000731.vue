<template>

<mdb-container>
    <mdb-row>
      <mdb-col class="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <form @submit.prevent="submitForm" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="w-100">
            <p style="display: none" class="hidden">
    <label>Dont Fell This Out If you Are Human: <input name="bot-field" /></label>
  </p>
    <p class="h4 text-center mb-4">Write to us</p>
    <div class="grey-text">
      <mdb-input name="name" label="Please Enter name" icon="user" group type="text" validate error="wrong" success="right"/>
      <mdb-input name="email"  label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
      <mdb-input name="subject"  label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea name="message"  :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
      
    </div>
  </form>
      </mdb-col>
      
    </mdb-row>
  </mdb-container>
  <!-- Material form contact -->

  <!-- Material form contact -->
</template>
<script>
  import { mdbInput, mdbIcon, mdbBtn, mdbTextarea, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn,
      mdbTextarea,
      mdbContainer,
      mdbRow, 
      mdbCol,
      mdbIcon
    },
    methods: {
      encode(){},
        
        submitForm(){
fetch('/', {
  method: 'post',body: this.encode(
   {
      'form-name': 'contact',
      ...this.form
   }
  )
})
        }
    },
  }
</script>
