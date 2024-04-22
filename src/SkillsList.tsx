import React, { useRef, useState, useEffect, JSXElementConstructor } from "react";
import styled from "styled-components";
import { SeparatedListItem } from "./SeparatedListItem";

const SkillsStyle = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`

export function SkillsList({skills, SkillComponent}: {skills: string[], SkillComponent: JSXElementConstructor<{skill: string}>}) {
  const ref = useRef<HTMLUListElement>();
  const [leftEdge, setLeftEdge] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setLeftEdge(ref.current.getBoundingClientRect().left)
    }
  }, [ref, setLeftEdge])

  return <SkillsStyle ref={ref}>
    {skills.map((skill) => <SeparatedListItem startLeftPos={leftEdge} key={skill}><SkillComponent skill={skill} /></SeparatedListItem>)}
  </SkillsStyle>
}
