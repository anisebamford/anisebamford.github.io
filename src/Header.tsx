import React, { useContext } from "react";
import { ResumeContext } from "./ResumeContext";
import styled from "styled-components";
import { MainTitle } from "./MainTitle";
import { CustomizationsContext } from "./CustomizationsContext";
import { Link } from "./Link";
import { Phone } from "./Phone";
import { Email } from "./Email";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  &>:not(:last-child) {
    margin-bottom: var(--line-spacing)
  }
`

export function Header() {
  const resume = useContext(ResumeContext);
  const customizations = useContext(CustomizationsContext);
  return <HeaderStyle>
    <MainTitle>{resume.name}</MainTitle>
    <span>{resume.pronouns}</span>
    <span>{resume.address}</span>
    <Email address={resume.email} />
    <Phone number={resume.phone} />
    <Link href={`${resume.website}/?${customizations.queryString}`} title={resume.website} icon="Website.svg" />
    <Link href={resume.linkedin} icon="LinkedIn.svg"/>
    <Link href={resume.github} icon="Github.svg"/>
  </HeaderStyle>
}
