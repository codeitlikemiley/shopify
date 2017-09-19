<template>
  <main-layout>
    <h1>Welcome home</h1>
<slick ref="slick" :options="slickOptions">
  <a ><img src="http://placehold.it/2000x1000" alt=""></a>
  <a ><img src="http://placehold.it/2000x1000" alt=""></a>
  <a ><img src="http://placehold.it/2000x1000" alt=""></a>
  <a ><img src="http://placehold.it/2000x1000" alt=""></a>
  <a ><img src="http://placehold.it/2000x1000" alt=""></a>
</slick>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Theme from '../mixins/theme'
import Slick from 'vue-slick'

export default {
    mixins: [Theme],
    data: () => ({
        slickOptions: {
            slidesToShow: 4
            // Any other options that can be got from plugin documentation
        }
    }),
    components: {
        MainLayout,
        Slick
    },
    methods: {
        next () {
            this.$refs.slick.next()
        },

        prev () {
            this.$refs.slick.prev()
        },

        reInit () {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        }
    }
}
</script>

<style lang="scss" scoped>

@import '~slick-carousel/slick/slick.css'

</style>
