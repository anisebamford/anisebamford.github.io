import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { CustomizationsContext, Customizations } from "./CustomizationsContext";

type CustomizationsData = Omit<Customizations, "queryString" | "resetSkill" | "resetAssignment" | "highlightSkill" | "highlightAssignment">;

export function CustomizationsContextProvider({children}: PropsWithChildren) {
  const [customizations, setCustomizations] = useState<CustomizationsData>({
    highlightedAssignments: [],
    highlightedSkills: [],
  });

  const [queryString, setQueryString] = useState("")

  useEffect(() => {
    const newCustomizationsFromUrl: CustomizationsData  = {
      highlightedAssignments: [],
      highlightedSkills: [],
    }
    const urlSearchParams = new URLSearchParams(window.location.search)
    for (const key in newCustomizationsFromUrl) {
      if (urlSearchParams.get(key)) {
        newCustomizationsFromUrl[key] = decodeURIComponent(urlSearchParams.get(key)).split(",")
      }
    }
    setCustomizations(newCustomizationsFromUrl)
  }, [setCustomizations])

  const updateCustomizations = useCallback((customizations: CustomizationsData) => {
    setCustomizations({...customizations});
    const urlSearchParams = new URLSearchParams()
    for (const key in customizations) {
      if (customizations[key].length) {
        urlSearchParams.set(key, encodeURIComponent(customizations[key].join(",")));
      }
    }
    window.history.replaceState(null, "", `${window.location.origin}${window.location.pathname}?${urlSearchParams.toString()}`);
    setQueryString(urlSearchParams.toString())
  }, [setCustomizations])

  const resetSkill: Customizations["resetSkill"] = useCallback((skill: string) => {
    customizations.highlightedSkills.splice(customizations.highlightedSkills.indexOf(skill), 1),
    updateCustomizations(customizations);
  }, [updateCustomizations, customizations])

  const resetAssignment: Customizations["resetAssignment"] = useCallback((assignment: string) => {
    customizations.highlightedSkills.splice(customizations.highlightedAssignments.indexOf(assignment), 1),
    updateCustomizations(customizations)
  }, [customizations, updateCustomizations])

  const highlightAssignment: Customizations["highlightAssignment"] = useCallback((assignment: string) => {
    customizations.highlightedAssignments.push(assignment)
    updateCustomizations(customizations)
  }, [updateCustomizations, customizations])

  const highlightSkill: Customizations["highlightSkill"] = useCallback((skill: string) => {
    customizations.highlightedSkills.push(skill)
    updateCustomizations(customizations)
  }, [updateCustomizations, customizations])

  return <CustomizationsContext.Provider value={{
    highlightAssignment,
    highlightSkill,
    resetAssignment,
    resetSkill,
    queryString,
    ...customizations}}>
    {children}
  </CustomizationsContext.Provider>
}
