<template>

<mdb-container class="py-3">
    <mdb-row>
      <mdb-col class="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <form @submit.prevent="submitForm" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="w-100">
            <p style="display: none" class="hidden">
    <label>Dont Fell This Out If you Are Human: <input name="bot-field" /></label>
  </p>
    <p class="h4 text-center mb-4">Write to us</p>
    <div class="grey-text">
      <mdb-input v-model="form.name" name="name" label="name" icon="user" group type="text" validate error="wrong" success="right"/>
      <mdb-input v-model="form.email"  name="email"  label="email" icon="envelope" group type="email" validate error="wrong" success="right"/>
      <mdb-input v-model="form.subject"  name="subject"  label="subject" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea v-model="form.message"  name="message"  :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
   
      <!-- <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn> -->
      <mdb-btn gradient="primary" rounded class="py-2 ml-3" size="lg"><mdb-icon far icon="paper-plane" class="mr-3"/>Submit</mdb-btn>
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
    name: "Contact",

    components: {
      mdbInput,
      mdbBtn,
      mdbTextarea,
      mdbContainer,
      mdbRow, 
      mdbCol,
      mdbIcon
    },
        data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      }
    },
    methods: {
      encode(data){
        return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
      },
        
        submitForm(){
fetch('/', {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: this.encode(
  {
     'form-name': 'contact',
      ...this.form
  }
  
  )
}).then(()=> console.warn('Succesfully  sent'))
.catch(e => console.warn(e))
        }
    },
  }
</script>
