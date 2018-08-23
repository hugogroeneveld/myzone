<template>
	<div class="block">
		<div class="card">			
			<div class="card-header">
				<h3><span>Betaalgegevens</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>Rekeningnummer
							<a class="modal-button" role="button" data-toggle="modal" data-target="#rekening-modal">j</a>
						</p>
						<p>{{ rekeningnummer }}</p>
					</li>
					<li>
						<p>Betaalwijze</p>
						<p>{{ betaalwijze }}</p>
					</li>
				</ul>						
			</div>
			<!-- <div class="card-footer">
				<button href="" class="btn btn-secondary" disabled><span>P</span>Wijzig betaalgegevens</button>							
			</div> -->
		</div>
		<!-- Modal -->
			<div class="modal fade" id="rekening-modal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">Rekeningnummer</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        Een IBAN rekeningnummer bestaat uit 18 tekens. Uw IBAN rekeningnummer vindt u op uw bankpas en in uw online bankieren-omgeving. Ook kunt u via de website <a href='https://omnummertool.overopiban.nl/' target='_blank'>overopiban.nl/</a> voor een bankrekeningnummer het IBAN rekeningnummer opvragen.
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
			      </div>
			    </div>
			  </div>
			</div><!-- end Modal -->
	</div>
</template>

<script>


export default {
  name: 'accountgegevens-component',
  props: {
	  rekeningnummer: String, 
	  betaalwijze: String, 
	  betaaltermijn: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
  }
}

</script>

