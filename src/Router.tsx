import React from "react"

import { Routes, Route, BrowserRouter} from "react-router"
import { Resume } from "./Resume";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:customizationKey" element={<Resume customizationKey=""/>} />
      </Routes>
    </BrowserRouter>
  );
}
