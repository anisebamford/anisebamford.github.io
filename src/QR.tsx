import React, { useContext, useEffect, useRef } from "react";
import qrcode from "qrcode";
import { ResumeContext } from "./ResumeContext";
import { colorPrimary } from "./Resume";
import styled from "styled-components"

const Style = styled.div`
  display: none;
  @media print {
    display: block;
  }
`

export function QR() {
  const ref = useRef<HTMLCanvasElement>();
  const resume = useContext(ResumeContext);

  useEffect(() => {
    if (ref.current) {
      qrcode.toCanvas(ref.current, `${resume.website}/${resume.overrideKey}`, {width: 125, color: {dark: colorPrimary}})
    }
  }, [ref, resume.website, resume.overrideKey])
  return <Style><canvas width="125" height="125" ref={ref}/></Style>
}
