import React, { useContext } from "react"
import { ResumeContext } from "./ResumeContext"
import { SectionTitle } from "./SectionTitle"
import { CustomizationsContext } from "./CustomizationsContext"
import { SkillsList } from "./SkillsList"
import { HighlightedSkill } from "./HighlightedSkill"
import { Skill } from "./Skill"

export function Skills() {
  const {skills} = useContext(ResumeContext)
  const {highlightedSkills} = useContext(CustomizationsContext);

  const filteredSkills = skills.filter((skill: string) => !highlightedSkills.includes(skill))

  return <div>
    <SectionTitle>Skills</SectionTitle>
    {highlightedSkills.length ? <SkillsList skills={highlightedSkills} SkillComponent={HighlightedSkill} /> : null}
    {filteredSkills.length ? <SkillsList skills={filteredSkills} SkillComponent={Skill} /> : null}
  </div>
}
