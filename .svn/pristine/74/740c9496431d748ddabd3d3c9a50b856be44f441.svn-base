<template>
	<div class="block height">
		<div class="card">
			<div class="card-header">
				<h3><span>Premie</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>Premie <span class="lowercase">{{ betaaltermijn }}</span> 
							<a class="modal-button" role="button" data-toggle="modal" data-target="#premie-modal">j</a>
						</p>
						
						<p v-if="premie!=''">&euro; {{ premie }}</p>
						<p v-if="premie==''">Momenteel niet beschikbaar</p>
					</li>
					<li>
						<p>Eigen risico</p>
						<p>Zie de polisvoorwaarden</p>
					</li>
					<li v-if="noclaimkorting">
						<p>No-claimkorting</p>
						<p>{{ noclaimkorting }}</p>
					</li>
					<li v-if="bonusmalus">
						<p>Bonus/malus-trede</p>
						<p>{{ bonusmalus }}</p>
					</li>
				</ul>
			</div>
			
			<!-- Modal -->
			<div class="modal fade" id="premie-modal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">Premie</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        Dit is de premie per termijn inclusief kosten en assurantiebelasting.
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'polisdetails-premie',
  props: {
	  premie: String, 
	  verplichteigenrisico: String, 
	  eigenrisicobijhagelschade: String,
	  noclaimkorting: String,
	  bonusmalus: String, 
	  voorwaardenurl: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String, 
	  betaaltermijn: String
  }
}

</script>

