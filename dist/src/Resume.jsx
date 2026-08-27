"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resume = exports.colorSecondary = exports.colorPrimary = void 0;
const react_1 = __importDefault(require("react"));
const ResumeContextProvider_1 = require("./ResumeContextProvider");
const Skills_1 = require("./Skills");
const styled_reset_1 = require("styled-reset");
const styled_components_1 = __importDefault(require("styled-components"));
const Jobs_1 = require("./Jobs");
const Header_1 = require("./Header");
const ProfessionalSummary_1 = require("./ProfessionalSummary");
const Section_1 = require("./Section");
const Education_1 = require("./Education");
exports.colorPrimary = "#31005f";
exports.colorSecondary = "#6100bd";
const MainStyles = styled_components_1.default.div `
  @font-face {
    font-family: text;
    src: url(NotoSans.ttf);
  }
  @font-face {
    font-family: title;
    src: url(NotoSerif_Condensed-SemiBold.ttf);
  }
  --text-color: black;
  --text-spacing: 0.75rem;
  --line-spacing: 0.25rem;
  --text-font: text;
  --title-font: title;
  --primary-color: ${exports.colorPrimary};
  --secondary-color: ${exports.colorSecondary};
  --background-color: white;
  font-family: text;
  color: var(--text-color, black);
  margin: calc(var(--text-spacing) * 2) calc(var(--text-spacing) * 2);
`;
function Resume() {
    return <ResumeContextProvider_1.ResumeContextProvider>
    <styled_reset_1.Reset />
    <MainStyles>
      <Header_1.Header />
      <Section_1.Section><ProfessionalSummary_1.ProfessionalSummary /></Section_1.Section>
      <Section_1.Section><Skills_1.Skills /></Section_1.Section>
      <Section_1.Section><Jobs_1.Jobs /></Section_1.Section>
      <Education_1.Education />
    </MainStyles>
  </ResumeContextProvider_1.ResumeContextProvider>;
}
exports.Resume = Resume;
