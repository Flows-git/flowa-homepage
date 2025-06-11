export const skills = [
  { name: 'Vue.js', icon: 'logos:vue', level: 'expert', experience: 6 },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', level: 'expert', experience: 5 },
  { name: 'Javascript', icon: 'logos:javascript', level: 'expert', experience: 10 },
  { name: 'Typescript', icon: 'logos:typescript-icon', level: 'expert', experience: 6 },
  { name: 'HTML 5', icon: 'logos:html-5', level: 'expert', experience: 10 },
  { name: 'CSS 3', icon: 'logos:css-3', level: 'expert', experience: 10 },
  { name: 'SASS', icon: 'logos:sass', level: 'expert', experience: 6 },
  { name: 'Vuetify', icon: 'logos:vuetifyjs', level: 'expert', experience: 5 },
  { name: 'Node.js', icon: 'logos:nodejs-icon', level: 'expert', experience: 5 },
  { name: 'Docker', icon: 'logos:docker-icon', level: 'expert', experience: 5 },
  { name: 'Storybook', icon: 'logos:storybook-icon', level: 'expert', experience: 8 },
  { name: 'Git', icon: 'logos:git-icon', level: 'expert', experience: 10 },
  { name: 'MySQL', icon: 'logos:mysql-icon', level: 'expert', experience: 10 },
  { name: 'PostgreSQL', icon: 'logos:postgresql', level: 'expert', experience: 6 },
  { name: 'Vitest', icon: 'logos:vitest', level: 'expert', experience: 3 },
  { name: 'Jest', icon: 'logos:jest', level: 'expert', experience: 5 },
  { name: 'Pinia', icon: 'logos:pinia', level: 'expert', experience: 4 },

  { name: 'Linux', icon: 'logos:linux-tux', level: 'intermediate', experience: 5 },
  { name: 'Keycloak', icon: 'simple-icons:keycloak', level: 'intermediate', experience: 8 },
  { name: 'oAuth 2', icon: 'logos:oauth', level: 'intermediate', experience: 5 },
  { name: 'D3js', icon: 'logos:d3', level: 'intermediate', experience: 2 },
  { name: 'Vite', icon: 'logos:vitejs', level: 'intermediate', experience: 3 },
  { name: 'Webpack', icon: 'logos:webpack', level: 'intermediate', experience: 3 },
  { name: 'Fastify', icon: 'logos:fastify-icon', level: 'intermediate', experience: 2 },
  { name: 'ExpressJs', icon: 'devicon:express', level: 'intermediate', experience: 2 },
  { name: 'Capacitor', icon: 'logos:capacitorjs-icon', level: 'intermediate', experience: 2 },
  { name: 'Cypress', icon: 'logos:cypress-icon', level: 'intermediate', experience: 3 },
  // { name: 'Wordpress', icon: 'logos:wordpress-icon', level: 'intermediate', experience: 3 },
  // { name: 'H3', icon: '' },
  // { name: 'Nitro', icon: '' },
  { name: 'PHP', icon: 'logos:php', level: 'intermediate', experience: 5 },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', level: 'intermediate', experience: 3 },
  { name: 'jQuery', icon: 'devicon:jquery', level: 'intermediate', experience: 5 },

  { name: 'Composer', icon: 'logos:composer', level: 'base', experience: 1 },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon', level: 'base', experience: 1 },
  { name: 'Angular', icon: 'logos:angular-icon', level: 'base', experience: 1 },
  { name: 'Pug', icon: 'logos:pug', level: 'base', experience: 1 },
  { name: 'Golang', icon: 'logos:go', level: 'base', experience: 1 },
  { name: 'Java', icon: 'logos:java', level: 'base', experience: 2 },
  { name: 'Spring Boot', icon: 'logos:spring-icon', level: 'base', experience: 2 },
  { name: 'Swagger', icon: 'logos:swagger', level: 'base', experience: 2 },
  { name: 'Redis', icon: 'logos:redis', level: 'base', experience: 1 },
  { name: 'Firebase', icon: 'logos:firebase', level: 'base', experience: 1 },
] as const satisfies readonly Skill[];

type SkillName = typeof skills[number]['name'];

export function getSkillIconByName(name: SkillName | string) {
  return skills.find(s => s.name === name)?.icon
}

export function getSkillsByLevel(level: SkillLevel | string) {
  return skills.filter(s => s.level === level)
}