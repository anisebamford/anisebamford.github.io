import React, { ReactEventHandler, useCallback, useContext } from "react"
import styled from "styled-components"
import { CustomizationsContext } from "./CustomizationsContext"

export const SkillStyle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color, --text-color, black);
  font-family: var(--skill-font, --text-font, monospace);
  padding: var(--text-spacing);
  &>span {
    padding-bottom: var(--text-spacing);
  }
`

export function HighlightedSkill({skill}: {skill: string}) {
  const {resetSkill} = useContext(CustomizationsContext)
  const onClick = useCallback(() => {
      resetSkill(skill)
  }, [resetSkill])
  const onError: ReactEventHandler<HTMLImageElement> = function (err) {
    (err.target as HTMLImageElement).style.display = "none"
  }
  return <SkillStyle onClick={onClick} role="button" tabIndex={0} aria-pressed={true}>
    <span>{skill}</span>
    <img src={`${skill}.svg`} height="90px" width="90px" onError={onError}/>
  </SkillStyle>
}
