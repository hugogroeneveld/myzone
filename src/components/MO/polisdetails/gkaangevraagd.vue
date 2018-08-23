<template>
<div>
	<div class="col-xs-12" v-if="groenekaart == 'A'">
		<div class="alert alert-success">
			Op {{ groenekaartdatum }} heeft u een nieuwe groene kaart aangevraagd. Binnen twee werkdagen sturen wij u de groene kaart toe (via de post).
		</div>
	</div>	
	<div class="col-xs-12" v-if="gkrequeststs == 'E'">
		<div class="alert alert-danger">
			Het aanvragen van de groene kaart is mislukt. Probeer het later nog eens.
		</div>
	</div>
</div>
</template>



<script>
export default {
  name: 'groenekaart',
  props: {
	  groenekaart: String,
	  groenekaartdatum: String,
	  gkrequeststs: String
  }
}
</script>

