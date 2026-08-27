import React, { useContext } from "react";
import { ResumeContext } from "./ResumeContext";
import { SectionTitle } from "./SectionTitle";
import { Assignment } from "./Assignment";

export function Jobs() {
  const {jobs} = useContext(ResumeContext);
  return <div>
    <SectionTitle>Experience</SectionTitle>
    {Object.keys(jobs).map((job, index) => <Assignment assignment={jobs[job]} key={job} />)}
  </div>
}