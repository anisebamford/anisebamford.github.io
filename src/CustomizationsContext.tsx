import { createContext } from "react"

export type Customizations = {
  highlightedSkills: string[],
  highlightedAssignments: string[],
  resetSkill: (skill: string) => void,
  resetAssignment: (assignment: string) => void,
  highlightSkill: (skill: string) => void,
  highlightAssignment: (assignment: string) => void,
  queryString: string,
}

export const CustomizationsContext = createContext<Customizations>({
  highlightedAssignments: [],
  highlightedSkills: [],
  resetAssignment: () => {},
  resetSkill: () => {},
  highlightAssignment: () => {},
  highlightSkill: () => {},
  queryString: "",
})
