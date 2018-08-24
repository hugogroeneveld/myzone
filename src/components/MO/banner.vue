<template>
	<div class="banner">
			{{baseUrl}}
		<div class="img">
			<img :src="baseUrl + 'static/images/header/' + websitename + '/header.jpg'" />
		</div>
		<div class="heading">
			<div class="container-fluid" v-if="h1">
				<div class="icon">{{ icon }}</div>
				<h1>{{ h1 }}</h1>
				<p v-if="logindata == 'true'">
					<span v-if="userrole == 'B'">Ingelogd als {{ username }} </span>
					<span v-if="userrole != 'B'">Welkom {{ username }} </span><br />
					<span v-if="lastlogin"><span>Vorig bezoek: {{ lastlogin }}</span><span class="hour"> uur</span></span>
				</p>
				<p v-if="subtitle">{{ subtitle }}</p>
			</div>
			<!-- above: all banners except polisdetail, below, polisdetails only -->
			<div class="container-fluid" v-if="produkttypenaam">
				<div v-bind:class="'icon icon-' + produkttypenaam"></div>
				<h1 v-if="produktnaam == 'Aansprakelijkheid'">{{ produktnaam }}sverzekering</h1>
				<h1 v-else>{{ produktnaam }}verzekering</h1>
				<p>Mijn polisnummer: {{ polisnummer }} </p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'banner-component',
  props: {
	    websitename: String,
		icon: String,
		h1: String,
		userrole: String,
		username: String,
		lastlogin: String,
		logindata: String,
	  	subtitle: String,
	  	produkttypenaam: String,
		produktnaam: String,
		polisnummer: String,
	  	ctx: String
  }, data: function(){
      return {
          baseUrl : window.document.getElementById('baseUrl').value
	  }
	}
}
</script>

