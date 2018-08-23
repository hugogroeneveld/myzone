<template>
<div class="card schadeprocess">
	<div class="card-header">
		<h3>
			<span>			
				Hoe verloopt het schadeproces?
			</span>
		</h3>				
	</div>		
	<!-- insurances String: {{ insurances }}<br /><br />
	InsuranceList json: {{ insuranceList2 }} -->
	<div class="card-block">
		<!-- menu -->
		<div class="process-menu messages">
			<div :class="[{'mobile-hide': tabs.length > 3}, {'hide': tabs.length === 1}, {'desktop-hide': tabs.length > 8}]">
				<ul class="nav nav-tabs flex-container">
					<li v-for="tab in tabs" 
						:key="tab.name"
						@click="currentTab = tab.name"
						class="nav-item">
						<a v-bind:class="['nav-link', { active: currentTab === tab.name }]">{{ tab.name }}</a>
					</li>					
				</ul>
			</div>
		</div>		

		<div :class="[{'desktop-hide': tabs.length < 9}, {'mobile-hide': tabs.length < 4}, {'hide': tabs.length === 1}]">
			<span>Selecteer een verzekering:</span>
			<select class="form-control" id="tab_selector" v-model="selected" @change="selectedTab">
				<option disabled value="">Selecteer een verzekering</option>
				<option v-for="tab in tabs" 
					:key="tab.name"
					:value="tab.name">
						{{ tab.name }}
					</option>
			</select>
		</div>
		<br />

		<!-- content -->		
		<keep-alive>
			<component
			:is = "currentTabComponent"
			:tab = currentTab
			:schademeldurl = tabs.schademeldurl
			></component>
		</keep-alive>

		<!-- TODO: show component based on name Array is insurances, name is insurances.name
			If an insurance has no name we'll have to display generic schade info 
				-> we don't have any content for this.		
		
			-> it is critical to find out asap what backend can return. What do we base the schadeprocess on. produktname?
			issue is that auto can also be personenauto etc., and we'll only have 1 schade-process.vue for auto. 
			We need something that'll work for ALL insurances and depend less on the name of em.

			The name needs to correspond with the name of the vue component. Need to create a generic one

		-->
		
		
	</div>  
</div> 
</template>

<script> 

import SchadeprocesAuto from './auto.vue'
import SchadeprocesCaravan from './caravan.vue'
import SchadeprocesInboedel from './inboedel.vue'
import SchadeprocesReis from './reis.vue'
import SchadeprocesOngevallen from './ongevallen.vue'
import SchadeprocesAansprakelijkheid from './aansprakelijkheid.vue'
import SchadeprocesRechtsbijstand from './rechtsbijstand.vue'
import SchadeprocesWoonhuis from './woonhuis.vue'


const Schades = [
  {
	name: "auto",
	produkt: "auto",
    schademeldurl: "schademelden.html#auto"
  },
  {
	name: "aansprakelijkheid",
	produkt: "aansprakelijkheid",
    schademeldurl: "schademelden.html#aansprakelijkheid"
  },
  {
	name: "caravan",
	produkt: "caravan",
    schademeldurl: "schademelden.html#caravan"
  },
  {
	name: "reis",
	produkt: "reis",
    schademeldurl: "schademelden.html#reis"
  },
  {
	name: "inboedel",
	produkt: "inboedel",
    schademeldurl: "schademelden.html#inboedel"
  },
  {
	name: "ongevallen",
	produkt: "ongevallen",
    schademeldurl: "schademelden.html#ongeavllen"
  },
  {
	name: "woonhuis",
	produkt: "woonhuis",
    schademeldurl: "schademelden.html#woonhuis"
  },
  {
	name: "rechtsbijstand",
	produkt: "rechtsbijstand",
    schademeldurl: "schademelden.html#rechtsbijstand"
  }
]

export default {
  name: 'schadeproces-component',
  components: {
	  'schadeproces-auto': SchadeprocesAuto,
	  'schadeproces-reis': SchadeprocesReis, 
	  'schadeproces-caravan': SchadeprocesCaravan,
	  'schadeproces-inboedel': SchadeprocesInboedel,
	  'schadeproces-ongevallen': SchadeprocesOngevallen,
	  'schadeproces-aansprakelijkheid': SchadeprocesAansprakelijkheid,
	  'schadeproces-rechtsbijstand': SchadeprocesRechtsbijstand,
	  'schadeproces-woonhuis' : SchadeprocesWoonhuis
  },
  props: {	  
	ctx: String
  },
  data: function () {
    return {    	
		currentTab: 'auto',
		tabs: Schades,
		selected: {} // this one is needed to make the selectbox work its magic		
		// 'Auto', 'Aansprakelijkheid', 'Reis', 'Inboedel', 'Caravan', 'Ongevallen', 'Rechtsbijstand', 'Woonhuis'
     }
  },
  computed: {
    currentTabComponent: function () {		
	  return 'schadeproces-' + this.currentTab.toLowerCase()
		}
	},
	methods: {
		selectedTab () {
			var self = this;
			self.currentTab = this.selected;
			return self.currentTab
		}
	}
}

</script>

