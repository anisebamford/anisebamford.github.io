import React from "react";
import ReactDOM from "react-dom/client";
import { Resume } from "./Resume";

const search = new URLSearchParams(window.location.search)
const customizationKey = search.get("k") || ""
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Resume customizationKey={customizationKey}/>)
