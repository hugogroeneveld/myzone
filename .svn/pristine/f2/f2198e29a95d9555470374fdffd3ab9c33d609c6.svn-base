<template>
	<div class="block">
		<div class="card">			
			<div class="card-header">
				<h3><span>Contactgegevens</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>E-mailadres 
							<a class="modal-button" role="button" data-toggle="modal" data-target="#email-modal">j</a>
						</p>
						<p>{{ emailadres }} <a :href="ctx + '/login-ingelogd/emailadres-wijzigen.html'" class="edit">wijzig <span class="icon clean">></span></a></p>
					</li>
					<li v-if="mobiel">
						<p>Telefoonnummer</p>
						<p>{{ mobiel }}</p>
					</li>
					<li v-if="vast">
						<p>Telefoonnummer</p>
						<p>{{ vast }}</p> 
					</li>
				</ul>						
			</div>
			<!-- <div class="card-footer">
				<button href="" class="btn btn-secondary" disabled><span>P</span>Wijzig contactgegevens</button>							
			</div> -->
		</div>
		<!-- Modal -->
			<div class="modal fade" id="email-modal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">E-mailadres</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        Let op! Uw e-mailadres is ook uw gebruikersnaam. Past u uw e-mailadres aan, dan is dit ook uw nieuwe gebruikersnaam wanneer u inlogt.
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
	  emailadres: String, 
	  mobiel: String, 
	  vast: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
  }
}

</script>

