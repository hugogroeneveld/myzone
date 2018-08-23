<template>
	<div class="block height">
		<div class="card">
			<div class="card-header">
				<h3><span>Direct...</span></h3>
			</div>
			<div class="card-block">
				<ul class="button list">					

					<form v-bind:action="ctx + '/schademelden.html?polisid=' + poliswijzigid" method="post">						
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<input type="hidden" name="poliswijzigid" v-bind:value="poliswijzigid" /> 
						<li><button type="submit" class="btn btn-primary btn-arrow">Schade melden</button></li>
					</form>
					
					<form v-bind:action="ctx + '/wijzigpolis.html?polisid=' + poliswijzigid" method="post">						
					<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
					<input type="hidden" name="poliswijzigid" v-bind:value="poliswijzigid" /> 
					<li><button type="submit" class="btn btn-primary btn-arrow">Wijziging doorgeven</button></li>
					</form>	
					
					<form v-bind:action="ctx + '/wijzigpolis.html?polisid=' + poliswijzigid" method="post">						
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<input type="hidden" name="poliswijzigid" v-bind:value="poliswijzigid" /> 
						<li><button type="submit" class="btn btn-primary btn-arrow">Opzeggen</button></li>
					</form>	
					
					<li v-if="groenekaart =='J'"><a data-toggle="modal" data-target="#groenekaartmodal" class="btn btn-primary btn-arrow">Groene kaart aanvragen</a></li>
					<li v-if="groenekaart =='A'"><p class="alert alert-success"><span class="icon clean"><span class="icon-check"></span></span> &nbsp;Groene kaart aangevraagd</p></li>
								 
					<li><a v-bind:href="ctx + '/serviceencontact.html'" class="btn btn-primary btn-arrow">Hulp nodig?</a></li>
				</ul>
			</div>
		</div>
		
		<!-- Modal -->
			<div class="modal fade" id="groenekaartmodal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">Groene kaart aanvragen</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        <p>Wanneer u recent een nieuwe verzekering heeft afgesloten, ontvangt u binnenkort automatisch de groene kaart. </p>
			        	        
			        <form v-bind:action="ctx + '/aanvragen-groenekaart'" method="post">						
						<input type="hidden" name="polisid" v-bind:value="poliswijzigid" />
						<input type="hidden" name="groenekaartId" v-bind:value="groenekaartid" /> 
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<span>Geldt deze situatie niet voor u?</span>		
						<button type="submit" class="button-as-link">Ga door met aanvragen</button>.
					</form>
			      </div>
			      <div class="modal-footer">
					<button type="button" class="btn btn-primary btn-modal-close">Annuleren</button>	
			      </div>
			    </div>
			  </div>
			</div>
		<!-- end Modal -->
	</div>
</template>

<script>

// 
export default {
  name: 'polisdetails-directlinks',
  props: {
	  groenekaart: String, 
	  groenekaartid: String,
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String, 
	  poliswijzigid: String
  }
}

</script>