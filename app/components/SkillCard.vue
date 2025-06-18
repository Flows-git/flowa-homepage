<script setup lang="ts">
defineProps<{
  skill: Skill
}>()
</script>

<template>
  <v-card class="pa-3 text-center">
    <Icon :name="skill.icon" size="32" />
    <div>{{ skill.name }}</div>
    <div v-if="skill.experience" class="opacity-50">
      {{ skill.experience }}+ Jahre
    </div>
  </v-card>
</template>
