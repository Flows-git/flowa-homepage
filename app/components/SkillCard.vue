<script setup lang="ts">
defineProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skill: any
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
