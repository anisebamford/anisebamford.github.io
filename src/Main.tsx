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

export const colorPrimary = "#31005f"
export const colorSecondary = "#6100bd"

const MainStyles = styled.div`
  --text-color: black;
  --text-spacing: 0.75rem;
  --line-spacing: 0.25rem;
  --text-font: roboto;
  --primary-color: ${colorPrimary};
  --secondary-color: ${colorSecondary};
  font-family: var(--text-font, monospace);
  color: var(--text-color, black);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(4, auto);
`

const SpanGridColumns = styled.div`
  grid-column: 1 / 2;
`

export function Main() {
  return <ResumeContextProvider>
    <CustomizationsContextProvider>
      <Reset />
      <MainStyles>
        <Header />
        <QR />
        <SpanGridColumns><ProfessionalSummary /></SpanGridColumns>
        <SpanGridColumns><Skills /></SpanGridColumns>
        <SpanGridColumns><Jobs /></SpanGridColumns>
      </MainStyles>
    </CustomizationsContextProvider>
  </ResumeContextProvider>
}
