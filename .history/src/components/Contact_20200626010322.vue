<template>

<mdb-container >
    <mdb-row>
      <mdb-col class="col-lg-6 col-md-8 col-sm-12 mx-auto ">
        
        
          <form @submit.prevent="submitForm" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="w-100 py-5">
            <p style="display: none" class="hidden">
    <label>Dont Fell This Out If you Are Human: <input name="bot-field" /></label>
  </p>
    <mdb-card >
					
					<mdb-card-body class="text-center" cascade>
						<mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commod</mdb-card-text>
					</mdb-card-body>
				</mdb-card>
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
  import { mdbInput, mdbIcon, mdbBtn, mdbTextarea, mdbContainer, mdbRow, mdbCol,mdbCard } from 'mdbvue';
  export default {
    name: "Contact",

    components: {
      mdbInput,
      mdbBtn,
      mdbTextarea,
      mdbContainer,
      mdbRow, 
      mdbCol,
      mdbIcon,
      mdbCard,
			// mdbCardImage,
			// mdbCardHeader,
			// mdbCardBody,
			// mdbCardTitle,
			// mdbCardText,
			// mdbCardFooter,
			// mdbCardUp,
			// mdbCardAvatar,
			// mdbCardGroup,
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
