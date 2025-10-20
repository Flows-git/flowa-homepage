export const privateProjects: Array<PrivateProject> = [
  {
    img: '/privateProjects/i18n-manager.jpg',
    lazyImg: '/privateProjects/i18n-manager-lazy.jpg',
    name: 'i18n Manager',
    description: ['Docker Container zur Verwaltung und Pflege von JSON basierten Übersetzungen in Software Projekten.'],
    myWork: [
      'Einfache Übersetzungsverwaltung',
      'Automatische Generierung von Übersetzungsdateien',
      'Filter (nach fehlenden Übersetzungen, nach Sprache, nach Schlüsselworten)',
      'Deployment über DockerHub',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'Typescript', 'Vuetify', 'Node.js', 'H3', 'Docker'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Flows-git/i18n-manager' },
      { label: 'DockerHub Container', url: 'https://hub.docker.com/r/flowame/i18n-manager' },
    ],
  },
  {
    img: '/privateProjects/jannes-kann-es.jpg',
    lazyImg: '/privateProjects/jannes-kann-es-lazy.jpg',
    name: 'Quiz App - Jannes kann es',
    description: ['Ein Warcraft 3 Quiz, das eine online Variante des Spiels "Jannes kann es" aus der Serie "Creepjack" darstellt.'],
    myWork: [
      'Full-Stack Nuxt Anwendung',
      'Sicheres Spielen durch Server Sessions',
      'Verschiedene Spielmodi',
      'Rangliste',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'Typescript', 'Vuetify', 'Node.js', 'H3', 'SupaBase'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Flows-git/jannes-kannes-browsergame' },
      { label: 'Live URL (coming soon)', url: '' },
    ],
  },
  {
    img: '/privateProjects/nuxt-simple-messages.jpg',
    lazyImg: '/privateProjects/nuxt-simple-messages-lazy.jpg',
    name: 'Nuxt Simple Messages',
    description: ['Ein einfaches Nachrichtenmodul für Nuxt.js-Anwendungen mit Vuetify.'],
    myWork: [
      'Darstellung von stapelbaren temporären Nachrichten/Benachrichtigungen mit einem Befehl',
      'Einfach zu nutzende designte Bestätigungsdialoge',
      'Installierbar mit npm',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'Typescript', 'Vuetify', 'npm'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Flows-git/nuxt-vuetify-simple-messages' },
      { label: 'NPM Repository', url: 'https://www.npmjs.com/package/nuxt-vuetify-simple-messages' },
    ],
  },
  {
    img: '/privateProjects/home-lab.jpg',
    lazyImg: '/privateProjects/home-lab-lazy.jpg',
    name: 'Home Lab',
    description: ['Stetige Weiterentwicklung meiner privaten Heimserver für meine Familie und mich.'],
    myWork: [
      'Im Heimnetz verfügbare Dienste mit Docker',
      'Privater VPN Zugang',
      'DNS Adblocker',
      'Bare-Metal Kubernetes Cluster mit 4 Nodes',
      'SSL Verschlüsselung für alle Dienste',
      'Reverse Proxy mit "echtem" Domain Namen',
      'Single Sign-On (SSO) für die meisten Anwendungen',
    ],
    technologies: ['Docker', 'Kubernetes', 'Linux', 'Netzwerkadministration', 'oAuth 2', 'VPN', 'SSL', 'DNS'],
    links: [],
  },
  {
    img: '/privateProjects/website.jpg',
    lazyImg: '/privateProjects/website-lazy.jpg',
    name: 'Diese Seite',
    description: ['Portfolio Webseite um meine Projekte und Fähigkeiten zu präsentieren.'],
    myWork: [
      'SPA Website mit Nuxt.js',
      'Deployment auf Netlify',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Javascript', 'Typescript', 'Vuetify', 'Netlify'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Flows-git/flowa-homepage' },
    ],
  },
]
