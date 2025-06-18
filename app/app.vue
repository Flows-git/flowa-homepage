<script setup lang="ts">
import { useDisplay } from 'vuetify'

useScript({
  src: 'https://scripts.simpleanalyticscdn.com/latest.js',
  async: true,
  crossorigin: false,
})

const { xs, sm } = useDisplay()

const showDrawer = ref(false)

const menuitems = [
  { title: 'Start', to: '/' },
  { title: 'About', to: '/#about' },
  { title: 'Referenzen', to: '/#references' },
]
</script>

<template>
  <v-app>
    <!-- header -->
    <v-app-bar class="app-header px-3 pl-8 pl-md-3">
      <div v-if="!sm" style="width: calc(50% - 24px);" />
      <div>
        <v-img src="/flowa-logo.png" height="48" width="48" alt="Logo der Webseite - Zeigt ein fancy F" />
      </div>
      <div :style="{ width: sm ? 'calc(100% - 48px)' : 'calc(50% - 24px)' }" class="text-end">
        <template v-if="!xs">
          <v-btn v-for="(item, i) of menuitems" :key="`item-${i}`" :to="item.to" :active="false" height="64px">
            {{ item.title }}
          </v-btn>
        </template>
        <v-app-bar-nav-icon v-if="xs" @click="showDrawer = !showDrawer" />
      </div>
    </v-app-bar>

    <!-- mobile menu -->
    <v-navigation-drawer v-if="xs" v-model="showDrawer" location="top" floating width="160">
      <v-list v-if="showDrawer" style="background: none;">
        <v-list-item v-for="(item, i) of menuitems" :key="`item-${i}`" :to="item.to" :active="false" class="text-h5 text-center">
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- content -->
    <v-main>
      <NuxtPage />
    </v-main>

    <!-- footer -->
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
