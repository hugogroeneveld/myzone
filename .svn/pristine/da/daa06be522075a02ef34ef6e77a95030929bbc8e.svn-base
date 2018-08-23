<template>
<div v-bind:class="{ unread: !bericht.gelezen }">
	<div class="card-header" @click="setUpdate(bericht.id,bericht.type,'gelezen'); bericht.isOpen = !bericht.isOpen" :class="{open: bericht.isOpen}">
		<a href="#" class="preventdefault"> <span class="date">{{ bericht.datumText }}</span>
			<p>{{ bericht.onderwerp }}</p>
		</a>
	</div>

	<div>
		<div class="card-block">

			<p v-html="bericht.inhoud" v-if="bericht.verzonden === false" class="restylecontent"></p>
			<p v-else class="restylecontent">{{ bericht.inhoud }}</p>

			<ul class="buttonbar" :class="{archive:bericht.archief}">                           
				<li v-if="bericht.verzonden === false && bericht.type != 'MELDING' && bericht.iframeReageerOpBerichtUrl != '' "><!-- don't show when type is MELDING, ANVA_FORMULIER en in Verzondenbox -->
                	<button class="btn btn-link btn-reply preventScrollToTop" @click="openReageerOpBericht" :disabled="bericht.userRole=='B' ">
                    	<span class="icon clean">r </span> Reageren
                    </button>
                </li>
			
				<li v-if="bericht.archief === true && bericht.verzonden === false">
					<button class="btn btn-link" @click="setUpdate(bericht.id,bericht.type,'uitarchief');" :disabled="bericht.userRole=='B' ">
						<span class="icon clean">o </span> Plaats terug in Inbox
					</button>
				</li>
				<li v-if="bericht.archief === false && bericht.verzonden === false">
					<button class="btn btn-link" @click="setUpdate(bericht.id,bericht.type,'archief');" :disabled="bericht.userRole=='B' ">
						<span class="icon clean">a </span> Archiveren
					</button>
				</li>
			</ul>
			<div class="reply" v-if="bericht.replyOpen === true">					
				<loader-component v-if="replyIframeLoaded == false" ></loader-component>
				<iframe :id="reageeriframeid" @load="handleOnLoad()" name="reageeriframe" class="white-bg formframe" src=""></iframe>	
             </div> 
			
		</div>
	</div>	
</div>
</template>

<script> 

export default {
  name: 'bericht-component',
  props: {
	  bericht: Object,
	  index: Number, 
	  csrftokenvalue: String,
	  ctx: String	   
  },
  data: function () {
	  return {
	  	replyIframeLoaded : false,
	  	reageeriframeid : "",
	  	avonlineReageerUrl : ""
	  }
  },
  mounted : function () {	
	  this.reageeriframeid = "reageeriframe-" + this.index;
  },
  methods: {
		'openReageerOpBericht': function() {	
			  this.replyIframeLoaded = false;
			  var selector = "#" + this.reageeriframeid;
			  vm.setIframeUrl(selector, this.bericht.iframeReageerOpBerichtUrl);
			  this.bericht.replyOpen = !this.bericht.replyOpen;
			  this.$parent.replyClicked = true;
		},
		'handleOnLoad': function(frame) {		
			var selector = "#" + this.reageeriframeid;
			var srcVal = $(selector).attr("src");
			if(srcVal != "") {
				vm.resizeIframe($(selector));
				this.replyIframeLoaded = true;
			}
		},  	  
		'setGelezen': function() {			
			this.bericht.gelezen = true;
			this.$parent.updateGelezen();
		  },
		  'setArchief': function() {
			  this.bericht.archief = true; 
			  this.$parent.resetView();
		  },
		  'setUitArchief': function() {
			  this.bericht.archief = false;
			  this.$parent.resetView();
		  },
		'setUpdate': function(id,type,status) {
			var self = this;
			var url = this.ctx + "/services/berichten/set" + status;
			$.post(url, { id:this.bericht.id, type:this.bericht.type, _csrf:this.csrftokenvalue }).done(function(data) {
				if("gelezen" === status){
					self.setGelezen();
				} else if("archief" === status){
					self.setArchief();
				} else if("uitarchief" === status){
					self.setUitArchief();
				} 
			}).fail(function(xhr, status, error) {
			    //console.log( "Status error" + error);
			});
		}
  }
}

</script>

