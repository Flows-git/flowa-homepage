<script setup lang="ts">
defineProps<{
  project: Project
}>()
</script>

<template>
  <v-card class="d-flex flex-column">
    <div>
      <v-img :src="project.img" :lazy-src="project.lazyImg" :alt="`Headerbild für eine Referenz aus der Branche ${project.industry}`" cover height="200px">
        <template #placeholder>
          <div class="fill-height d-flex align-center justify-center">
            <v-progress-circular indeterminate color="primary" />
          </div>
        </template>
        <div class="fill-height d-flex flex-column justify-space-between">
          <div class="pa-2">
            <v-chip v-tooltip:end="`Meine Rolle`" aria-label="Meine Rolle" color="primary" variant="flat">
              {{ project.myRole }}
            </v-chip>
          </div>
          <div class="d-flex justify-end pa-2">
            <v-chip v-tooltip:start="`Projekteinsatz`" aria-label="Projekteinsatz" variant="flat" color="white">
              {{ project.workDuration }}
            </v-chip>
          </div>
        </div>
      </v-img>
    </div>
    <v-card-text>
      <div class="text-center">
        <div class="text-body-2 opacity-50">
          Branche
        </div>
        <div class="text-h6">
          {{ project.industry }}
        </div>
      </div>
      <v-divider class="py-2" />
      <p v-for="(text, j) of project.description" :key="`description-${j}`">
        {{ text }}
      </p>
      <div class="font-weight-bold pb-1 pt-4">
        Meine Tätigkeiten im Projekt:
      </div>
      <ul>
        <li v-for="(text, j) of project.myWork" :key="`description-${j}`" class="ml-3">
          {{ text }}
        </li>
      </ul>
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
