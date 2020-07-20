<template>
    <div style="height: 100vh">
  <section class="deep-blue-gradient">
    <div class=" rgba-deep-purple-light " style="height: 100vh">
      <div class="container py-5">
        <div class="row align-items-center">
  <div class="col-lg-6 col-md-8 col-sm-12 ">
        <form srm class="mb-2" action="https://www.formingo.co/submit/011f8ab2-1d54-4f31-982b-5779831c9c1f" method="POST">
          <h3 class="font-weight-bold pb-2">Contact Me</h3>
          <p class="lead pt-2 mb-5">Need a Dev get in touch send me post info. call or email. <span class="black-text">maccoskuni@gmail.com | 068 043 2221</span></p>
          <div class="input-group mb-4 pb-3">
            
            <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address"
              aria-describedby="button-addon2">
           
          </div>
        <textarea type="text" id="defaultFormMessageModalEx" placeholder="Write message" class="md-textarea form-control mb-3"></textarea>
        
            <div class="input-group-append mb-3">
              <button class="submit btn btn-md white-text btn-block waves-effect" type="submit" id="button-addon2">Submit</button>
            </div>

          <ul class="list-unstyled d-flex justify-content-center mb-0 text-info">
            <li>
              <a class="mx-3" href="https://www.facebook.com/gskuni/" target="blank" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
            </li>
            <li>
              <a class="mx-3" href="https://twitter.com/TOO_KLIIN" target="blank" role="button"><i class="fab fa-lg fa-twitter"></i></a>
            </li>
            <li>
              <a class="mx-3" href="https://www.instagram.com/maco_skuni/" target="blank" role="button"><i class="fab fa-lg fa-instagram"></i></a>
            </li>
            <li>
              <a class="mx-3" href="https://www.linkedin.com/in/makhosandile-patric-skuni-3a7b77132" target="blank" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
            </li>
            <li>
              <a class="mx-3"  href="https://www.github.com/Tookliin" target="blank" role="button" ><i class="fab fa-lg fa-github"></i></a>
            </li>
          </ul>
    
        </form>
      </div>

          <!-- <div class="col-lg-6">
            <h3 class="font-weight-bold white-text pb-2">Contact Me</h3>
            <p class="lead white-text pt-2 mb-5">Need a Dev get in touch send me post info. call or email. <span class="black-text">maccoskuni@gmail.com | 068 043 2221</span></p>
            <form class="col-md-9 input-grey pl-0" action="" method="post" target="_blank">
              <div class="input-group mb-3">
                <input type="text" class="form-control white-text rgba-white-light border-0 z-depth-0" placeholder="Enter Email Address" aria-label="Enter Email Address"
                  aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn btn-md btn-mdb-color m-0 px-3 py-2 z-depth-0" type="button" id="button-addon2">Submit</button>
                </div>
              </div>
            </form>

          </div> -->

          
          <div class="col-lg-4 offset-lg-2 wow fadeInUpBig" data-wow-delay=".2s">
              <img src="../assets/images/maco.jpg" alt="Sample image" class="img-fluid " height="30px">
 <!-- <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image"> -->
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
