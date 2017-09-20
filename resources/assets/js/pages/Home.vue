<template>
  <main-layout :style="{ 'background-color': backgroundcolor }">
    <carousel></carousel>
    <video-gallery></video-gallery>
    <show-case></show-case>
    <logo-slider></logo-slider>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import ShowCase from '../components/home/Showcase.vue'
import Carousel from '../components/home/Carousel.vue'
import VideoGallery from '../components/home/VideoGallery.vue'
import LogoSlider from '../components/home/LogoSlider.vue'
import Theme from '../mixins/theme'

export default {
    mixins: [Theme],
    data: () => ({
        backgroundcolor: 'white'
    }),
    components: {
        MainLayout,
        ShowCase,
        Carousel,
        VideoGallery,
        LogoSlider
    }

}
</script>
