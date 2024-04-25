import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const TitleStyles = styled.h4`
  font-size: 1.5rem;
  color: var(--primary-color, --text-color, black);
  font-family: title;
  margin-bottom: calc(var(--text-spacing) * 0.25);
`

export function SectionTitle({children}: PropsWithChildren) {
  return <TitleStyles>{children}</TitleStyles>
}
