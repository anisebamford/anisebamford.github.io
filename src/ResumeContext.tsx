import {createContext} from "react"

export type Assignment = {
  company: string,
  start: string,
  end: string | null,
  position: string,
  location: string,
  accomplishments: string[],
}

export type Resume = {
  skills: string[],
  jobs: Assignment[],
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
    yearStart: string,
    yearEnd: string,
    degree?: string,
    major: string,
  }[]
}

export const ResumeContext = createContext<Resume>({
  skills: [],
  jobs: [],
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
})