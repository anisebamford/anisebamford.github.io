import React, { useContext, useMemo } from "react";
import { ResumeContext } from "./ResumeContext";
import { ElementTitle } from "./ElementTitle";
import { SectionTitle } from "./SectionTitle";
import { Section } from "./Section";
import { Separator } from "./Separator";
import styled from "styled-components";

const School = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 100%;
`

export function Education() {
  const {education} = useContext(ResumeContext);
  const renderableEducation = useMemo(() => {
    return education.map(({school, startYear, endYear, major, degree}) => {
      return <School key={school}>
        <Separator />
        <div>
          <ElementTitle>{school}</ElementTitle><br />
          {degree ? `${degree} in ` : ""}{major} <br />
          {startYear} - {endYear} <br />
        </div>
      </School>
    })
  }, [education])
  return <Section>
    <SectionTitle>Education</SectionTitle>
    {renderableEducation}
  </Section>
}