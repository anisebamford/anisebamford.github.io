import React from "react";
import { Assignment as TAssignment } from "./ResumeContext";
import styled from "styled-components";
import { Separator } from "./Separator";

const CompanyName = styled.h4`
  font-size: 1.3rem;
  display: inline;
  color: var(--secondary-color, --text-color, black);
  font-weight: bold;
`

const Position = styled.h4`
  font-size: 1.3rem;
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

  return <div>
    <CompanyName>{company}, {location}</CompanyName> - <Position>{position}</Position><br />
    <DateRange>{start}{end ? ` - ${end}` : ""}</DateRange><br />
    {accomplishments.map((item, index) => <Accomplishment key={index}><Separator />{item}</Accomplishment>)}
  </div>
}
