type SkillLevel = 'expert' | 'intermediate' | 'base'

interface Skill {
  name: string
  icon: string
  level: SkillLevel
  experience?: number
}

interface BaseProject {
  img: string
  lazyImg: string
  description: Array<string>
  myWork: Array<string>
  technologies: Array<string>
}

interface Project extends BaseProject {
  name?: string
  industry: string
  myRole: string
  workDuration: string
}

interface PrivateProject extends BaseProject {
  name: string
  links: Array<{ label: string, url: string }>
}
