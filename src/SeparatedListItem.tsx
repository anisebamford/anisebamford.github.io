import React, { PropsWithChildren, useRef, useState, useEffect } from "react";
import styled from "styled-components";

const LiStyle = styled.li`
  flex-grow: 1;
  text-align: center;
  position: relative;
  &[data-is-first-in-row="false"]::before {
    content: "•";
    position: absolute;
    color: var(--text-color);
    left: -0.2rem;
  }
  &>* {
    padding-left: calc(var(--text-spacing, 1rem) * 2);
    padding-right: calc(var(--text-spacing, 1rem) * 2);
  }
`

export function SeparatedListItem({startLeftPos, children}: PropsWithChildren<{startLeftPos: number}>) {
  const ref = useRef<HTMLLIElement>();
  const [isStartOfRow, setIsStartOfRow] = useState(false);
  const [leftPos, setLeft] = useState(-1)
  useEffect(() => {
    if (ref.current) {
      setLeft(ref.current.getBoundingClientRect().left);
      if (ref.current.getBoundingClientRect().left === startLeftPos) {
        setIsStartOfRow(true)
      }
    }
  }, [ref, setIsStartOfRow])

  return <LiStyle data-is-first-in-row={isStartOfRow} data-left-pos={leftPos} data-container-left={startLeftPos} ref={ref}>{children}</LiStyle>
}