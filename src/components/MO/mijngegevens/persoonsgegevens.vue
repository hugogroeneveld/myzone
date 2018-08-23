<template>
	<div class="block">
		<div class="card">			
			<div class="card-header">
				<h3><span>Persoonsgegevens</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>Naam</p>
						<p>{{ titulatuur }} {{ voorletters }} {{ tussenvoegsel }} {{ achternaam }}</p>
					</li>
					<li>
						<p>Woonadres</p>
						<p>{{ straat }} {{ huisnummer }} {{ huisnummertoevoeging }}<br />{{ postcode }} {{ plaats }}</p>
					</li>
					<li>
						<p>Geboortedatum</p>
						<p>{{ geboortedatum }}</p>
					</li>
					<li v-if="burgerlijkestaat">
						<p>Burgerlijke staat</p>
						<p>{{ burgerlijkestaat }}</p>
					</li>
				</ul>						
			</div>
			<!-- <div class="card-footer">
				<button href="#" class="btn btn-secondary" disabled><span>P</span>Wijzig persoonsgegevens</button>							
			</div> -->
		</div>
	</div>
</template>

<script>


export default {
  name: 'accountgegevens-component',
  props: {
	  titulatuur: String, 
	  voorletters: String, 
	  tussenvoegsel: String, 
	  achternaam: String,
	  straat: String, 
	  huisnummer: String,
	  huisnummertoevoeging: String,
	  postcode: String,
	  plaats: String,
	  geboortedatum: String, 
	  burgerlijkestaat: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
	  } 
}

</script>

