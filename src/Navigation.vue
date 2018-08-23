<template>
    <div >
        <header>
            <div class="container">
                <a href="/mijnverzekeringen/mijnoverzicht.html" class="navbar-brand">
                    <img src="/static/images/logo/aondirect/logo.png"
                         alt="Keer terug naar home" title="Mijn Verzekeringen"></a>
            </div>
        </header>
        <nav class="navbar navbar-toggleable-sm hidden-md-up navbar-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item overzicht">
                            <router-link to="/mijnoverzicht" class="nav-link">{{$t('Mijn overzicht')}}
                            </router-link>
                        </li>
                        <li class="nav-item mijnverzekeringen">
                            <router-link to="/mijnverzekeringen" class="nav-link">{{$t('Mijn verzekeringen')}}
                            </router-link>
                        </li>
                        <li class="nav-item mijnfacturen">
                            <router-link to="/mijnfacturen" class="nav-link">{{$t('Mijn facturen')}}
                            </router-link>
                        </li>
                        <li class="nav-item mijngegevens">
                            <router-link to="/mijngegevens" class="nav-link">{{$t('Mijn mijngegevens')}}
                            </router-link>
                        </li>
                        <li class="nav-item mijnschades">
                            <router-link to="/mijnschades" class="nav-link">{{$t('Mijn schades')}}
                            </router-link>
                        </li>
                        <li class="nav-item serviceencontact">
                            <router-link to="/serviceencontact" class="nav-link">{{$t('Service en contact')}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--<button class="btn btn-secondary align-baseline" type="button" v-on:click="toggleContext">{{contextButtonText}}</button> -->
    </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        contextButtonText: '',
      }
    },
    created () {
      // $t is a computed property, so it's not defined when initializing the `data` object.
      // Therefore, use the `created` hook to set the data.
      this.contextButtonText = this.$t('show-context-data')
    },
    // `toggleContextView` is provided from AppRoot
    inject: {
      toggleContextView: {
        type: Function,
      },
    },
    methods: {
      toggleContext () {
        this.toggleContextView()
        this.contextButtonText =
          this.contextButtonText === this.$t('hide-context-data')
            ? this.$t('show-context-data')
            : this.$t('hide-context-data')
      },
    },
  }
</script>

<style>
    .navbar-nav .nav-link {
        font-size: .812rem;
        padding-left: 1.25rem !important;
        padding-right: 1.25rem !important;
    }
    .router-link-exact-active {
        color: #02A !important;
    }
</style>
