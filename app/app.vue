<script setup lang="ts">

type SkillLevel = 'expert' | 'intermediate' | 'base'

interface Skill {
  name: string
  icon: string
  level: SkillLevel
}

const skills: Array<Skill> = [
  { name: 'Vue.js', icon: 'logos:vue', level: 'expert' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', level: 'expert' },
  { name: 'Javascript', icon: 'logos:javascript', level: 'expert' },
  { name: 'Typescript', icon: 'logos:typescript-icon', level: 'expert' },
  { name: 'HTML 5', icon: 'logos:html-5', level: 'expert' },
  { name: 'CSS 3, SASS, SCSS ', icon: 'logos:css-3', level: 'expert' },
  { name: 'Vuetify', icon: 'logos:vuetifyjs', level: 'expert' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', level: 'expert' },
  { name: 'Docker', icon: 'logos:docker-icon', level: 'expert' },
  { name: 'Storybook', icon: 'logos:storybook-icon', level: 'expert' },
  { name: 'Git', icon: 'logos:git-icon', level: 'expert' },
  { name: 'MySQL', icon: 'logos:mysql-icon', level: 'expert' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', level: 'expert' },
  { name: 'Vitest', icon: 'logos:vitest', level: 'expert' },
  { name: 'Jest', icon: 'logos:jest', level: 'expert' },

  { name: 'Linux', icon: 'logos:linux-tux', level: 'intermediate' },
  { name: 'Keycloak', icon: 'simple-icons:keycloak', level: 'intermediate' },
  { name: 'oAuth 2', icon: 'logos:oauth', level: 'intermediate' },
  { name: 'D3js', icon: 'logos:d3', level: 'intermediate' },
  { name: 'Vite', icon: 'logos:vitejs', level: 'intermediate' },
  { name: 'Webpack', icon: 'logos:webpack', level: 'intermediate' },
  { name: 'Fastify', icon: 'logos:fastify-icon', level: 'intermediate' },
  { name: 'ExpressJs', icon: 'devicon:express', level: 'intermediate' },
  { name: 'Capacitor', icon: 'logos:capacitorjs-icon', level: 'intermediate' },
  { name: 'Cypress', icon: 'logos:cypress-icon', level: 'intermediate' },
  // { name: 'H3', icon: '' },
  // { name: 'Nitro', icon: '' },
  { name: 'PHP', icon: 'logos:php', level: 'intermediate' },
  { name: 'Composer', icon: 'logos:composer', level: 'intermediate' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', level: 'intermediate' },
  { name: 'jQuery', icon: 'devicon:jquery', level: 'intermediate' },

  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', level: 'base' },
  { name: 'Angular', icon: 'logos:angular-icon', level: 'base' },
  { name: 'Pug', icon: 'logos:pug', level: 'base' },
  { name: 'Golang', icon: 'logos:go', level: 'base' },
  { name: 'Java', icon: 'logos:java', level: 'base' },
  { name: 'Spring Boot', icon: 'logos:spring-icon', level: 'base' },
  { name: 'Swagger', icon: 'logos:swagger', level: 'base' },
  { name: 'Redis', icon: 'logos:redis', level: 'base' },
] as const;

type SkillName = typeof skills[number]['name'];

interface Project {
  img: string
  lazyImg: string
  name?: string
  industry: string
  myRole: string
  description: Array<string>
  myWork: Array<string>
  technologies: Array<SkillName>
}


function getSkillIconByName(name: SkillName) {
  return skills.find(s => s.name === name)?.icon
}

function getSkillsByLevel(level: SkillLevel) {
  return skills.filter(s => s.level === level)
}

const projects: Array<Project> = [
  {
    img: '/hydraulic-header.jpg',
    lazyImg: '/hydraulic-header-lazy.jpg',
    name: 'SN Hydraulik',
    industry: 'Hydraulik und Maschinenbau',
    myRole: 'Lead Entwickler',
    description: ['Software zur Verwaltung von Kunden und deren hydraulischen Maschinen. Konfiguration und Bestellung von Schlauchsystemen. Druchführung von rechtssicheren Prüfungen/Wartungen'],
    myWork: [
      'Erstellung und Umsetztung von Workflows ... uvm..dsa dsadasdasdasd .',
      'Erstellung und Umsetztung von Workflows ... uvm...',
      'Erstellung und Umsetztung von Workflows ... uvm...',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'D3js', 'Vuetify', 'Java Spring', 'oAuth 2', 'PostgreSQL', 'Docker']
  },

  {
    img: '/big-data-header.jpg',
    lazyImg: '/big-data-header-lazy.jpg',
    industry: 'Mobilitäts- und Logistikdienstleister',
    myRole: 'Fullstack Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js', 'Javascript', 'Vuetify', 'Node.js', 'Fastify', 'PostgreSQL', 'MongoDB', 'Docker']
  },

  {
    img: '/dev-framework-header.jpg',
    lazyImg: '/dev-framework-header-lazy.jpg',
    industry: 'Versicherungskonzern',
    myRole: 'Frontend Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },

  {
    img: '/qm-app-header.jpg',
    lazyImg: '/qm-app-header-lazy.jpg',
    industry: 'Healthcare',
    myRole: 'Lead Frontend Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },


  {
    img: '/price-calculator-header.jpg',
    lazyImg: '/price-calculator-header-lazy.jpg',
    industry: 'Softwareunternehmen',
    myRole: 'Fullstack Solo Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },


  {
    img: '/codamai-cms-header.jpg',
    lazyImg: '/codamai-cms-header-lazy.jpg',
    name: 'Codamic AG',
    industry: 'Softwareentwicklung',
    myRole: 'Frontend Entwickler/UX Designer',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },

  {
    img: '/fiber-header.jpg',
    lazyImg: '/fiber-header-lazy.jpg',
    industry: 'Telekommunikationsanbieter',
    myRole: 'Frontend Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },


  {
    img: '/dev-websites-header.jpg',
    lazyImg: '/dev-websites-header-lazy.jpg',
    name: 'Codamic AG',
    industry: 'Softwareentwicklung',
    myRole: 'Fullstack Entwickler',
    description: ['Lorem Ipsum'],
    myWork: [
      'Lorem Ipsum',
    ],
    technologies: ['Vue.js']
  },

]

</script>

<template>
  <v-app>
    <v-app-bar class="app-header">
      <!-- <div style="width: calc(50% - 24px);" /> -->
      <v-img src="/flowa-logo.png" height="48" width="48" />
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
            <div class="pt-4">Frontend Engineer / UX Designer / Workflow Optimizer / Backend Enthusiast</div>
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
            <v-card class="pa-3 text-center">
              <Icon :name="skill.icon" size="32" />
              <div>{{ skill.name }}</div>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-h5 pt-3 pb-2">
          <span>Fortgeschrittene Kenntnisse</span>
        </div>
        <v-row>
          <v-col v-for="(skill, i) of getSkillsByLevel('intermediate')" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <v-card class="pa-3 text-center">
              <Icon :name="skill.icon" size="32" />
              <div>{{ skill.name }}</div>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-h5 pt-3 pb-2">
          <span>Basis Kenntnisse</span>
        </div>
        <v-row>
          <v-col v-for="(skill, i) of getSkillsByLevel('base')" :key="`skill-${i}`" cols="6" sm="4" md="3" lg="2">
            <v-card class="pa-3 text-center">
              <Icon :name="skill.icon" size="32" />
              <div>{{ skill.name }}</div>
            </v-card>
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
                <p v-for="(text, j) of project.myWork" :key="`description-${j}`">{{ text }}</p>
              </v-card-text>
              <v-card-text>
                <div class="font-weight-bold pb-2">Eingesetzte Technologien:</div>
                <Icon v-for="skillName of project.technologies" :key="skillName" :name="getSkillIconByName(skillName) ?? ''" v-tooltip="skillName" size="24"
                  class="mr-1" />


              </v-card-text>
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
  background: rgba(var(--v-theme-background), .7) !important;
  backdrop-filter: blur(8px);
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