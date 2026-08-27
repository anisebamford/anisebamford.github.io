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
exports.Assignment = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const styled_components_1 = __importDefault(require("styled-components"));
const Separator_1 = require("./Separator");
const ElementTitle_1 = require("./ElementTitle");
const AssignmentStyle = styled_components_1.default.div `
  page-break-inside: avoid;
  margin-bottom: var(--text-spacing);
  &[data-visibility="hidden"] {
    @media print {
      display: none;
    }
  }
`;
const Position = styled_components_1.default.h4 `
  font-size: 1.15rem;
  display: inline;
  color: var(--secondary-color, --text-color, black);
  font-style: italic;
  font-weight: normal;
`;
const DateRange = styled_components_1.default.span `
  color: var(--text-color, black);
`;
const Accomplishment = styled_components_1.default.div `
  display: grid;
  grid-template-columns: 1.5rem 100%;
`;
function Assignment({ assignment, key }) {
    const { switchAssignmentState } = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    const { company, location, start, end, position, accomplishments, state } = assignment;
    return <AssignmentStyle data-visibility={state} onClick={() => switchAssignmentState(company)}>
    <ElementTitle_1.ElementTitle>{company}, {location}</ElementTitle_1.ElementTitle> - <Position>{position}</Position><br />
    <DateRange>{start}{end ? ` - ${end}` : ""}</DateRange><br />
    {state === "hidden" || state === "mini" ? null : accomplishments.map((item, index) => <Accomplishment key={index}><Separator_1.Separator />{item}</Accomplishment>)}
  </AssignmentStyle>;
}
exports.Assignment = Assignment;
