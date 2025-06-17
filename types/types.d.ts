type SkillLevel = 'expert' | 'intermediate' | 'base'

interface Skill {
  name: string
  icon: string
  level: SkillLevel
  experience?: number
}

interface Project {
  img: string
  lazyImg: string
  name?: string
  industry: string
  myRole: string
  workDuration: string
  description: Array<string>
  myWork: Array<string>
  technologies: Array<string>
}