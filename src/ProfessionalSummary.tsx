import React, {useContext} from "react"
import {ResumeContext} from "./ResumeContext"

export function ProfessionalSummary() {
  const {professionalSummary} = useContext(ResumeContext)
  return <div>{professionalSummary}</div>
}