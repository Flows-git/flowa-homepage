<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = ref([Navigation, Pagination])
</script>

<template>
  <Swiper
    class="flowa-swiper"
    :modules="modules"
    :navigation="{ }"
    :pagination="{ clickable: true }"
    rewind
    :centered-slides="false"
    :initial-slide="0"
    :space-between="12"
    grab-cursor
    :breakpoints="{
      0: {
        slidesPerView: 1,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        initialSlide: 0,
      },
      764: {
        slidesPerView: 2,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        initialSlide: 0,
      },
      1110: {
        slidesPerView: 3,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        initialSlide: 0,
      },
      1480: {
        slidesPerView: 4,
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
        initialSlide: 0,
      },
      1830: {
        slidesPerView: 5,
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
        initialSlide: 0,
      },
    }"
  >
    <slot />
  </Swiper>
</template>

<style lang="scss">
.flowa-swiper {
  --swiper-theme-color: rgb(var(--v-theme-primary))
}
</style>
