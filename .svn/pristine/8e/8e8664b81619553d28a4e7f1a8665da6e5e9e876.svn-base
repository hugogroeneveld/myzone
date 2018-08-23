<template>
  <body class="">
  <div class="">
    <banner
            websitename="aondirect"
            icon="s"
            :h1="fields.heading.value"
            :subtitle="fields.subtitle.value"
    ></banner>
    <div class="content">
      <div class="container-fluid">
        <div class="row">

          <button class="btn btn-warning produkt-shower btn-icon" data-href="#nieuweverzekering" type="button"><span class="icon clean">+</span>Nieuwe verzekering afsluiten</button>

          <div class="col-xs-12 schademelden">
            <p class="alert alert-success">
              Klik op de button "Schade melden" bij die verzekering waarop u schade wilt melden.
            </p>
          </div>
      </div>
    </div>

    <div class="container-fluid">
      <div id="nieuweverzekering"></div>
      <div class="row">
        <h2 class="col-xs-12">Nieuwe verzekering afsluiten?</h2>
        <h3 class="col-xs-12">Aondirect biedt u een compleet verzekeringspakket aan met scherpe premies en ruime dekkingen. Zorg dat u niet voor onverwachte kosten komt te staan!</h3>

        <button class="btn btn-warning produkt-shower btn-icon" data-href="#nieuweverzekering"><span class="icon clean">+</span>Nieuwe verzekering afsluiten</button>

        <div class="insurance-list">
            <produkt-component
                    produkttypenaam="auto"
                    openenbinnenmv="true"
                    produktnaam="auto"
                    produkturl="/auto"
                    csrftokenvalue="123"
                    csrftokenname="123"
                    ctx="/">
            </produkt-component>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </body>
</template>

<script>
import { Text, RichText } from '@sitecore-jss/sitecore-jss-vue';
import Banner from './MO/banner.vue'
import ProduktComponent from './MO/produkt-component.vue'

export default {
  name: 'MijnVerzekeringen',
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    ScText: Text,
    Banner,
    ProduktComponent,
    ScRichText: RichText,
  },
};
</script>
