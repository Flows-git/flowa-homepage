<script setup lang="ts">
defineProps<{
  title: string
  skills: Skill[]
}>()
</script>

<template>
  <div class="text-h5 pt-2 pb-2">
    <span>{{ title }}</span>
  </div>
  <v-row>
    <v-col v-for="(skill, i) of skills" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
      <SkillCard :skill="skill" />
    </v-col>
  </v-row>
</template>
