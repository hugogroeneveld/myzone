<template>
    <div class="card messages" id="mijnberichten">
        <div class="card-header">
            <h3>
                <a href="#berichten" aria-controls="berichten" data-toggle="collapse"
                   class="collapsed" data-target="#berichten">Mijn berichten <span
                        class="newmessages" v-if="unread > 0">{{ unread }}</span> <span
                        class="newmessages loader">
					<div class="loaderframe">
						<div class="preloader loading">
							<span class="slice"></span> <span class="slice"></span> <span
                                class="slice"></span> <span class="slice"></span> <span
                                class="slice"></span> <span class="slice"></span>
						</div>
					</div>
			</span>
                </a>
            </h3>
        </div>
        <div class="collapse" id="berichten">
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link"
                                            v-on:click="showInboxfunc"
                                            :class="{active: showInbox}"><span>o</span>Inbox
                        (<span>{{ unread }}</span>)</a></li>
                    <li class="nav-item"><a class="nav-link"
                                            v-on:click="updateSent"
                                            :class="{active: showOutbox}"><span>J</span>Verzonden</a>
                    </li>
                    <li class="nav-item"><a class="nav-link"
                                            v-on:click="showArchivefunc" :class="{active: showArchived}"><span>a</span>Archief</a>
                    </li>
                </ul>
                <div class="card-block">
                    <h3>{{ pageTitle }}</h3>

                    <!-- LOADER -->
                    <loader-component v-if="replyIframeLoaded != true"></loader-component>
                    <!-- /LOADER -->

                    <!-- no messages found -->
                    <div id="error"></div>
                    <div v-if="totalPages === 0" class="nomessages">
                        <div v-if="showInbox === true">Er zijn geen berichten in uw
                            Inbox gevonden.
                        </div>
                        <div v-if="showOutbox === true">Er zijn geen verzonden
                            berichten gevonden.
                        </div>
                        <div v-if="showArchived === true">Er zijn geen berichten in
                            uw archief gevonden.
                        </div>
                    </div>
                    <!--end no messages found -->

                    <ul class="box">
                        <li v-for="(bericht, index) in pages[currentPage]" :key="index">
                            <bericht-component
                                    :bericht="bericht" :index="index" :ctx="ctx"
                                    :csrftokenvalue="csrftokenvalue">
                            </bericht-component>
                        </li>
                    </ul>

                    <nav class="paging" v-if="totalPages > 1">
                        <ul class="pagination">
                            <li class="page-item">
                                <button class="previous btn btn-secondary"
                                        @click="currentPage -= 1" v-if="currentPage > 0"
                                        data-href="#mijnberichten" type="button">Vorige
                                </button>
                            </li>
                            <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
                                <button class="btn btn-secondary"
                                        @click="currentPage = pageNumber - 1"
                                        :class="{active: pageNumber === currentPage + 1}"
                                        data-href="#mijnberichten" type="button">{{ pageNumber
                                    }}
                                </button>
                            </li>
                            <li class="page-item">
                                <button class="next btn btn-secondary" @click="currentPage += 1"
                                        v-if="currentPage < totalPages - 1" data-href="#mijnberichten"
                                        type="button">Volgende
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Bericht from './bericht.vue'

  export default {
    name: 'berichten-component',
    components: {
      'bericht-component': Bericht
    },
    props: {
      ctx: String,
      csrftokenname: String,
      csrftokenvalue: String
    },
    updated: function () {
      this.$nextTick(function () {
        this.restyleContent()
      })
    },
    data: function () {
      return {
        pageTitle: 'Inbox',
        currentPage: 0,
        messages: [],
        itemsPerPage: '',
        totalPages: '',
        pageToShow: '',
        pages: [],
        unread: 0,
        showInbox: true,
        showArchived: false,
        showOutbox: false,
        replyIframeLoaded: false,
        replyClicked: false
        //itemsFiltered: 0 -> can be used if we want to display the total # of messages.
      }
    },
    mounted: function () {
      this.resetMessages()
    },
    methods: {
      resetMessages: function () {
        var self = this
        // get all messages
        $.ajax({
          url: this.ctx + '/services/berichten/getall',
          type: 'GET',
          success: function (data) {
            data.forEach(function (d) {
              return (
                self.$set(d, 'isOpen', false),
                  self.$set(d, 'replyOpen', false)
              )
            })
            // all messages to Vue
            self.messages = data
            // create inbox list and inbox-pagination / remove loader when data loaded
            self.resetView()
            // mark messages as read when opened
            self.updateGelezen()
            $('.loaderframe').css('display', 'none')
            self.replyClicked = false
            //hide loadertje unread messages when all messages call is complete
            $('.newmessages.loader').css('display', 'none')
          },
          error: function () {
            $('#error').html('<p>Sorry, er zijn geen berichten gevonden</p>')
            $('.loaderframe').css('display', 'none')
          }
        })
      },
      resetView: function () {
        if (this.showInbox) {
          this.showInboxfunc()
        } else if (this.showArchived) {
          this.showArchivefunc()
        } else if (this.showOutbox) {
          this.showSentfunc()
        }
      },
      updateGelezen: function () {
        this.unread = this.messages.filter(function (obj) {
          return obj.gelezen === false && obj.verwijderd === false && obj.archief === false && obj.verzonden === false
        }).length
      },
      updateSent: function () {
        this.showInbox = false
        this.showArchived = false
        this.showOutbox = true
        if (this.replyClicked == true) {
          this.resetMessages()
        }
        else {
          this.showSentfunc()
        }
      },
      setBerichten: function (data) {
        var currentPage = 0
        let i, j, pages = [], itemsPerPage = 25
        for (i = 0, j = 0; i < data.length; i += itemsPerPage, j++) {
          pages[j] = data.slice(i, i + itemsPerPage)
        }
        this.totalPages = pages.length
        this.itemsPerPage = itemsPerPage
        this.pageToShow = pages[currentPage]
        this.pages = pages
      },
      showInboxfunc: function () {
        this.pageTitle = 'Inbox'
        this.showInbox = true
        this.showArchived = false
        this.showOutbox = false
        var itemsFiltered = this.messages.filter(function (obj) {
          return obj.verzonden === false && obj.archief === false && obj.verwijderd === false
        })
        this.setBerichten(itemsFiltered)
        this.currentPage = 0
      },
      showArchivefunc: function () {
        this.pageTitle = 'Archief'
        this.showInbox = false
        this.showArchived = true
        this.showOutbox = false
        var itemsFiltered = this.messages.filter(function (obj) {
          return obj.archief === true && obj.verwijderd === false
        })
        this.setBerichten(itemsFiltered)
        this.currentPage = 0
      },
      showSentfunc: function () {
        //this.resetMessages();
        this.pageTitle = 'Verzonden'
        this.showInbox = false
        this.showArchived = false
        this.showOutbox = true
        var itemsFiltered = this.messages.filter(function (obj) {
          return obj.verzonden === true && obj.verwijderd === false
        })
        //this.itemsFiltered = itemsFiltered.length;
        this.setBerichten(itemsFiltered)
        this.currentPage = 0
      },
      restyleContent: function () {
        // Anvaformulieren worden opgemaakt als tabel met een vaste lengte.
        // Dit zorgt ervoor dat deze berichten niet responsive zijn.
        // Deze functie vermindert de malaise
        $('.restylecontent .anvaform').each(function (obj, val) {
          var tempText = ''
          $('tr', $(this)).each(function (index, value) {
            $('td', $(this)).each(function (index, value) {
              var tempVal = $(value).html()
              if (tempVal.match(/<b>/)) {
                tempVal = tempVal.replace(/&nbsp;$/, '')
              }
              tempText += tempVal
            })
            tempText += '</br>'
          })

          tempText = tempText.replace(/^(<br>|<\/br>)+/, '')
          $(this).html(tempText)
          $(this).removeClass('anvaform')
        })
        $('.restylecontent').find('b').css('display', 'block')
      }
    }
  }

</script>

