"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsList = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const SkillsListStyle = styled_components_1.default.ul `
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 360px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(autofill, auto);
  }
  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media print {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  list-style: none;
  justify-content: center;
  &>* {
    padding-left: var(--text-spacing, 1rem);
    padding-right: var(--text-spacing, 1rem);
    @media print {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
function SkillsList({ skills, SkillComponent }) {
    return <SkillsListStyle>
    {skills.map((skill) => <li key={skill}><SkillComponent skill={skill}/></li>)}
  </SkillsListStyle>;
}
exports.SkillsList = SkillsList;
