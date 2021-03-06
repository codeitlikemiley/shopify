/* IE 11 Compatible */
import Echo from 'laravel-echo'
import TurbolinksAdapter from 'vue-turbolinks'
import vmodal from 'vue-js-modal'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueEcho from 'vue-echo'
import VueLocalStorage from 'vue-localstorage'
// import VueModelAutoset from 'vue-model-autoset'
import VueDefaultValue from 'vue-default-value'
import Vue2Filters from 'vue2-filters'
import VueUp from 'vueup'
import VeeValidate from 'vee-validate'
/* Seed Initial Data */
import initialData from './mixins/initial-state'
import vueKanban from 'vue-kanban'
/* Human Readable Time */
import VueTimeago from 'vue-timeago'
/* Carousels */
import VueAgile from 'vue-agile'
/* Chart */
import Bars from 'vuebars'
/* Youtube */
import VueYouTubeEmbed from 'vue-youtube-embed'
/* Image Lazy Load */
import VueClazyLoad from 'vue-clazy-load'
/* Image Directive */
// import VueImg from 'v-img'

/*
 * Load Vue
 *
 */
if (window.Vue === undefined) {
    window.Vue = Vue
    window.Bus = new Vue()
}

/*
 * All Global Mixins
 *
 */
Vue.mixin(initialData)
/**
 * Form Helpers
 */
require('./forms/form-bootstrap')

/*
 * Add Local Storage Proto this.$state
 */

Vue.use(VueLocalStorage, {
    name: 'state'
})
/*
 * Form Validation
 */
const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'en',
    dictionary: null,
    strict: true,
    classes: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true,
    validity: true,
    aria: true
}
Vue.use(VeeValidate, config)

/*
 * Add Filters
 */
Vue.use(Vue2Filters)

/*
 * Load Wrapper for Turbolink
 */

Vue.use(TurbolinksAdapter)

/**
 * Load Vuetify Components
 */

Vue.use(Vuetify)

/**
 * Keep Data Model In Sync Automatically
 */

// Vue.use(VueModelAutoset)

/**
 * Add New Directive v-default-value we can use on input type with v-model attribute
 */

Vue.use(VueDefaultValue)

/**
 * Load Vue Modal
 */

Vue.use(vmodal)

/**
 * Load Vue Up
 */
Vue.use(VueUp)

/**
 * Load Kanban
 */
Vue.use(vueKanban)

/**
 * Load VueAgile
 */
Vue.use(VueAgile)

/**
 * Load Bars
 */
Vue.use(Bars)

/**
 * Load VueYouTubeEmbed
 */
Vue.use(VueYouTubeEmbed)

/**
 * Load VueClazyLoad
 */
Vue.use(VueClazyLoad)

/**
 * Load VueImg
 */
// Vue.use(VueImg)

/**
 * Load VueTimeago
 */
Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'en-US',
    locales: {
        // you will need json-loader in webpack 1
        'en-US': require('vue-timeago/locales/en-US.json')
    }
})

/**
 * Load Laravel Echo
 */

window.Echo = Echo

if (typeof io !== 'undefined') {
    let EchoInstance = new Echo({
        namespace: 'App\\Events',
        broadcaster: 'socket.io',
        host: `${window.location.hostname}:6001`
    })
    /* Install VueEcho: this.$echo */
    Vue.use(VueEcho, EchoInstance)
}

if (process.env.NODE_ENV === 'development') {
    require('vue-clicky')
}
