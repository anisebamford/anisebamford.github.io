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
exports.Skill = exports.SkillStyle = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CustomizationsContext_1 = require("./CustomizationsContext");
exports.SkillStyle = styled_components_1.default.span `
  color: var(--text-color, black);
  font-family: var(--skill-font, --text-font, monospace);
  font-size: 0.8rem;
  @media print {
    font-size:  0.1rem;
    color: var(--background-color, white);
  }
`;
function Skill({ skill }) {
    const { highlightSkill } = (0, react_1.useContext)(CustomizationsContext_1.CustomizationsContext);
    const onClick = (0, react_1.useCallback)(() => {
        highlightSkill(skill);
    }, [highlightSkill]);
    return <exports.SkillStyle onClick={onClick} role="button" tabIndex={0} aria-pressed={false}>{skill}</exports.SkillStyle>;
}
exports.Skill = Skill;
