import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin-bottom: calc(var(--text-spacing) * 2);
`

export function Section({children}: PropsWithChildren) {
  return <StyledSection>{children}</StyledSection>
}