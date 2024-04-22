import React, {PropsWithChildren, useEffect, useState} from "react"
import { Resume, ResumeContext } from "./ResumeContext"
import values from "../db.json"

export function ResumeContextProvider({children}: PropsWithChildren) {

  return <ResumeContext.Provider value={values}>
    {children}
  </ResumeContext.Provider>
}