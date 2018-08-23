<template>
<div class="modal fade" id="session-expire" aria-hidden="true"
	data-keyboard="false" data-backdrop="static" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">U wordt automatisch uitgelogd</h4>
			</div>

			<div class="modal-body">
				U bent bijna 30 minuten niet actief geweest binnen Mijn
				Verzekeringen. Voor de veiligheid van uw gegevens loggen wij u over
				<span id="counter">60</span> seconden automatisch uit.
			</div>

			<div class="modal-footer">
				<button id="btnExtendSession" type="button" class="btn btn-primary"
					data-dismiss="modal">Ingelogd blijven</button>
				<button id="btnLogoutAutologoutPrompt" class="btn btn-primary">Uitloggen</button>
			</div>
		</div>
	</div>
</div>
</template>

<script> 

export default {
  name: 'session-component',
  props: {
	  	ctx: String,
		csrftokenname: String, 
		csrftokenvalue: String
  },
  data: function () {
	    return {
	    	// 28min = 1680000ms backend session = 30min
	    	sessionTime: 1680000,
	    	intervalIdentifier: 0
	    }
  },
  mounted: function() {
	  setTimeout(this.startCountdown, this.sessionTime);
	  this.initButtons();
  },
  methods: {
	  
	  initButtons() {
		  	var self = this;
			$("#btnLogoutAutologoutPrompt").on("click", function(){
				$("#logout").click();
			});
			
			// stay logged and start this same session function again 
			$("#btnExtendSession").on("click", function(){
				// reset counter
				clearInterval(self.intervalIdentifier);
				$("#counter").text(60);
				// wake up session
				var url = self.ctx + "/login/preservesession.html";
				$.get(url);
				 // start new sessionTime
				setTimeout(self.startCountdown, self.sessionTime);
			});		
	  },
	  startCountdown() {
		 var self = this;
		  
		// show modal when session is about to expire 		
		$('#session-expire').modal();
				
		// add counter 
	  	var counter = 60;
		this.intervalIdentifier = setInterval(function() {
			counter--;
			$("#counter").text(counter);

			if(counter == 0) {
				clearInterval(self.intervalIdentifier);
				// log out user when counter reaches 0
				$("#autologout").val("true");
				$("#logout").click();
			}			
		}, 1000);		
	  }    
  }
}

</script>

