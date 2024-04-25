import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
  color: var(--primary-color, --text-color, black);
  font-size: 1.5rem;
  margin-top: var(--text-spacing);
  font-weight: bold;
  font-family: title;
`

export function MainTitle({children}: PropsWithChildren) {
  return <TitleStyle>{children}</TitleStyle>
}