import React, { useContext, useEffect, useRef } from "react";
import qrcode from "qrcode";
import { ResumeContext } from "./ResumeContext";
import { CustomizationsContext } from "./CustomizationsContext";
import { colorPrimary } from "./Main";
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
  const customizations = useContext(CustomizationsContext)

  useEffect(() => {
    if (ref.current) {
      qrcode.toCanvas(ref.current, `${resume.website}/?${customizations.queryString}`, {width: 200, color: {dark: colorPrimary}})
    }
  }, [ref, resume.website, customizations])
  return <Style><canvas width="200" height="200" ref={ref}/></Style>
}
