import React, { useCallback, useContext } from "react"
import styled from "styled-components"
import { CustomizationsContext } from "./CustomizationsContext"

export const SkillStyle = styled.span`
  color: var(--secondary-color, --text-color, black);
  font-family: var(--skill-font, --text-font, monospace);
`

export function HighlightedSkill({skill}: {skill: string}) {
  const {resetSkill} = useContext(CustomizationsContext)
  const onClick = useCallback(() => {
      resetSkill(skill)
  }, [resetSkill])
  return <SkillStyle onClick={onClick}>{skill}</SkillStyle>
}
