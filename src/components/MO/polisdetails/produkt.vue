<template>
	<div class="block height" v-if="produkttypenaam == 'auto' || produkttypenaam == 'caravan' || produkttypenaam == 'motor' || produkttypenaam == 'bromfiets' || produkttypenaam == 'aansprakelijkheid' || produkttypenaam == 'woonhuis' || produkttypenaam == 'inboedel' || produkttypenaam == 'camper'">
		<div class="card">
			<div class="card-header">
				<h3><span>Uw {{produkttypenaam}}</span></h3>
			</div>
			
			<!-- auto, caravan, motor, bromfiets -->
			<div class="card-block" v-if="produkttypenaam == 'auto' || produkttypenaam == 'caravan' || produkttypenaam == 'motor' || produkttypenaam =='bromfiets' || produkttypenaam == 'camper'">
				<ul class="detail list">
					<li>
						<p>Merk</p>
						<p>{{ merk }} {{ model }} {{ uitvoering }} {{ type }}</p>
					</li>
					<li>
						<p>Kenteken</p>
						<p>{{ kenteken }}</p>
					</li>
					<li>
						<p>Bouwjaar</p>
						<p>{{ bouwjaar }}</p>
					</li>					
					<li v-if="beveiliging">
						<p>Beveiliging</p>
						<p>{{ beveiliging }}</p>
					</li>
				</ul>
			</div>	
			
			<!-- aansprakelijkheid -->
			<div class="card-block" v-else-if="produkttypenaam == 'aansprakelijkheid'">
				<ul class="detail list">
					<li>
						<p>Gezinssamenstelling</p>
						<p>{{ gezinssamenstelling }}</p>
					</li>					
					<li>
						<p>Verzekerd bedrag</p>
						<p>&euro; {{ verzekerdbedrag }}</p>
					</li>
				</ul>
			</div>	
					
			<!-- woonhuis, inboedel en fallback -->	
			<div class="card-block" v-else>
				<ul class="detail list">
					<li>
						<p>Type woning</p>
						<p>{{ typewoning }}</p>
					</li>					
					<li>
						<p>Adres</p>
						<p>{{ verzekerdadresstraat }} {{ verzekerdadreshuisnummer }} {{ verzekerdadreshuisnummertoevoeging }}<br />
						{{ verzekerdadrespostcode }} {{ verzekerdadresplaats }}
						</p>
					</li>
				</ul>
			</div>	
		</div>
	</div>
</template>

<script>


export default {
  name: 'polisdetails-produkt',
  props: {
	  produkttypenaam: String, 
	  produktnaam: String, 
	  merk: String,
	  model: String, 
	  uitvoering: String, 
	  type: String, 
	  kenteken: String,
	  bouwjaar: String, 
	  beveiliging: String, 
	  gezinssamenstelling: String, 
	  verzekerdbedrag: String, 
	  verzekerdadresstraat: String, 
	  verzekerdadreshuisnummer: String, 
	  verzekerdadrespostcode: String, 
	  verzekerdadresplaats: String, 
	  verzekerdadreshuisnummertoevoeging: String, 
	  typewoning: String,
	  kortlopend: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
  }
}

</script>

