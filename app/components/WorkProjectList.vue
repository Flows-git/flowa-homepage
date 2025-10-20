<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
</script>

<template>
  <Swiper>
    <SwiperSlide v-for="(project, i) of projects" :key="`work-project-${i}`">
      <ProjectCard :project="project" />
    </SwiperSlide>
  </Swiper>
</template>
