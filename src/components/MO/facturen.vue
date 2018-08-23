<template>
<div class="table-view facturen" id="pagingtop">	
	<div class="card">	
		<table class="table">
		  <thead>
		    <tr>
		      <th>Status</th>
		      <th>Factuurdatum</th>
		      <th class="factuurdatum">Factuurnr.</th>
		      <th>Verzekering</th>
		      <th>Bedrag*</th>
		      <th></th>
		    </tr>
		  </thead>
		  <tbody v-for="factuur in chunkedArray[currentPage]" :key="factuur">
		    <tr class="main" :class="[{danger: factuur.openstaand === true}, {open: factuur.isOpen}]" @click="factuur.isOpen = !factuur.isOpen">
		      <td scope="row" class="status unpaid" v-if="factuur.openstaand"><span>-</span></td>
		      <td scope="row" class="status paid" v-if="factuur.openstaand == false"><span>v</span></td>
		      <td>{{ factuur.datum }}</td>
		      <td class="factuurnummer">{{ factuur.factuurnummer }}</td>
		      <td><a href="#">{{ factuur.produkt }}</a></td>
		      <td><div>&euro; {{ factuur.bedrag }}</div></td>
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
		  </tbody>
		</table>
		
		<div id="error"></div>
		
		<nav class="paging" v-if="totalPages > 1">
		  <ul class="pagination">
		    <li class="page-item">
		    	<button class="previous btn btn-secondary" @click="currentPage -= 1" v-if="currentPage > 0" data-href="#pagingtop" type="button">Vorige</button>
		    </li>
		    <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
		    	<button class="btn btn-secondary" @click="currentPage = pageNumber - 1" :class="{active: pageNumber === currentPage + 1}" data-href="#pagingtop" type="button">{{ pageNumber }}</button>
		    </li>
		    <li class="page-item">
		    	<button class="next btn btn-secondary" @click="currentPage += 1" v-if="currentPage < totalPages - 1" data-href="#pagingtop" type="button">Volgende</button>
		    </li>
		  </ul>
		</nav>
		<p class="aantalfacturen">
			<span v-if="totaalFacturen === 1"><strong>{{ totaalFacturen }}</strong> factuur gevonden</span>
			<span v-else><strong>{{ totaalFacturen }}</strong> facturen gevonden</span>
		</p>
	</div>
	<p class="italic">* Automatische incasso vindt elke maand rond de 25e plaats.</p>
</div>
</template>

<script>

export default {
  name: 'facturen-component',
  props: {
	  ctx: String
  },
  data: function () {
    return {    	
    	currentPage: 0,
        itemsPerPage: "",
        totalPages: "",
        chunkedArray: [],
    	pageToShow: "",
    	activated: "",
    	totaalFacturen: ""
    }
  },
  mounted: function () {		
	var self = this;
	var facturenservice = this.facturenserviceurl;
	$.ajax({
		url: this.ctx + "/services/facturen/getall",
		type: 'GET',
		success: function(facturen) {
			facturen.forEach(function (d) {
      		  return self.$set(d, 'isOpen', false);
      		});
						
			var currentPage = 0;
			var list = facturen;
			
			let i, j, chunkedArray = [], chunk = 12;
		      for (i=0, j=0; i < facturen.length; i += chunk, j++) {
		        chunkedArray[j] = facturen.slice(i,i+chunk);
		      }
		      self.totalPages = chunkedArray.length;
		      self.itemsPerPage = chunk;
		      self.pageToShow = chunkedArray[currentPage];
		      self.chunkedArray = chunkedArray;
		      self.totaalFacturen = facturen.length;
		      
		      return chunkedArray;
		},
		error: function() {
			$('#error').html('<p>Sorry, er zijn geen facturen gevonden</p>');
		}
	});	
  }
}

</script>

