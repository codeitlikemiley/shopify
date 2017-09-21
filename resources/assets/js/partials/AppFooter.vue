<template>
<v-container fluid class="pa-0 ma-0 pt-5">
  <v-layout row wrap>
    <v-flex xs12 sm12 md4 lg4 xl4>
      <v-card-text class="pa-0">
        <v-list three-line class="text-xs-center">
          <template v-for="(item, i) in products">
            <v-subheader class="primary--text headline" v-if="item.header" v-bind:key="i" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:key="i" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="i" download>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="primary--text" v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg4 xl4>
      <v-card-text class="pa-0">
        <v-list three-line class="text-xs-center">
          <template v-for="(item, i) in foodcarts">
            <v-subheader class="primary--text headline" v-if="item.header" v-bind:key="i" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:key="i" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="i" download>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="primary--text" v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg4 xl4>
      <v-card-text class="pa-0">
        <v-list three-line class="text-xs-center">
          <template v-for="(item, i) in contacts">
            <v-subheader class="primary--text headline" v-if="item.header" v-bind:key="i" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:key="i" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="i" download>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="primary--text" v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card-text>
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
export default {
    mixins: [Theme],
    data: () => ({
        products: [
            { header: 'Products' },
            { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }
        ],
        foodcarts: [
            { header: 'Food Carts' },
            { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }
        ],
        contacts: [
            { header: 'Contact Details' },
            { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            { divider: true, inset: true },
            { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }
        ]
    })
}
</script>

<style>

</style>
