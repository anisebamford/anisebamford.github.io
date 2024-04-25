import React, { useCallback, useContext } from "react"
import styled from "styled-components"
import { CustomizationsContext } from "./CustomizationsContext"

export const SkillStyle = styled.span`
  color: var(--text-color, black);
  font-family: var(--skill-font, --text-font, monospace);
  font-size: 0.8rem;
`

export function Skill({skill}: {skill: string}) {
  const {highlightSkill} = useContext(CustomizationsContext)
  const onClick = useCallback(() => {
      highlightSkill(skill)
  }, [highlightSkill])
  return <SkillStyle onClick={onClick}>{skill}</SkillStyle>
}
