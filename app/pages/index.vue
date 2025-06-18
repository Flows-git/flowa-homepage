<script setup lang="ts">
import { useDisplay } from 'vuetify'

const showAllSkills = ref(false)
const { smAndDown } = useDisplay()
</script>

<template>
  <div class="mt-n16">
    <v-parallax
      src="/background.jpg" lazy-src="/background-lazy.jpg" alt="Hintergrund des Willkommenstexts - Zeigt abstrakte Linien die ein F darstellen" cover
      height="100lvh" width="100vw"
    >
      <v-container fluid class="fill-height d-flex flex-column align-center justify-center" style="padding-top: calc(12px + var(--v-layout-top))">
        <div class="pb-3">
          <v-avatar size="150" style="box-shadow: 0px 0px 15px -1px #41ACA3;">
            <v-img src="/portait-florian-wagner.jpg" alt="Portrait von Florian Wagner" />
          </v-avatar>
        </div>
        <div class="pa-8 text-center header-box">
          <div class="text-h5 text-sm-h4">
            Portfolio von
          </div>
          <div class="text-h3 text-sm-h1 pt-2 gradient-text" style="line-height: 1.1;">
            Florian Wagner
          </div>
          <div class="pt-4">
            Frontend Entwickler / UX Designer / Workflow Optimierer / Backend Entwickler
          </div>
        </div>
        <div class="pt-2 text-white">
          <v-btn variant="text" icon href="https://github.com/Flows-git" target="_blank" aria-label="Link zu Florians GitHub">
            <Icon name="simple-icons:github" size="32px" />
          </v-btn>
          <v-btn
            variant="text" icon href="https://www.linkedin.com/in/florian-wagner-4430851aa" target="_blank" class="mx-2"
            aria-label="Link zu Florians LinkedIn"
          >
            <Icon name="simple-icons:linkedin" size="32px" />
          </v-btn>
          <v-btn variant="text" icon href="mailto:f.wagner92@gmail.com" aria-label="Schreibe Florian eine E-Mail">
            <Icon name="simple-line-icons:envelope" size="32px" />
          </v-btn>
        </div>
      </v-container>
    </v-parallax>

    <v-container id="about">
      <div class="text-h2 pb-2">
        <span class="gradient-text">About</span>
      </div>
      <div class="w-xl-50">
        <p class="pb-2">
          Hallo, ich bin Flo – leidenschaftlicher Softwareentwickler mit über 11 Jahren Erfahrung. Mein Herz schlägt für die Entwicklung komplexer, intuitiver
          Webanwendungen und die Optimierung von Workflows, um echten Mehrwert für Unternehmen zu schaffen.
        </p>
        <p class="pb-2">
          Schon während meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung, die ich 2013 abgeschlossen habe, wurde mir klar, wie viel Spaß mir das
          Entwickeln macht. Seitdem lässt mich das Thema nicht mehr los. Direkt im Anschluss durfte ich im Ausbildungsbetrieb Verantwortung übernehmen und
          interne sowie externe Webauftritte technisch betreuen und weiterentwickeln.
        </p>
        <p class="pb-2">
          2018 habe ich mich bewusst für den Wechsel in ein dynamisches Start-up entschieden, um neue Perspektiven zu gewinnen und an spannenden, kreativen
          Projekten mitwirken zu können. Dort konnte ich meine Kenntnisse in verschiedensten Bereichen weiter vertiefen und an vielseitigen internen wie
          externen Projekten mitwirken – mehr dazu in meinen Referenzen.
        </p>
        <p>
          Auch abseits des Berufs beschäftige ich mich gerne mit neuen Technologien, Frameworks oder Konzepten – sei es aus Neugier, um auf dem neuesten Stand
          zu bleiben oder einfach, weil mich technische Herausforderungen reizen. Diese Begeisterung treibt mich an, stetig zu lernen und besser zu werden.
        </p>
      </div>
    </v-container>

    <v-divider />

    <v-container>
      <div class="text-h3">
        <span class="gradient-text">Skills</span>
      </div>
      <SkillList title="Experten Kentnisse" :skills="getSkillsByLevel('expert')" />
      <v-expand-transition>
        <div v-if="!showAllSkills" class="text-center py-3">
          <v-btn color="primary" @click="showAllSkills = true">
            Alle Kentnisse anzeigen
          </v-btn>
        </div>
      </v-expand-transition>
      <v-expand-transition>
        <div v-if="showAllSkills">
          <SkillList title="Fortgeschrittene Kentnisse" :skills="getSkillsByLevel('intermediate')" />
          <SkillList title="Basis Kentnisse" :skills="getSkillsByLevel('base')" />
        </div>
      </v-expand-transition>
    </v-container>

    <v-divider />

    <v-parallax
      id="references" src="/subheader-2.jpg" lazy-src="/subheader-2-lazy.jpg"
      alt="Hintergrund für eine Unterüberschrift - Zeigt abstrakte Linien die ein V darstellen" :height="smAndDown ? 200 : 350"
    >
      <div class="fill-height d-flex align-center justify-center">
        <span class="text-h2 text-white"> Referenzen </span>
      </div>
    </v-parallax>

    <v-container>
      <v-row justify="center">
        <v-col v-for="(project, i) of projects" :key="`project-${i}`" cols="12" sm="6" md="6" lg="4" xl="3">
          <ProjectCard :project="project" class="fill-height" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.header-box {
  background: rgba(var(--v-theme-background), .7);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 15px -1px #41ACA3;
  max-width: 100%;
}
</style>
