<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
</script>

<template>
  <Swiper>
    <SwiperSlide v-for="(project, i) of privateProjects" :key="`private-project-${i}`">
      <PrivateProjectCard :project="project" />
    </SwiperSlide>
  </Swiper>
</template>
