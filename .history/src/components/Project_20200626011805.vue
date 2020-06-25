<template>
  <div class="projects">
    <div class="row">
    
  <mdb-container>
    <mdb-row>
      <mdb-col sm="6">
        <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <mdb-icon icon="chart-pie" /> Marketing</h5>
              <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam,
                voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum
                dignissimos.
                Odit sed qui, dolorum!.</p>
              <mdb-btn color="pink"><mdb-icon icon="clone left" /> View project</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="6">
        <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
          <div class="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 class="orange-text">
                <mdb-icon icon="desktop" /> Software</h5>
              <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam,
                voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum
                dignissimos.
                Odit sed qui, dolorum!.</p>
              <mdb-btn color="deep-orange"><mdb-icon icon="clone left" /> View project</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>

    </div>
  </div>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol, mdbCard,  mdbIcon } from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
	
			mdbIcon
		}
	}
</script>