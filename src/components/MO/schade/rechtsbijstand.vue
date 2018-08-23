<template>
<div class="visual-process">
    <h3>Rechtsbijstandsverzekering</h3>
		<div class="grid-container">           
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-schademelden clean"></p>
				</div>
				<h4>Schade melden</h4>
				<p>U heeft schade die wilt u bij ons melden.</p>
				<a class="btn btn-primary" href="#">Schade melden</a>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-archive clean"></p>
				</div>
				<h4>In behandeling</h4>
				<p>Wij nemen uw schademelding binnen 48 uur in behandeling en dragen het dossier over aan de rechtsbijstandsverzekeraar.</p>
				<a href="#" data-toggle="modal" data-target="#behandelingmodal" >Lees meer</a>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-check clean"></p>
				</div>
				<h4>Afgehandeld</h4>
				<p>Wij hebben uw dossier gesloten. De behandeling van het dossier verloopt rechtstreeks tussen u en uw rechtsbijstandsverzekeraar.</p>
			</div>

		</div>


	<!-- Modal in behandeling -->
			<div class="modal fade" id="behandelingmodal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">In behandeling</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        <p>Binnen 2 werkdagen na ontvangst van de melding laat de rechtsbijstandsverzekeraar weten of er dekking is. Als er dekking is neemt een jurist uiterlijk binnen 5 werkdagen inhoudelijk contact met u op.</p>
			        	
			      </div>
			      <div class="modal-footer">
					<button type="button" class="btn btn-primary btn-modal-close">OK</button>	
			      </div>
			    </div>
			  </div>
			</div>
		<!-- end Modal -->






</div> 
</template>

<script> 


export default {
  name: 'schadeproces-component',
  props: {	  
	  ctx: String
  },
  data: function () {
    return {    	
     }
  } 
  
}

</script>

