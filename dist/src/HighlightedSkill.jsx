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
exports.HighlightedSkill = exports.SkillStyle = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CustomizationsContext_1 = require("./CustomizationsContext");
exports.SkillStyle = styled_components_1.default.span `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color, --text-color, black);
  font-family: var(--skill-font, --text-font, monospace);
  padding: var(--text-spacing);
  &>span {
    padding-bottom: var(--text-spacing);
  }
`;
function HighlightedSkill({ skill }) {
    const { resetSkill } = (0, react_1.useContext)(CustomizationsContext_1.CustomizationsContext);
    const onClick = (0, react_1.useCallback)(() => {
        resetSkill(skill);
    }, [resetSkill]);
    const onError = function (err) {
        err.target.style.display = "none";
    };
    return <exports.SkillStyle onClick={onClick} role="button" tabIndex={0} aria-pressed={true}>
    <span>{skill}</span>
    <img src={`${skill}.svg`} height="90px" width="90px" onError={onError}/>
  </exports.SkillStyle>;
}
exports.HighlightedSkill = HighlightedSkill;
