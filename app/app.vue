<template>
  <v-app>
    <v-app-bar class="app-header">
      <div style="width: calc(50% - 24px);" />
      <v-img src="/flowa-logo.png" height="48" width="48" />
      <div style="width: calc(50% - 24px);" class="pa-3 d-flex align-center justify-end">
        <v-btn to="/#about">About</v-btn>
      </div>

      <!-- <div style="width: calc(50% - 24px);" /> -->
      <!-- <div style="width: calc(50% - 24px);" class="pa-3 d-flex align-center justify-end"> -->
      <!-- <v-tabs align-tabs="end" color="deep-purple-accent-4">
          <v-tab to="/">Home</v-tab>
          <v-tab to="#about">City</v-tab>
          <v-tab to="#projects">Abstract</v-tab>
        </v-tabs> -->
      <!-- </div> -->
    </v-app-bar>
    <v-main style="padding-top: 0">
      <v-parallax src="/background.jpg" lazy-src="/background-lazy.jpg" cover height="100vh" width="calc(100vw - var(--v-layout-left) - var(--v-layout-right))">

        <v-container fluid class="fill-height d-flex flex-column align-center justify-center" style="padding-top: calc(12px + var(--v-layout-top))">
          <div class="pb-3">
            <v-avatar size="150" style="box-shadow: 0px 0px 15px -1px #41ACA3;">
              <v-img src="/portait-florian-wagner.jpg" />
            </v-avatar>
          </div>
          <div class="pa-8 text-center header-box">
            <div class="text-h5 text-sm-h3">Hello my name is</div>
            <div class="text-h3 text-sm-h1 pt-6 gradient-text">Florian Wagner</div>
            <div class="pt-4">Frontend Entwickler / UX Designer / Workflow Optimierer / Backend Entwickler</div>
          </div>
          <div class="pt-2">
            <v-btn variant="text" icon href="https://github.com/Flows-git">
              <Icon name="simple-icons:github" size="32px" />
            </v-btn>
            <v-btn variant="text" icon href="https://github.com/Flows-git" class="mx-2">
              <Icon name="simple-icons:linkedin" size="32px" />
            </v-btn>
            <v-btn variant="text" icon href="https://github.com/Flows-git">
              <Icon name="simple-line-icons:envelope" size="32px" />
            </v-btn>
          </div>
        </v-container>
      </v-parallax>

      <v-container id="about">
        <div class="text-h2 pb-4">
          <span class="gradient-text">About</span>
        </div>
        <div class="py-3">
          <p>
            Hallo, ich bin Flo, professioneller Softwareentwickler seit über 11 Jahren. Meine Stärken sind die Umsetzung von komplexen und benutzerfreundlichen
            Webanwendungen und die Erstellung sowie Optimierung von Workflows um den größtmöglichen Nutzen für das Unternehmen zu erzielen.
          </p>
          <p>
            Im Jahr 2013 habe ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung abgeschlossen und war danach in meinem Ausbildungsbetrieb
            tätig,
            wo ich für die Administration und Weiterentwicklung der internen und externen Webseiten zuständig war.
          </p>
          <p>
            2018 wechselte ich auf der Suche nach neuen Herausforderungen in ein kleines Start-up. Dort hatte ich die Möglichkeit, an vielen spannenden internen
            und externen Projekten mitzuwirken. Weitere Informationen dazu sind in meinen Referenzen zu finden.
          </p>


        </div>

        <div class="text-h3 gradient-text">
          <span>Skills</span>
        </div>
        <div class="text-h5 pt-3 pb-2">
          <span>Experten Kenntnisse</span>
        </div>
        <v-row>
          <v-col v-for="(skill, i) of getSkillsByLevel('expert')" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <SkillCard :skill="skill" />
          </v-col>
        </v-row>

        <div class="text-h5 pt-3 pb-2">
          <span>Fortgeschrittene Kenntnisse</span>
        </div>
        <v-row>
          <v-col v-for="(skill, i) of getSkillsByLevel('intermediate')" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <SkillCard :skill="skill" />
          </v-col>
        </v-row>

        <div class="text-h5 pt-3 pb-2">
          <span>Basis Kenntnisse</span>
        </div>
        <v-row>
          <v-col v-for="(skill, i) of getSkillsByLevel('base')" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <SkillCard :skill="skill" />
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col v-for="(skill, i) of skills" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <v-card class="pa-3 text-center">
              <Icon :name="skill.icon" size="32" />
              <div>{{ skill.name }}</div>
            </v-card>
          </v-col>
        </v-row> -->
        <!-- <v-card class="pa-3 mt-3">x
          <div>Frontend</div>
          <div>Vue, Javascript, Typescript, Vite, CSS3 (SASS, SCSS), HTML5, PugJs, D3js</div>
          <div>Storybook, Histoire - Living Style Guide</div>

          <div>Backend</div>
          <div>NodeJs, Fastify/ExpressJs, Nitro/H3, Golang, Java</div>

          <div>Datenbanken</div>
          <div>MySQL, PostgreSQL, MongoDB, Redis</div>

          <div>Testing</div>
          <div>Jest, Vitest, BunTest - Unit/Component Tests</div>
          <div>Cypress, Geb (Groovy) - E2E Tests</div>

          <div>Deployment</div>
          <div>CI/CD Pipelines</div>
          <div>Docker</div>
          <div>Docker</div>
        </v-card>

        <v-card class="pa-3 mt-3">
          <div>Favourite tech stack</div>
          <div>VueJs, Nuxt, Typescript, Vuetify, NodeJs, Keycloak, Docker</div>
        </v-card> -->
      </v-container>
      <v-divider />
      <v-container id="projects">
        <div class="text-h2  pb-3">
          <span class="gradient-text">Referenzen</span>

        </div>

        <v-row>
          <v-col v-for="(project, i) of projects" :key="`project-${i}`" cols="12" md="6" lg="4" xl="3">
            <v-card class="fill-height">
              <v-img :src="project.img" :lazy-src="project.lazyImg" cover height="200px">
                <template #placeholder>
                  <div class="fill-height d-flex align-center justify-center">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                </template>
                <div class="pa-2">
                  <v-chip color="primary" variant="flat">{{ project.myRole }}</v-chip>

                </div>


              </v-img>
              <v-card-text>
                <div class="text-center">
                  <div class="text-body-2 opacity-50">Branche</div>
                  <div class="text-h6">
                    {{ project.industry }}
                  </div>
                </div>
                <v-divider class="py-2" />
                <p v-for="(text, j) of project.description" :key="`description-${j}`">{{ text }}</p>
              </v-card-text>
              <v-card-text>
                <div class="font-weight-bold pb-1">Meine Tätigkeiten im Projekt:</div>
                <ul>

                  <li v-for="(text, j) of project.myWork" :key="`description-${j}`">
                    {{ text }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions class="d-block text-body-2 px-3">
                <div class="font-weight-bold pb-2">Eingesetzte Technologien:</div>
                <v-chip v-for="skillName of project.technologies" :key="skillName" class="ma-1">
                  <Icon :name="getSkillIconByName(skillName) ?? ''" size="16" class="mr-1" />
                  {{ skillName }}
                </v-chip>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- <div>Hydraulik und Maschinenbau - Software zur Verwaltung von Kunden und deren hydraulischen Maschinen. Konfiguration und Bestellung von
          Schlauchsystemen. Druchführung von rechtssicheren Prüfungen/Wartungen</div>
        <div>Mobilitäts- und Logistikdienstleister - Big Data Projekt. Auslesen, Auswerten und Darstellen von Unternehmensweiten Kennzahlen</div>
        <div>Versicherungskonzern - Entwicklung eines TAA (Tariff-Angebot-Antrag) Frameworks und Komponenten Library</div>
        <div>Softwareunternehmen - Entwicklung eines Preiskalkulators für Attlassianprodukte</div>
        <div>Telekommunikationsanbieter - Presales Portale für FTTH ausbau</div>
        <div>Curatis - Healthcare - iOS App und Web Portal zur Durchführung und Auswertung von Qualitätssicherung in Krankenhäusern</div>
        <div>Codamic AG - Entwicklung und Design von Codamai CMS</div>
        <div>Codamic AG - Umsetzung diverer Unternehmensauftritte</div>
        <div>Destatis - Betreuung interner und externer Webauftritte, Migration auf modernes Design</div> -->
      </v-container>
      <!-- <v-divider />
      <v-container style="height: 100vh">
        MORE CONTENT!!
      </v-container> -->
      <v-footer>Footer</v-footer>
    </v-main>
  </v-app>
</template>


<style scoped lang="scss">
.app-header {
  background: rgba(var(--v-theme-background), .6) !important;
  backdrop-filter: blur(4px);
}

.header-box {
  background: rgba(var(--v-theme-background), .7);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 15px -1px #41ACA3;
  max-width: 100%;
}

.gradient-text {
  background-image: linear-gradient(90deg, #186f71, #379992, #41aea4, #8df0e7, #41aea4, #379992, #186f71);
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>