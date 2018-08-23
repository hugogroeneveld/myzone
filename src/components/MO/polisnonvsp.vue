<template>
	<li>
		<a data-toggle="modal" :data-target="'#' + polisnummer">
		<p class="icon icon-sm"><span :class="'icon-' + produkttypenaam"></span></p>
		<p>{{ produktnaam }}</p>
		<span>Polisnummer: {{ polisnummer }} </span>
		</a>		
		
		<!-- Modal alleen voor VGA oude polissen -->
		<div class="modal fade" :id="polisnummer" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">{{ produktnaam }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						    <span aria-hidden="true">x</span>
						</button>
					</div>
					<div class="modal-body">
						<p>De details van deze verzekering zijn alleen beschikbaar bij {{ maatschappijnaam }}.</p>						        	
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary btn-modal-close">Ok</button>	
					</div>
				</div>
			</div>
		</div>
	<!--end Modal -->
	</li>
</template>

<script>

export default {
  name: 'polisnonvsp-component',
  props: {
	  produkttypenaam: String, 
	  produktnaam: String, 
	  polisnummer: String, 
	  soortpolis: String,
	  maatschappijnaam: String,
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String  
  }
}

</script>

