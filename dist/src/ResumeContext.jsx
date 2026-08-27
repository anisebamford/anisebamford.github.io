"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeContext = void 0;
const react_1 = require("react");
exports.ResumeContext = (0, react_1.createContext)({
    highlightedSkills: [],
    skills: [],
    jobs: {},
    professionalSummary: "",
    name: "Anise Bamford",
    pronouns: "She/They",
    title: "Web Developer",
    linkedin: "https://www.linkedin.com/in/anise-bamford-bab747229/",
    github: "https://github.com/anisebamford/",
    email: "anisebamford@gmail.com",
    address: "Corvallis, OR 97330",
    phone: "(503) 327-6775",
    website: "",
    education: [],
    setField: (field, value) => { },
    switchAssignmentState: (assignmentKey) => { },
    toggleHighlightSkill: (skill) => { }
});
