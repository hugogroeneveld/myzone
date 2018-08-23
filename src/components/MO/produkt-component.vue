<template>
	<div class="block col-sm-6 col-lg-4 col-xs-12">
		<div v-if="openenbinnenmv == 'true'">
			<form v-bind:action="ctx + '/verzekeringaanvragen.html'" method="post">
				<button type="submit" class="btn-invisible">
					<div class="card insurance">
						<div class="card-block">
							<h3>{{produktnaam}}</h3>
							<div class="center">									
								<span class="icon icon-seven5">
									<span v-bind:class="'icon-' + produkttypenaam"></span>
								</span>
							</div>									
							<div class="center">
								<input type="hidden" v-bind:name="csrftokenname" v-bind:value="csrftokenvalue" />
								<input type="hidden" name="anvaonlineIframeUrl" v-bind:value="produkturl" /> 
								<button type="submit" class="btn btn-primary btn-lg">Aanvragen</button>
							</div>
						</div>
					</div>
				</button>
			</form>
		</div>
		<!--  -->
		<div v-if="openenbinnenmv == 'false'">			
				<a :href="produkturl" class="btn-invisible" target="_blank">
					<div class="card insurance">
						<div class="card-block">
							<h3>{{produktnaam}}</h3>
							<div class="center">									
								<span class="icon icon-seven5">
									<span v-bind:class="'icon-' + produkttypenaam"></span>
								</span>
							</div>									
							<div class="center">
								<a :href="produkturl" class="btn btn-primary btn-lg" target="_blank">Aanvragen</a>								
							</div>
						</div>
					</div>
				</a>
			
		</div>
	</div>
</template>

<script>


export default {
  name: 'produkt-component',
  props: {
	  produkttypenaam: String, 
	  produktnaam: String, 
	  produkturl: String, 
	  openenbinnenmv: String,
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
  }
}

</script>

