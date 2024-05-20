import { GoogleLogin } from "@react-oauth/google";
import React, { useContext } from "react";
import { CustomizationsContext } from "./CustomizationsContext";

export function Login() {
  const {logIn} = useContext(CustomizationsContext)
  return <GoogleLogin
    onSuccess={logIn}
    useOneTap
  />
}
