import React, { useCallback, useContext } from "react";
import { Assignment as TAssignment } from "./ResumeContext";
import styled from "styled-components";
import { Separator } from "./Separator";
import { ElementTitle } from "./ElementTitle";
import { CustomizationsContext } from "./CustomizationsContext";

const AssignmentStyle = styled.div`
  page-break-inside: avoid;
  margin-bottom: var(--text-spacing);
  &[data-is-hidden="true"] {
    @media print {
      display: none;
    }
  }
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
  const {hiddenAssignments, toggleHideAssignment} = useContext(CustomizationsContext)
  const {company, location, start, end, position, accomplishments} = assignment;

  const isHidden = hiddenAssignments.includes(company)

  return <AssignmentStyle data-is-hidden={isHidden} onClick={() => toggleHideAssignment(company)}>
    <ElementTitle>{company}, {location}</ElementTitle> - <Position>{position}</Position><br />
    <DateRange>{start}{end ? ` - ${end}` : ""}</DateRange><br />
    {isHidden ? null : accomplishments.map((item, index) => <Accomplishment key={index}><Separator />{item}</Accomplishment>)}
  </AssignmentStyle>
}
