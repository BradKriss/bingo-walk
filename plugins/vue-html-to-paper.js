/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueNotifications from 'vue-html-to-paper'

const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
  styles: ['https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.1/css/bulma.css']
}

Vue.use(VueNotifications, options)
