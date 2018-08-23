<template>
	<div class="block height">
		<div class="card">
			<div class="card-header">
				<h3><span>Dekking</span></h3>
			</div>
			<div class="card-block">
				<ul class="listing list">
					<li v-for="dekking in dekkingArray" :key="dekking">{{ dekking }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'polisdetails-dekking',
  props: {
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String, 
	  dekkingen: String
  },
  data: function () {
    return { 
    	dekkingArray: JSON.parse(this.dekkingen)
    }
  }
}

</script>

