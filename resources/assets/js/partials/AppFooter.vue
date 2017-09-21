<template>
<v-container fluid class="pa-0 ma-0" :class="{ 'grey': true, 'darken-3': true }">
  <v-layout row wrap>
    <v-flex xs12 sm12 md3 lg3 xl3>
      <div>
        <v-subheader inset class="headline primary--text">Featured Products</v-subheader>
        <v-list dense>
        <v-link title="Grape juice with Garcinia Cambogia" :href="'/products/grape-juice-with-garcinia-cambodia'"></v-link>
        <v-link title="Organic Pure Barley Powered Drink" :href="'/products/organic-pure-barley-powered-drink'"></v-link>
        <v-link title="Coffee Mix with Glutathione" :href="'/products/coffee-mix-with-gluthathione'"></v-link>
        <v-link title="Choco Barley Powered Drink" :href="'/products/choco-barley-powdered-drink'"></v-link>
      </v-list>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md3 lg3 xl3>
      <div>
        <v-subheader inset class="headline primary--text">Featured Food Carts</v-subheader>
        <v-list dense>
        <v-link title="Mang Siomai" :href="'/foodcart-franchise/mang-siomai'"></v-link>
        <v-link title="Hongkong Fried Noodles" :href="'/foodcart-franchise/hongkong-fried-noodles'"></v-link>
        <v-link title="Dumpling King" :href="'/foodcart-franchise/dumpling-king'"></v-link>
        <v-link title="Chinky Pao" :href="'/foodcart-franchise/chinky-pao'"></v-link>
      </v-list>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md3 lg3 xl3>
      <div>
        <v-subheader inset class="headline primary--text">Compliance</v-subheader>
        <v-list dense>
        <v-link title="Cookie Policy" :href="'/cookie-policy'"></v-link>
        <v-link title="Privacy Policy" :href="'/privacy-policy'"></v-link>
        <v-link title="Refund Policy" :href="'/refund-policy'"></v-link>
        <v-link title="Anti-Spam Policy" :href="'/anti-spam-policy'"></v-link>
      </v-list>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md3 lg3 xl3>
      <div>
        <v-subheader inset class="headline primary--text">Contact Details</v-subheader>
        <v-list dense>
        <v-link title="Landline:href="'/facebook'"></v-link>
        <v-link title="Mobile 1:href="'/twitter'"></v-link>
        <v-link title="Mobile 2:href="'/instagram'"></v-link>
        <v-link title="Mobile 3:href="'/linkedin'"></v-link>
        <v-link title="Viber:href="'/youtube'"></v-link>
      </v-list>
      </div>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12>
      <v-footer :style="footerStyle">
      <span class="text-xs-center">© {{ year }} {{ domain }} ® | {{ trademark }}™</span>
      </v-footer>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Theme from '../mixins/theme'
import VLink from '../components/VLink.vue'
export default {
    mixins: [Theme],
    data: () => ({
        products: [
            { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
            { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
            { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        items2: [
            { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
            { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ],
        items: [
            { avatar: '/img/organic.png', title: 'Grape juice with Garcinia Cambogia', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/products/grape-juice-with-garcinia-cambodia' },
            { avatar: '/img/foodcart.jpg', title: 'Organic Pure Barley Powered Drink', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/products/organic-pure-barley-powered-drink' },
            { avatar: '/img/reseller.png', title: 'Coffee Mix with Glutathione', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/products/coffee-mix-with-gluthathione' },
            { avatar: '/img/reseller.png', title: 'Choco Barley Powered Drink', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/products/choco-barley-powdered-drink' }

        ],
        foodcarts: [
            { avatar: '/img/organic.png', title: 'Mang Siomai', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/foodcart-franchise/mang-siomai' },
            { avatar: '/img/foodcart.jpg', title: 'Hongkong Fried Noodles', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/foodcart-franchise/hongkong-fried-noodles' },
            { avatar: '/img/reseller.png', title: 'Dumpling King', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/foodcart-franchise/dumpling-king' },
            { avatar: '/img/reseller.png', title: 'Chinky Pao', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/foodcart-franchise/chinky-pao' }
        ],
        policies: [
            { avatar: '/img/organic.png', title: 'Cookie Policy', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/cookie-policy' },
            { avatar: '/img/foodcart.jpg', title: 'Privacy Policy', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/privacy-policy' },
            { avatar: '/img/reseller.png', title: 'Refund Policy', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/refund-policy' },
            { avatar: '/img/reseller.png', title: 'Anti-Spam Policy', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: '/anti-spam-policy' }
        ],
        contacts: [
            { avatar: '/img/organic.png', title: 'Landline', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: 'facebook.com/fanpage' },
            { avatar: '/img/foodcart.jpg', title: 'Mobile', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: 'twitter.com/fanpage' },
            { avatar: '/img/reseller.png', title: 'Skype', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: 'youtube.com/fanpage' },
            { avatar: '/img/reseller.png', title: 'Viber', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?', link: 'viber.com/number' }
        ]

    }),
    components: {
        VLink
    }
}
</script>

<style>

</style>
