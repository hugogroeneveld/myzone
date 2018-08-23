<template>
	<div class="block height">
		<div class="card">
			<div class="card-header">
				<h3><span>Verzekering</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>Polisnummer</p>
						<p>{{ polisnummer }}</p>
					</li>
					<li>
						<p>Ingangsdatum</p>
						<p>{{ ingangsdatum }}</p>
					</li>
					<li>
						<p>Laatste wijzigingsdatum</p>						
						<p>{{ laatstewijziging }}</p>
					</li>
					<li v-if="kortlopend == 'J'">
						<p>Einddatum</p>
						<p>{{ einddatum }}</p>
					</li>					
					<li v-else>
						<p>Verlengingsdatum</p>
						<p>{{ einddatum }}</p>
					</li>
					<li>
						<p>Looptijd 
							<a class="modal-button" role="button" data-toggle="modal" data-target="#looptijd-modal">j</a>
						</p>
						<p>{{ looptijd }}</p>
					</li>
					<li v-if="produkttypenaam == 'auto' || produkttypenaam == 'motor' || produkttypenaam =='bromfiets'  || produkttypenaam =='camper'">
						<p>Schadevrije jaren</p>
						<p>{{ zuiverschadevrijejaren }} jaar</p>
					</li>
				</ul>									
			</div>
			
			<!-- Modal -->
			<div class="modal fade" id="looptijd-modal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">Looptijd</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        Uw contract wordt jaarlijks automatisch verlengd.
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
			      </div>
			    </div>
			  </div>
			</div><!-- end Modal -->
		</div>
	</div>
</template>

<script>


export default {
  name: 'polisdetails-verzekering',
  props: {
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String, 
	  produkttypenaam: String, 
	  produktnaam: String, 
	  polisnummer: String, 
	  ingangsdatum: String, 
	  laatstewijziging: String, 
	  einddatum: String, 
	  looptijd: String,
	  kortlopend: String,
	  polisnummer: String,
	  zuiverschadevrijejaren: String 
  }
}

</script>

