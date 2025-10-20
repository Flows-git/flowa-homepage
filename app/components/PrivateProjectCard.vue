<script setup lang="ts">
defineProps<{
  project: PrivateProject
}>()
</script>

<template>
  <v-card class="d-flex flex-column">
    <div>
      <v-img :src="project.img" :lazy-src="project.lazyImg" :alt="`Headerbild für das Private Software Projekt: ${project.name}`" cover height="200px">
        <template #placeholder>
          <div class="fill-height d-flex align-center justify-center">
            <v-progress-circular indeterminate color="primary" />
          </div>
        </template>
      </v-img>
    </div>
    <v-card-text>
      <div class="text-center">
        <div class="text-h6">
          {{ project.name }}
        </div>
      </div>
      <v-divider class="py-2" />
      <p v-for="(text, j) of project.description" :key="`description-${j}`">
        {{ text }}
      </p>
      <ul class="pt-2">
        <li v-for="(text, j) of project.myWork" :key="`description-${j}`" class="ml-3">
          {{ text }}
        </li>
      </ul>
      <template v-if="project.links.length">
        <div class="font-weight-bold pb-1 pt-4">
          Links
        </div>
        <div v-for="link of project.links" :key="link.label + link.url">
          <NuxtLink v-if="link.url?.length" target="_blank" :href="link.url">
            {{ link.label }}
          </NuxtLink>
          <div v-else class="opacity-70">
            {{ link.label }}
          </div>
        </div>
      </template>
    </v-card-text>
    <v-card-actions class="d-block text-body-2 px-3">
      <div class="font-weight-bold pb-2">
        Eingesetzte Technologien:
      </div>
      <v-chip v-for="skillName of project.technologies" :key="skillName" class="ma-1">
        <Icon :name="getSkillIconByName(skillName) ?? ''" size="16" class="mr-1" />
        {{ skillName }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>
