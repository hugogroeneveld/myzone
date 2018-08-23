<template>

<div class="table-view schades" id="pagingtop">
	<div class="card">
		<div class="card-header">
			<h3><span>Mijn schades</span></h3>
		</div>
		<table class="table">
		  <thead>
		    <tr>
		      <th>Datum</th>
		      <th>Schadenr.</th>
		      <th>Verzekering</th>
		      <th>Soort schade</th>
		      <th>Status</th>
		    </tr>
		  </thead>
		  <!-- <tbody v-for="schade in chunkedArray[currentPage]">
		    <tr class="main" :class="[{danger: factuur.openstaand === true}, {open: factuur.isOpen}]" @click="factuur.isOpen = !factuur.isOpen">
		      <td scope="row" class="status unpaid" v-if="factuur.openstaand"><span>-</span></td>
		      <td scope="row" class="status paid" v-if="factuur.openstaand == false"><span>v</span></td>
		      <td>{{ factuur.datum }}</td>
		      <td class="factuurnummer">{{ schade.schadenummer }}</td>
		      <td><a href="#">{{ schade.produkt }}</a></td>
		      <td><div>&euro; {{ schade.bedrag }}</div></td>
		      <td><span class="icon clean">+</span></td>
		    </tr>
		    <tr class="details">
		    	<td colspan="6">
		    		<div class="clearfix">
				    	<div class="col-xs-12 col-mo-6 col-lg-3">
				    		<label>Status</label> 
				    		<p>
				    			<span v-if="factuur.openstaand"><span>Openstaand</span></span>
				      			<span v-if="factuur.openstaand == false"><span>Betaald</span></span>
				      		</p> 
				      	</div>
				      	<div class="col-xs-12 col-mo-6 col-lg-3">
				      		<label>Betaalwijze</label> <p>{{ factuur.betaalwijze }}</p>
				      	</div>
				    	<div class="factuurnummer col-xs-12 col-mo-6">
				      		<label>Factuurnr</label> <p>{{ factuur.factuurnummer }}</p>
				      	</div>
				      	<div class="col-xs-12 col-mo-6 col-lg-3">
			      			<label>Periode</label> <p>{{factuur.periode}}</p>
			      		</div>
			      		<div class="col-xs-12 col-mo-6 col-lg-3">
			      			<label></label><p><span class="icon clean">p</span> <a v-bind:href="ctx + '/' + factuur.pdflink" target="_blank">Download factuur</a> </p>
			      		</div>
			      	</div>
		    	</td>
		    </tr>
		  </tbody> -->
			<tbody>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>5555555</td>
					<td><a href="#">Aansprakelijkheid</a></td>
					<td>Vaas omgestoten</td>
					<td><span class="tag tag-danger">Wacht op uw reactie</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag-danger">Wacht op uw reactie</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Vaas omgestoten</p>
							</div>
						</div>
					</td>
				</tr>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>0000000</td>
					<td><a href="#">Reis</a></td>
					<td>Bagage kwijt</td>
					<td><span class="tag tag-success">In behandeling</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag-success">In behandeling</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Bagage kwijt</p>
							</div>
						</div>
					</td>
				</tr>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>8888888</td>
					<td><a href="#">Auto</a></td>
					<td>Aanrijding buitenland</td>
					<td><span class="tag tag-success">In behandeling</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag-success">In behandeling</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Aanrijding buitenland</p>
							</div>
						</div>
					</td>
				</tr>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>0000000</td>
					<td><a href="#">Reis</a></td>
					<td>Beroving</td>
					<td><span class="tag tag-success">Beoordeling</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag-success">Beoordeling</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Beroving</p>
							</div>
						</div>
					</td>
				</tr>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>0000000</td>
					<td><a href="#">Woonhuis</a></td>
					<td>Brand</td>
					<td><span class="tag">Afgehandeld</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag">Afgehandeld</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Brand</p>
							</div>
						</div>
					</td>
				</tr>
				<tr class="main" v-on:click='isOpen = !isOpen'>
					<td>12-08-2018</td>
					<td>0000000</td>
					<td><a href="#">Reis</a></td>
					<td>Bagage kwijt</td>
					<td><span class="tag tag-success">Ontvangen</span></td>
				</tr>
				<tr class="details" :class="{open: isOpen}">
					<td colspan="3">
						<div>
							<span class="icon clean" v-on:click='isOpen = !isOpen'>0</span>
							<p class="tag tag-success">Ontvangen</p>
							<div v-show="isOpen">
								<label>Soort schade</label>
								<p>Bagage kwijt</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		
		<div id="error"></div>
		
		<!--<nav class="paging" v-if="totalPages > 1">
		  <ul class="pagination">
		    <li class="page-item">
		    	<button class="previous btn btn-secondary" @click="currentPage -= 1" v-if="currentPage > 0" data-href="#pagingtop" type="button">Vorige</button>
		    </li>
		    <li class="page-item" v-for="pageNumber in totalPages">
		    	<button class="btn btn-secondary" @click="currentPage = pageNumber - 1" :class="{active: pageNumber === currentPage + 1}" data-href="#pagingtop" type="button">{{ pageNumber }}</button>
		    </li>
		    <li class="page-item">
		    	<button class="next btn btn-secondary" @click="currentPage += 1" v-if="currentPage < totalPages - 1" data-href="#pagingtop"type="button">Volgende</button>
		    </li>
		  </ul>
		</nav>-->
	</div>
</div>
</template>

<script>

export default {
  name: 'mijnschades-component',
  props: {
	  ctx: String
  },
  data: function () {
    return {    	
			isOpen: false
    	// currentPage: 0,
      //   itemsPerPage: "",
      //   totalPages: "",
      //   chunkedArray: [],
    	// pageToShow: "",
    	// activated: "",
    	// totaalFacturen: ""
    }
	}
	// ,
  // mounted: function () {		
	// var self = this;
	// var facturenservice = this.facturenserviceurl;
	// $.ajax({
	// 	url: this.ctx + "/services/facturen/getall",
	// 	type: 'GET',
	// 	success: function(facturen) {
	// 		facturen.forEach(function (d) {
  //     		  return self.$set(d, 'isOpen', false);
  //     		});
						
	// 		var currentPage = 0;
	// 		var list = facturen;
			
	// 		let i, j, chunkedArray = [], chunk = 12;
	// 	      for (i=0, j=0; i < facturen.length; i += chunk, j++) {
	// 	        chunkedArray[j] = facturen.slice(i,i+chunk);
	// 	      }
	// 	      self.totalPages = chunkedArray.length;
	// 	      self.itemsPerPage = chunk;
	// 	      self.pageToShow = chunkedArray[currentPage];
	// 	      self.chunkedArray = chunkedArray;
	// 	      self.totaalFacturen = facturen.length;
		      
	// 	      return chunkedArray;
	// 	},
	// 	error: function() {
	// 		$('#error').html('<p>U heeft nog geen schades gemeld</p>');
	// 	}
	// });	
  //}
}

</script>

