<template>
	<div class="block col-xs-12">
		<div class="card insurance wide" v-bind:id="produkttypenaam">
				<div class="card-header">
					<p class="icon icon-fifty"> <span v-bind:class="'icon-' + produkttypenaam"></span></p>
					<h3>{{ produktnaam }}</h3>
					<p class="category">Mijn polisnummer: {{ polisnummer }}</p>
					<span class="tag" v-if="inbehandeling == 'J'">in behandeling</span>
				</div>
				<div class="card-block">
					<ul>
						<li v-if="omschrijving">
							<label>Omschrijving</label>
							<span>{{ omschrijving }}</span>
						</li>
						<li v-if="soortpolis != 'VSP'">
							<label>Ter informatie</label>
							<span>De details van deze verzekering zijn alleen beschikbaar bij {{ maatschappijnaam }}.</span>
						</li>
						<li v-if="kenteken">
							<label>Kenteken</label>
							<span>{{ kenteken }}</span>
						</li>
						<li v-if="straat">
							<label>Locatie</label>
							<span>{{ straat }} te {{ plaats }}</span>
						</li>
						<li v-if="looptijd > 0"> 
							<label>Looptijd</label>
							<span>{{ looptijd }} dagen</span>
						</li>
					</ul>
				</div>
				<div class="card-footer" v-if="soortpolis == 'VSP'">
					<form v-bind:action="ctx + '/wijzigpolis.html?polisid=' + poliswijzigid" method="post">						
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<input type="hidden" name="poliswijzigid" v-bind:value="poliswijzigid" /> 
						<button type="submit" class="btn btn-primary btn-arrow">Wijzigen</button>
					</form>
					<form v-bind:action="ctx + schademeldenurl" method="post">						
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<input type="hidden" name="polisurl" v-bind:value="polisurl" /> 
						<button type="submit" class="btn btn-primary btn-arrow">Schade melden</button>
					</form>		
					<form v-bind:action="ctx + polisurl" method="post">						
						<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
						<input type="hidden" name="polisurl" v-bind:value="polisurl" /> 
						<button type="submit" class="btn btn-primary btn-arrow">Naar mijn polis</button>
					</form>		
				</div>
			</div>
		</div>
</template>

<script>

export default {
  name: 'polis-component',
  props: {
	  produkttypenaam: String, 
	  produktnaam: String, 
	  inbehandeling: String,
	  omschrijving: String, 
	  kenteken: String, 
	  looptijd: String, 
	  plaats: String,
	  straat: String, 
	  polisurl: String,
	  schademeldenurl: String, 
	  poliswijzigid: String, 
	  polisnummer: String, 
	  soortpolis: String,
	  maatschappijnaam: String,
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String  
  }
}

</script>

