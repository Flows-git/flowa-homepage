export const projects: Array<Project> = [
  {
    img: '/hydraulic-header.jpg',
    lazyImg: '/hydraulic-header-lazy.jpg',
    name: 'SN Hydraulik',
    industry: 'Hydraulik und Maschinenbau',
    myRole: 'Lead Entwickler',
    workDuration: '+9 Monate',
    description: ['Anwendung zur Verwaltung von Kunden und deren hydraulischen Maschinen, Konfiguration und Bestellung von Schlauchsystemen sowie die Druchführung von rechtssicheren Prüfungen/Wartungen'],
    myWork: [
      'Umetzung des Frontends',
      'UX Design',
      'Erstellung und Umsetzung von Workflows',
      'Kundenberatung',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'Typescript', 'Vuetify', 'Spring Boot', 'oAuth 2', 'Keycloak', 'PostgreSQL', 'Docker']
  },

  {
    img: '/big-data-header.jpg',
    lazyImg: '/big-data-header-lazy.jpg',
    name: 'DB Systel',
    industry: 'Mobilitäts- und Logistikdienstleister',
    myRole: 'Full-Stack Entwickler',
    workDuration: '1 Jahr',
    description: [
      'Big-Data Anwendung zur Auswertung und Darstellung verschiedenster Kennzahlen des gesamten Konzerns mit dynamisch erstellbaren Kennzahlenseiten'
    ],
    myWork: [
      'Erstellung und Optimierung von D3js Diagrammen',
      'Einführung von Vuetify und Ablösung des legacy Frameworks',
      'Einführung von MongoDB zur einfacheren Datenhaltung komplexer Seitenstrukturen',
      'Erstellung und Optimierung komplexer SQL Abfragen zur Datenanalyse'
    ],
    technologies: ['Vue.js', 'Javascript', 'SASS', 'Vuetify', 'D3js', 'Node.js', 'Fastify', 'PostgreSQL', 'MongoDB', 'Docker', 'Python']
  },

  {
    img: '/dev-framework-header.jpg',
    lazyImg: '/dev-framework-header-lazy.jpg',
    name: 'Gothaer',
    industry: 'Versicherung',
    myRole: 'Frontend Entwickler',
    workDuration: '1 Jahr 3 Monate',
    description: [
      'Entwicklung eines Vue.js Framework das von anderen Entwicklerteams im Unternehmen genutzt wird um verschiedenste TAA (Tarif-Angebot-Antrag) Formulare zu erstellen.'
    ],
    myWork: [
      'Erstellung generischer Frontend Komponenten zur Generierung von TAA Formularen',
      'Einführung von Unit und Component Tests',
      'Einführung eines Living Style Guides',
    ],
    technologies: ['Vue.js', 'HTML 5', 'SASS', 'Node.js', 'Spring Boot',  'Vitest', 'Storybook', 'Vuex']
  },

  {
    img: '/qm-app-header.jpg',
    lazyImg: '/qm-app-header-lazy.jpg',
    industry: 'Healthcare',
    name: 'CURATIS GmbH',
    myRole: 'Lead Frontend Entwickler',
    workDuration: '9 Monate',
    description: ['iOS App zur Durchführung und Auswertung von Listenbasierten Audits im Healthcare Bereich und ein Portal zur Administration/Ansicht der Audits und Fragelisten'],
    myWork: [
      'Umsetzung des App Frontends',
      'Einrichten des App Deployments',
      'Umsetzung der Auswertungsseiten im Web Portal',
      'Analyse der Auswertungsworkflows',
      'UX Design'
    ],
    technologies: ['Vue.js', 'Nuxt', 'HTML 5', 'Typescript', 'SASS', 'Capacitor', 'Vitest', 'Spring Boot', 'Pinia']
  },

  {
    img: '/price-calculator-header.jpg',
    lazyImg: '/price-calculator-header-lazy.jpg',
    industry: 'Softwareunternehmen',
    name: 'Seibert Media GmbH',
    myRole: 'Full-Stack Solo Entwickler',
    workDuration: '9 Monate',
    description: [
      'Software zur Angebotskalkulation für Atlassian Produkte um die Kostentransparenz zum Kunde sowie die Arbeitseffizienz im Presales Team zu steigern'
    ],
    myWork: [
      'Erstellung der Designs',
      'Umsetzung des Frontends',
      'Umsetzung des Backends',
      'Erstellung von Unit Tests mit PHPUnit'
    ],
    technologies: ['Vue.js', 'HTML 5', 'SASS', 'PHP', 'PostgreSQL']
  },

  {
    img: '/codamai-cms-header.jpg',
    lazyImg: '/codamai-cms-header-lazy.jpg',
    name: 'Codamic AG',
    industry: 'Softwareentwicklung',
    myRole: 'Frontend Entwickler / UX Designer',
    workDuration: '+2 Jahre',
    description: [
      'Hauseigenes CMS System das mit einer einfachen Oberfläche ein CMS mit flexibler und abgesicherter API als Spring Boot Projekt erstellt, das beliebig mit eigenem Code erweitert werden kann.',
    ],
    myWork: [
      'Erstellung der Designs',
      'Umsetzung des Frontends',
      'Ausarbeiten von Workflows',
      'Erstellung von Unit, Integration und E2E Tests'
    ],
    technologies: ['Vue.js', 'Nuxt', 'HTML 5', 'SASS', 'Typescript', 'Cypress', 'Docker', 'Spring Boot', 'Jest', 'Keycloak', 'MySQL', 'Storybook', 'Vuex']
  },

  {
    img: '/fiber-header.jpg',
    lazyImg: '/fiber-header-lazy.jpg',
    industry: 'Telekommunikationsanbieter',
    myRole: 'Frontend Entwickler',
    workDuration: '1 Jahr 6 Monate',
    description: [
      'Projekt zur Erstellung verschiedener Presales Portale für einen Telekommunikationsanbieter für den Ausbau von Glasfaser.',
      'Das Gesamtprojekt wurde mit bis zu 20 Teams dem SAFe Framwork entwickelt.'
    ],
    myWork: [
      'Umsetzung der Frontends zur Vorbestellung von Glasfaser, sowie die Verwaltung der Vorbestellungen',
      'Einführung von Vue in bestehendes Projekt'
    ],
    technologies: ['Vue.js', 'Pug', 'HTML 5', 'SASS', 'Golang', 'Geb (Groovy)']
  },


  {
    img: '/website-admin-header.jpg',
    lazyImg: '/website-admin-header-lazy.jpg',
    name: 'Statistisches Bundesamt',
    industry: 'Behörde',
    myRole: 'Software Entwickler / System Admin',
    workDuration: '5 Jahre',
    description: [
      'Administration und Weiterentwicklung der internen und externen Webauftritte, sowie Mitarbeit an der Umstellung des externen Webauftritts auf ein modernes Design.'
    ],
    myWork: [
      'Erstellung und Erweiterung verschiedener Seiten Elemente',
      'Second-Level-Support',
      'Migration des Goverment Site Builders (Behördensoftware)'
    ],
    technologies: ['Goverment Site Builder', 'Javascript', 'HTML 5', 'CSS 3', 'JSF']
  },

]
