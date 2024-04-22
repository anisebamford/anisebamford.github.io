import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

const A = styled.a`
  display: flex;
  color: var(--link-color, --text-color, black);
  align-items: center;
  &>:not(:last-child) {
    margin-right: var(--text-spacing, 1rem);
  }
`

export function Link({href, title, icon}: {href: string, title?: string, icon?: string}) {
  return <A href={href}>
      {icon ?<Icon size="sm" src={icon} alt={`Icon for ${title || icon}`} /> : null}
      <span>{title || href}</span>
    </A>
}
