import React from "react";
import { Assignment as TAssignment } from "./ResumeContext";
import styled from "styled-components";
import { Separator } from "./Separator";
import { ElementTitle } from "./ElementTitle";

const AssignmentStyle = styled.div`
  page-break-inside: avoid;
  margin-bottom: var(--text-spacing);
`

const Position = styled.h4`
  font-size: 1.15rem;
  display: inline;
  color: var(--secondary-color, --text-color, black);
  font-style: italic;
  font-weight: normal;
`

const DateRange = styled.span`
  color: var(--text-color, black);
`

const Accomplishment = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 100%;
`

export function Assignment({assignment}: {assignment: TAssignment}) {
  const {company, location, start, end, position, accomplishments} = assignment;

  return <AssignmentStyle>
    <ElementTitle>{company}, {location}</ElementTitle> - <Position>{position}</Position><br />
    <DateRange>{start}{end ? ` - ${end}` : ""}</DateRange><br />
    {accomplishments.map((item, index) => <Accomplishment key={index}><Separator />{item}</Accomplishment>)}
  </AssignmentStyle>
}
