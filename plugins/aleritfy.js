import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import Vue from 'vue'
import Alertifyjs from 'vue2-alertifyjs'

const opts = {
  notifier: {
    delay: 5,
    position: 'top-right',
    closeButton: false,
  },
}

Vue.use(Alertifyjs, opts)
