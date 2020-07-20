<template>
    <div style="height: 100vh">
  <section class="deep-blue-gradient">
    <div class=" rgba-deep-purple-light " style="height: 100vh">
      <div class="container py-5">
        <div class="row align-items-center py-5">
  <div class="col-lg-6 col-md-8 col-sm-12 py-5">
     <!-- <form action="https://smartforms.dev/submit/5f153af38720a934045a1a74" method="POST">
  <input placeholder="name" type="text" name="name">
  <input placeholder="email" type="email" name="email">
  <input placeholder="tel" type="text" name="tel">
  <button type="submit">Send</button>
  </form> -->


      </div>

          <div class="col-lg-6">
            <h3 class="font-weight-bold white-text pb-2">Contact Me</h3>
            <p class="lead white-text pt-2 mb-5">Need a Dev get in touch send me post info. call or email. <span class="black-text">maccoskuni@gmail.com | 068 043 2221</span></p>
            <form form action="https://smartforms.dev/submit/5f153af38720a934045a1a74" method="POST" target="_blank">
              <div class="input-group mb-3">
                <input type="text" class="form-control white-text rgba-white-light border-0 z-depth-0" placeholder="Enter Email Address" aria-label="Enter Email Address"
                  aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn btn-md btn-mdb-color m-0 px-3 py-2 z-depth-0" type="button" id="button-addon2">Submit</button>
                </div>
              </div>
            </form>

          </div>

          
          <div class="col-lg-4 offset-lg-2 wow fadeInUpBig" data-wow-delay=".2s">
              
 <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg"  class="img-fluid py-4" alt="smaple image">
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>

  export default {
    name: "Contact",

    components: {

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
