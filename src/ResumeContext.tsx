import {createContext} from "react"

export type AssignmentState = "hidden" | "mini" | "full"

export type Assignment = {
  company: string,
  start: string,
  end: string | null,
  position: string,
  location: string,
  accomplishments: string[],
  state?: AssignmentState,
}

export type Resume = {
  highlightedSkills?: string[],
  skills: string[],
  jobs: Record<string, Assignment>,
  professionalSummary: string,
  name: string,
  pronouns: string,
  title: string,
  linkedin: string,
  github: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  education: {
    school: string,
    startYear: string,
    endYear: string,
    degree?: string,
    major: string,
  }[]
}

export type OverrideFunctions = {
  setField: <T extends keyof Resume = keyof Resume>(field: T, value:  Resume[T]) => void,
  switchAssignmentState: (assignmentKey: string) => void,
  toggleHighlightSkill: (skill: string) => void,
  path?: string
}

export const ResumeContext = createContext<Resume & OverrideFunctions>({
  highlightedSkills: [],
  skills: [],
  jobs: {},
  professionalSummary: "",
  name: "Anise Bamford",
  pronouns: "She/They",
  title: "Web Developer",
  linkedin: "https://www.linkedin.com/in/anise-bamford-bab747229/",
  github: "https://github.com/anisebamford/",
  email: "anisebamford@gmail.com",
  address: "Corvallis, OR 97330",
  phone: "(503) 327-6775",
  website: "",
  education: [],
  setField: <T extends keyof Resume = keyof Resume>(field: T, value: Resume[T]) => {},
  switchAssignmentState: (assignmentKey: string) => {},
  toggleHighlightSkill: (skill: string) => {}
})