<template>
	<div class="block">
		<div class="card">			
			<div class="card-header">
				<h3><span>Accountgegevens</span></h3>
			</div>
			<div class="card-block">
				<ul class="detail list">
					<li>
						<p>Gebruikersnaam</p>
						<p>{{ gebruikersnaam }}</p>
					</li>
					<li>
						<p>Wachtwoord</p>
						<p>****** <a :href="ctx + '/login-ingelogd/ww-wijzigen.html'" class="edit">wijzig <span class="icon clean">></span></a></p>
					</li>
					<li>
						<p>Relatienummer</p>
						<p>{{ relatienummer }}</p>
					</li>
				</ul>						
			</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'accountgegevens-component',
  props: {
	  gebruikersnaam: String, 
	  relatienummer: String, 
	  csrftokenname: String, 
	  csrftokenvalue: String, 
	  ctx: String
	  }
}

</script>

