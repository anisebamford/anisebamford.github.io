import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { CustomizationsContext, Customizations } from "./CustomizationsContext";
import { v4 as uuid} from "uuid";

type CustomizationsData = Omit<Customizations, 
  "isLoggedIn" |
  "logIn" |
  "queryString" |
  "resetSkill" |
  "resetAssignment" |
  "highlightSkill" |
  "toggleHideAssignment"> & {id?: string}; 

  export function CustomizationsContextProvider({children}: PropsWithChildren) {
  const [customizations, setCustomizations] = useState<CustomizationsData>({
    hiddenAssignments: [],
    highlightedSkills: [],
    id: ""
  });

  const [queryString, setQueryString] = useState("")

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const logIn = () => setIsLoggedIn(true);

  useEffect(() => {
    const newCustomizationsFromUrl: CustomizationsData  = {
      hiddenAssignments: [],
      highlightedSkills: [],
      id: ""
    }
    const urlSearchParams = new URLSearchParams(window.location.search)
    for (const key in newCustomizationsFromUrl) {
      if (urlSearchParams.get(key)) {
        newCustomizationsFromUrl[key] = decodeURIComponent(urlSearchParams.get(key)).split(",")
      }
    }
    if (!newCustomizationsFromUrl.id && !newCustomizationsFromUrl.hiddenAssignments.length && !newCustomizationsFromUrl.highlightedSkills.length) {
      newCustomizationsFromUrl.id === uuid()
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
    customizations.highlightedSkills.splice(customizations.hiddenAssignments.indexOf(assignment), 1),
    updateCustomizations(customizations)
  }, [customizations, updateCustomizations])

  const toggleHideAssignment: Customizations["toggleHideAssignment"] = useCallback((assignment: string) => {
    if (customizations.hiddenAssignments.includes(assignment)) {
      customizations.hiddenAssignments.splice(customizations.hiddenAssignments.indexOf(assignment), 1)
    }
    else {
      customizations.hiddenAssignments.push(assignment)
    }
    updateCustomizations(customizations)
  }, [updateCustomizations, customizations])

  const highlightSkill: Customizations["highlightSkill"] = useCallback((skill: string) => {
    if (customizations.highlightedSkills.length < 5) {
      customizations.highlightedSkills.push(skill)
      updateCustomizations(customizations)  
    }
  }, [updateCustomizations, customizations])

  return <CustomizationsContext.Provider value={{
    toggleHideAssignment,
    highlightSkill,
    resetAssignment,
    resetSkill,
    queryString,
    isLoggedIn,
    logIn,
    ...customizations}}>
    {children}
  </CustomizationsContext.Provider>
}
