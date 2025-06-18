<script setup lang="ts">
import { useDisplay } from 'vuetify'

const showDrawer = ref(false)

const { xs, sm } = useDisplay()

const route = useRoute()
const isMainPage = computed(() => route.fullPath === '/')

useScript({
  src: 'https://scripts.simpleanalyticscdn.com/latest.js',
  async: true,
  crossorigin: false,

})
</script>

<template>
  <v-app>
    <v-app-bar class="app-header px-3 pl-8 pl-md-3">
      <div v-if="!sm" style="width: calc(50% - 24px);" />
      <div>
        <v-img src="/flowa-logo.png" height="48" width="48" alt="Logo der Webseite - Zeigt ein fancy F" />
      </div>
      <div :style="{ width: sm ? 'calc(100% - 48px)' : 'calc(50% - 24px)' }" class="text-end">
        <template v-if="!xs">
          <v-btn to="/" :active="false" height="64px">
            Start
          </v-btn>
          <v-btn to="/#about" :active="false" height="64px">
            About
          </v-btn>
          <v-btn to="/#references" :active="false" height="64px">
            Referenzen
          </v-btn>
        </template>
        <v-app-bar-nav-icon v-if="xs" @click="showDrawer = !showDrawer" />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-if="xs" v-model="showDrawer" location="top" floating width="160">
      <v-list v-if="showDrawer" style="background: none;">
        <v-list-item to="/" :active="false" class="text-h5 text-center">
          Start
        </v-list-item>
        <v-list-item to="/#about" :active="false" class="text-h5 text-center">
          About
        </v-list-item>
        <v-list-item to="/#references" :active="false" class="text-h5 text-center">
          Referenzen
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main :style="isMainPage ? '--v-layout-top: 0' : ''">
      <NuxtPage />
    </v-main>

    <v-footer class="justify-end">
      <v-btn density="compact" variant="text" to="/impressum">
        Impressum
      </v-btn>
      <v-btn density="compact" variant="text" to="/datenschutz">
        Datenschutz
      </v-btn>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.app-header,
:deep(.v-navigation-drawer.v-navigation-drawer--active) {
  background: rgba(var(--v-theme-background), .6) !important;
  backdrop-filter: blur(4px);
}

:deep(.v-navigation-drawer) {
  background: none
}
</style>
