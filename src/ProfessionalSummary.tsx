import React, {useContext} from "react"
import {ResumeContext} from "./ResumeContext"
import { SectionTitle } from "./SectionTitle"

export function ProfessionalSummary() {
  const {professionalSummary} = useContext(ResumeContext)
  return <div>
    <SectionTitle>Professional Summary</SectionTitle>
    {professionalSummary}
    </div>
}