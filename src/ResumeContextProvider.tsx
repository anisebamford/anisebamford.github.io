import React, {PropsWithChildren, useCallback, useState} from "react"
import { AssignmentState, OverrideFunctions, Resume, ResumeContext } from "./ResumeContext"
import values from "../db.json"

function createCustomizationText(customizationData: Record<string, unknown>, onComplete?: () => void) {
  const clip = new ClipboardItem({c: JSON.stringify(customizationData, null, 2)})
  navigator.clipboard.write([clip]).then(onComplete)
}

function applyCustomizations(resume: Resume, customizations: Partial<Resume>) {
  for (const key in customizations) {
    if (typeof customizations[key] === "string") {
      resume[key] = customizations[key]
    }
    else if (key === "highlightedSkills") {
      resume[key] = customizations[key]
    }
    else if (key === "jobs") {
      for (const jobId in customizations[key]) {
        resume.jobs[jobId] = customizations.jobs[jobId]
      }
    }
  }

  return resume
}


type Props = PropsWithChildren<{customizationKey?: string}>
export function ResumeContextProvider({children, customizationKey}: Props) {
  const [path] = useState(customizationKey || Math.floor(Math.random() * 2 ** 20).toString(36))
  const [customizations, setCustomizationsInner] = useState<Partial<Resume>>(customizationKey ? values.customizations[customizationKey] : {highlightedSkills: [], jobs: {}})
  const [resume, setResume] = useState<Resume>(applyCustomizations(values.resume, customizations))
  function setCustomizations(newCustomizations: Partial<Resume>) {
    setCustomizationsInner(newCustomizations)
    createCustomizationText({[path]: newCustomizations})
    setResume(applyCustomizations(resume, customizations))
  }

  const value: Resume & Partial<OverrideFunctions> = resume
  value.path = path
  value.setField = useCallback(
    function setField<T extends keyof Resume = keyof Resume>(field: T, value:  Resume[T]) {
      customizations[field] = value
      setCustomizations(customizations)
    },
  [customizations, setCustomizations])

  value.switchAssignmentState = useCallback(function(assignmentKey: string) {
    const prevState = resume.jobs[assignmentKey]?.state
    const state = prevState === "mini" ? "full" : prevState === "hidden" ? "mini" : "hidden"
    
    if (state === "full") {
      delete customizations.jobs[assignmentKey]
    }
    else {
      if (!(assignmentKey in customizations.jobs)) {
        customizations.jobs[assignmentKey] = resume.jobs[assignmentKey]
      }
      customizations.jobs[assignmentKey].state = state
    }
    setCustomizations(customizations)
  }, [customizations, setCustomizations])

  value.toggleHighlightSkill = useCallback(function(skill: string) {
    const skillIndex = customizations.highlightedSkills.indexOf(skill)
    if (skillIndex >= 0) {
      customizations.highlightedSkills.splice(skillIndex, 1)
    }
    else {
      customizations.highlightedSkills.push(skill)
    }
    setCustomizations(customizations)
  }, [customizations, setCustomizations])

  return <ResumeContext.Provider value={value as Resume & OverrideFunctions}>
    {children}
  </ResumeContext.Provider>
}