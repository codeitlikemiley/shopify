<template>
  <v-carousel icon="crop_square" class="primary--text">
        <v-carousel-item  v-for="(item,i) in images" :src="item.src" :key="i">
            <div class="caption text-xs-center">
            <h3 class="white--text"> {{ item.headline }}</h3>
            <h5 class="white--text" >{{ item.subheader }}</h5>
            <v-btn class="primary white--text" @click.native.prevent="goToLink(item.buttonlink)">{{ item.buttontext }}</v-btn>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data: () => ({
        images: [
            {src: '/img/parallax1.jpg', headline: 'Parallax1', 'subheader': 'Subheader1', 'buttontext': 'Buy Now!', 'buttonlink': 'cart'},
            {src: '/img/parallax2.png', headline: 'Parallax2', 'subheader': 'Subheader2', 'buttontext': 'Learn More...', 'buttonlink': 'about'}
        ]
    }),
    methods: {
        goToLink (link) {
            this.$router.push({ name: link })
        }
    }
}
</script>

<style>

</style>
