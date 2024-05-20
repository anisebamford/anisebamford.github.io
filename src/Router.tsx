import React from "react"

import { Routes, Route, BrowserRouter} from "react-router-dom"
import { Resume } from "./Resume";
import { Login } from "./Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Router() {
  return (
    <GoogleOAuthProvider clientId="633937738281-vclvujsi4oosif6im7bthpgpln3tg473.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
