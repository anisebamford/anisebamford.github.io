import { createContext } from "react"

export type Customizations = {
  highlightedSkills: string[],
  hiddenAssignments: string[],
  resetSkill: (skill: string) => void,
  resetAssignment: (assignment: string) => void,
  highlightSkill: (skill: string) => void,
  toggleHideAssignment: (assignment: string) => void,
  queryString: string,
  isLoggedIn: boolean,
  logIn: () => void,
}

export const CustomizationsContext = createContext<Customizations>({
  hiddenAssignments: [],
  highlightedSkills: [],
  resetAssignment: () => {},
  resetSkill: () => {},
  toggleHideAssignment: () => {},
  highlightSkill: () => {},
  queryString: "",
  isLoggedIn: false,
  logIn: () => {}
})
