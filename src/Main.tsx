import React from "react";
import { ResumeContextProvider } from "./ResumeContextProvider";
import { Skills } from "./Skills";
import { Reset } from "styled-reset";
import styled from "styled-components"
import { Jobs } from "./Jobs";
import { CustomizationsContextProvider } from "./CustomizationsContextProvider";
import { Header } from "./Header";
import { QR } from "./QR";
import { ProfessionalSummary } from "./ProfessionalSummary";
import { Section } from "./Section";

export const colorPrimary = "#31005f"
export const colorSecondary = "#6100bd"

const MainStyles = styled.div`
  @font-face {
    font-family: text;
    src: url(NotoSans.ttf);
  }
  @font-face {
    font-family: title;
    src: url(NotoSerif_Condensed-SemiBold.ttf);
  }
  --text-color: black;
  --text-spacing: 0.75rem;
  --line-spacing: 0.25rem;
  --text-font: text;
  --title-font: title;
  --primary-color: ${colorPrimary};
  --secondary-color: ${colorSecondary};
  font-family: text;
  color: var(--text-color, black);
  margin: calc(var(--text-spacing) * 2) calc(var(--text-spacing) * 2);
`

export function Main() {
  return <ResumeContextProvider>
    <CustomizationsContextProvider>
      <Reset />
      <MainStyles>
        <Section><Header /></Section>
        <Section><ProfessionalSummary /></Section>
        <Section><Skills /></Section>
        <Section><Jobs /></Section>
      </MainStyles>
    </CustomizationsContextProvider>
  </ResumeContextProvider>
}
