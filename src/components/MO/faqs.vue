<template>
<div class="card faq-block">
	<div class="card-header">
		<h3>
			<span>
			<!-- <span class="icon-question"></span> --> 
			<span class="hexagon-border">?</span>
			Stel uw vraag
			</span>
		</h3>
			<div class="form-group">
				<input class="form-control" type="text" placeholder="Typ hier uw vraag of zoekterm" v-model="showFaq">
				<button class="clear" @click="clearInput" v-if="showFaq.length>0">x</button>
			</div>		
	</div>		
	<div class="card-block" v-if="showFaq">	
		<div v-if="showNoAnswers">Helaas, we hebben geen antwoord op uw vraag. Typ een ander trefwoord of neem contact met ons op.</div>
		<ul class="faq">
			<li v-for="faq in totalFaqs" :key="faq">
				<p class="question" v-bind:class={open:faq.isOpen} @click="faq.isOpen = !faq.isOpen"><span class="category">{{faq.categorie}}</span><span v-html="faq.vraag" class="line"></span></p>
				<p class="answer" v-html="faq.antwoord"><span v-html="faq.antwoord"></span></p> 
			</li> 
		</ul> 
	</div>  
</div> 
</template>

<script> 

var timeoutId = 0;

export default {
  name: 'faq-component',
  props: {
	  faqwebsiteid: String, 
	  faqserviceurl: String, 
	  ctx: String
  },
  data: function () {
    return {
    	showFaq: "",
    	showNoAnswers: false,
    	totalFaqs: this.data
     }
  },
  watch: {	  
	 'showFaq': function(val) {
		 var self = this;
	 	 if(val.length < 3) {
	 	 	return;
	 	 }
		 clearTimeout(timeoutId);
		 timeoutId = setTimeout(function() {
		 	$.ajax ({
	             url: self.faqserviceurl,
	             type: 'GET',
	             data: {id: self.faqwebsiteid, q: val, scope:1},
	             success: function (data) {
	            	data.forEach(function (d) {
	            		  return self.$set(d, 'isOpen', false);
	            	});
	            	self.showNoAnswers = (data.length == 0);   	
	                self.totalFaqs = data;
		       	 	 if(val.length < 4) {
		       			 self.showNoAnswers = false;
		       		 }
	             },
	             error: function () {
	             	self.showNoAnswers = true;
	             }			 
			 })
			 },300);
	  }
  },
  methods: {
	'toggle': function() {
		this.isOpen = !this.isOpen	
	},
	'clearInput': function() {
		this.showFaq = "";
		this.totalFaqs = 0;					
	}
  }
  
}

</script>

