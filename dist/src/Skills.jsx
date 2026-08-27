"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const SectionTitle_1 = require("./SectionTitle");
const CustomizationsContext_1 = require("./CustomizationsContext");
const SkillsList_1 = require("./SkillsList");
const HighlightedSkill_1 = require("./HighlightedSkill");
const Skill_1 = require("./Skill");
function Skills() {
    const { skills } = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    const { highlightedSkills } = (0, react_1.useContext)(CustomizationsContext_1.CustomizationsContext);
    const filteredSkills = skills.filter((skill) => !highlightedSkills.includes(skill)).sort();
    return <div>
    <SectionTitle_1.SectionTitle>Skills</SectionTitle_1.SectionTitle>
    {highlightedSkills.length ? <SkillsList_1.SkillsList skills={highlightedSkills} SkillComponent={HighlightedSkill_1.HighlightedSkill}/> : null}
    {filteredSkills.length ? <SkillsList_1.SkillsList skills={filteredSkills} SkillComponent={Skill_1.Skill}/> : null}
  </div>;
}
exports.Skills = Skills;
