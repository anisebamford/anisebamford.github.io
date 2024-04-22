import React from "react";
import { Link } from "./Link";

export function Email({address}: {address: string}) {
  return <div>
    <Link href={`mailto:${address}`} title={address} icon="Email.svg"/>
  </div>
}
