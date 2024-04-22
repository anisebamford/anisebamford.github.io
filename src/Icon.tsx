import React from "react"
import styled from "styled-components"

const IconSizes = {
  "sm": "1rem",
  "md": "2rem",
  "lg": "3rem",
}

const Img = styled.img<{"$data-size": string}>`
  height: ${(props) => props["$data-size"]};
  width: ${(props) => props["$data-size"]};
`

export function Icon({src, alt, size}: {src: string, size: keyof typeof IconSizes, alt: string}) {
  return <Img src={src} $data-size={IconSizes[size]} alt={alt}/>
}
