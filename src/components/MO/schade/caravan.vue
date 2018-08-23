<template>
	<div class="visual-process">
		<h3>Caravanverzekering</h3>
		<p>Als u schade meldt en een bedrag uitgekeerd krijgt, kan dit gevolgen hebben voor uw bonus malus en terugval in schadevrije jaren. Soms is het daarom voordeliger voor u om een schade zelf te betalen zodat uw premie niet stijgt.</p>
		<div class="grid-container">
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-schademelden clean"></p>
				</div>
				<h4>Schade melden</h4>
				<p>U heeft schade die wilt u bij ons melden.</p>
				<a class="btn btn-primary" href="#">Schade melden</a>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-archive clean"></p>
				</div>
				<h4>In behandeling</h4>
				<p>Wij nemen uw schademelding binnen 48 uur in behandeling.</p>
				<a href="#" data-toggle="modal" data-target="#behandelingmodal" >Lees meer</a>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-shield clean"></p>
				</div>
				<h4>Beoordeling</h4>
				<p>Uw schade wordt beoordeelt door een schadeexpert, deze binnen 48 uur contact met u op.</p>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-user clean"></p>
				</div>
				<h4>Wacht op uw reactie</h4>
				<p>Voor de afhandeling van uw schade hebben wij aanvullende gegevens van u nodig. Hiervan ontvangt u van ons bericht per e-mail en in uw berichtenbox.</p>
			</div>
			
			<div class="visual-item">
				<div class="hexagon-thick">
					<p class="icon icon-check clean"></p>
				</div>
				<h4>Afgehandeld</h4>
				<p>Wij hebben uw dossier gesloten of doorgestuurd naar  de behandelend verzekeraar.</p>
			</div>
		</div>


	<!-- Modal -->
	<div>
			<div class="modal fade" id="behandelingmodal" tabindex="-1" role="dialog" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">In behandeling</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">x</span>
			        </button>
			      </div>
			      <div class="modal-body txt">
			        <p>Kiest u voor een van de aangesloten herstellers, dan kunt u direct een afspraak maken voor herstel.<br/>
                    Voordelen bij het repareren bij een aangesloten herstellers zijn:
                    <ul>
                    <li>Garantie op de uitgevoerde werkzaamheden;</li>
                    <li>Haal- en brengservice van de caravan;</li>
                    <li>Vermindering van het eigen risico met EUR 150,-;</li>
                    <li>Rechtstreekse afwikkeling van de schade (inclusief betaling) met het herstelbedrijf.</li>
                    </ul>
                    Wanneer u de schade niet bij een aangesloten hersteller laat maken, en de schade meer dan EUR 750,00 is, schakelen wij een expert in. Is de schade lager dan EUR 750,00 dan verzoeken wij u de offerte/herstelnota aan ons toe te zenden. </p>
                    <h4>Tegenpartij betrokken?</h4>
                    <p>Blijkt een andere partij verantwoordelijk/aansprakelijk te zijn voor het ontstaan van de schade aan uw voertuig? Wij proberen uw schade inclusief uw eventuele persoonlijke schade te verhalen. Als wij daarin slagen, keren wij het vooraf op de schadeuitkering ingehouden eigen risico alsnog aan u uit.</p>
			      </div>
			      <div class="modal-footer">
					<button type="button" class="btn btn-primary btn-modal-close">OK</button>	
			      </div>
			    </div>
			  </div>
			</div>
			</div>
		<!-- end Modal -->



</div> 
</template>

<script> 


export default {
  name: 'schadeproces-component',
  props: {	  
	  ctx: String
  },
  data: function () {
    return {    	
     }
  } 
  
}

</script>

