<template>
  <body class="">
  <div class="">
    <banner
            websitename="aondirect"
            icon="s"
            :h1="fields.heading.value"
            :subtitle="fields.subtitle.value"
    ></banner>
    <div class="quicklinks">
      <div class="container-fluid">
        <div class="card col-xs-12">
          <ul>
            <li><h3>Direct naar: </h3></li>
            <li>
              <router-link to="/mijnverzekeringen"  class="btn btn-primary btn-arrow">{{$t('Schade melden')}}</router-link>
            </li>
            <li><a class="btn btn-primary btn-arrow" href="${ctx}/mijngegevenswijzigen.html">Mijn gegevens wijzigen</a></li>
            <li><a class="btn btn-primary btn-arrow nowrap" href="${ctx}/mijnverzekeringen.html#nieuweverzekering">Nieuwe verzekering afsluiten</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="block">
            <div class="card">
              <div class="card-header solo">
                <!-- <div class="icon icon-seven5">
                    <span class="icon-euro"></span>
                </div> -->
                <h3>
                  <a href="${ctx}/mijnfacturen.html">Mijn facturen
                      <span class="newmessages">{{onbetaaldeFacturen}}</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <bericht-ongelezen-knop
                  ctx="/">
          </bericht-ongelezen-knop>

        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="block block-service-links">
            <div class="card">
              <div class="card-header">
                <h3><a href="${ctx}/serviceencontact.html">Service &amp; Contact</a></h3>
              </div>
              <div class="card-block full-width">
                <ul class="link list">
                  <li><a href="${ctx}/serviceencontact.html"><p class="icon clean"><span class="icon-question"></span></p>Ik heb een vraag</a></li>
                  <li><a href="${ctx}/serviceencontact.html#ikwilcontact"><p class="icon clean"><span class="icon-bubble"></span></p>Ik wil contact</a></li>
                </ul>
              </div>
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
import BerichtOngelezenKnop from './MO/berichten/bericht-ongelezenknop.vue'
import AuthenticatedService from './MO/services/AuthenticatedService'
import MijnOverzichtService from './MO/services/MijnOverzichtService'

export default {
  name: 'MijnOverzicht',
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  data : function () {
    return  {
      authenticatedService : new AuthenticatedService("/contextroot"),
      mijnOverzichtService: new MijnOverzichtService("/mijnverzekeringen"),
      onbetaaldeFacturen: "",
      mijnOverzichtData : {}
    }
  },
  components: {
    ScText: Text,
    Banner,
    BerichtOngelezenKnop,
    ScRichText: RichText,
  },
  mounted: function() {
    this.mijnOverzichtService.get().then(resp => {
      this.mijnOverzichtData = resp
      this.onbetaaldeFacturen = this.mijnOverzichtData.onbetaaldeFacturen
    })
  },
  provide() {
    return {
      authenticatedService: this.authenticatedService
    };
  },
};
</script>
