<template>
	<div class="block">
		<div class="card">
			<div class="card-header solo">
			<!-- <div class="icon icon-seven5">
					<span class="icon-inbox"></span>
				</div> -->
				<h3>
					<a :href="ctx + '/serviceencontact.html#scrollToMessages'">Mijn berichten
						<span class="newmessages" v-if="unread.ongelezen > 0">{{ unread.ongelezen }}</span>
						<span class="newmessages loader">
							<div class="loaderframe">
								<div class="preloader loading">
									<span class="slice"></span>
									<span class="slice"></span>
									<span class="slice"></span>
									<span class="slice"></span>
									<span class="slice"></span>
									<span class="slice"></span>
								</div>
							</div>
						</span>
					</a>
				</h3>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'berichtongelezenknop-component',
	props: {
		ctx: String
		},
	data: function () {
		return {
			unread: ""
		}
	},
  	mounted: function () {
		var self = this;
      	self.unread = 8;
	}
}

</script>

