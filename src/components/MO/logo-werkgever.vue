<template>
	<div class="block employer" v-if="websiteid == '105'">
		<div class="card">
			<div class="card-header solo">
				<img :src="'/BinairServlet?id=' + koepellogo" alt="logo van uw collectiviteit" v-if="koepellogo" />
				<img :src="ctx + '/static/images/logo/viamijnwerk/logo-vmw.png'" alt="logo Via Mijn Werk" v-else />
				
				<a role="button" class="btn btn-primary btn-arrow" :href="ctx + '/uitdienst.html'" v-if="showbutton == 'j'">Uit dienst melden</a>
			</div>
		</div>
	</div>
</template>

<script> 

export default {
	name: 'logowerkgever-component',
	props: {
		ctx: String,
		koepellogo: String,
		koepelid: String,
		websiteid: String,
		showbutton: String
	}
}

</script>

