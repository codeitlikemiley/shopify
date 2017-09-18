/* Boostrap Our Application */
import './bootstrap'
/* Vue Data */
import base from './mixins/base'
/* Vue Routing */
import router from './routes'
/* Persistent State */
import state from './mixins/state'

/* Listen to Echo Channels */
import privateChannel from './mixins/private-channel'
import globalChannel from './mixins/global-channel'
import groupChannel from './mixins/presence-channel'
/* Global Event Bus Listener */
import listener from './mixins/listener'
/* Our Main Vue Instance */
import MainVue from './App.vue'

/* Vue Instance with TurboLinks */
document.addEventListener('turbolinks:load', () => {
    var element = document.getElementById('app')
    if (element != null) {
        var app = new Vue({
            mixins: [base, state, globalChannel, privateChannel, groupChannel, listener],
            router,
            el: element,
            template: '<MainVue/>',
            components: { MainVue }
        })
    }
})
