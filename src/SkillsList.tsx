import React, { useRef, useState, useEffect, JSXElementConstructor } from "react";
import styled from "styled-components";
import { SeparatedListItem } from "./SeparatedListItem";

const SkillsStyle = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 360px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(autofill, auto);
  }
  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media print {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
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
