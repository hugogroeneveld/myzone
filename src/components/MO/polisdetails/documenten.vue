<template>
	<div class="block height">
		<div class="card">
			<div class="card-header">
				<h3><span>Documenten</span></h3>
			</div>
			<div class="card-block full-width">
				<ul class="link list">
					<li v-if="polispdfrequestid && polispdfrequestid != 'null'">						
						<a v-bind:href="ctx + '/polispdf.pdf?polisid=' + polispdfrequestid" target="_blank">
							<p class="icon clean"><span class="icon-file-pdf"></span> <span class="overlay"></span></p>
							Polisblad
						</a>
					</li>
					<!-- <li>
						<a href="#">
							<p class="icon clean"><span class="icon-file-pdf"></span> <span class="overlay"></span></p>
							Polisvoorwaarden
						</a>
					</li>
					<li>
						<a href="#">
							<p class="icon clean"><span class="icon-file-pdf"></span> <span class="overlay"></span></p>
							Verzekeringskaart
						</a>
					</li> -->
				</ul>
				<p v-if="polispdfrequestid == '' || polispdfrequestid == 'null'">Zodra er documenten die bij deze polis horen beschikbaar zijn, kunt u deze hier vinden.</p>
			</div>
		</div>
	</div>
</template>

<script>

// 
export default {
  name: 'polisdetails-documenten',
  props: {
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String, 
	  polispdfrequestid: String, 
	  voorwaardenurls: String
  }
}

</script>

