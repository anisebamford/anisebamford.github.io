import React from "react";
import { Link } from "./Link";

export function Phone({number}: {number: string}) {
  return <Link href={`tel:${number}`} title={number} icon="Phone.svg"/>
}