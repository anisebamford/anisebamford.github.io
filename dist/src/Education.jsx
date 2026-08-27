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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const ElementTitle_1 = require("./ElementTitle");
const SectionTitle_1 = require("./SectionTitle");
const Section_1 = require("./Section");
const Separator_1 = require("./Separator");
const styled_components_1 = __importDefault(require("styled-components"));
const School = styled_components_1.default.div `
  display: grid;
  grid-template-columns: 1.5rem 100%;
`;
function Education() {
    const { education } = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    const renderableEducation = (0, react_1.useMemo)(() => {
        return education.map(({ school, startYear, endYear, major, degree }) => {
            return <School key={school}>
        <Separator_1.Separator />
        <div>
          <ElementTitle_1.ElementTitle>{school}</ElementTitle_1.ElementTitle><br />
          {degree ? `${degree} in ` : ""}{major} <br />
          {startYear} - {endYear} <br />
        </div>
      </School>;
        });
    }, [education]);
    return <Section_1.Section>
    <SectionTitle_1.SectionTitle>Education</SectionTitle_1.SectionTitle>
    {renderableEducation}
  </Section_1.Section>;
}
exports.Education = Education;
