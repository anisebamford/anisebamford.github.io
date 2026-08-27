"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionTitle = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const TitleStyles = styled_components_1.default.h4 `
  font-size: 1.5rem;
  color: var(--primary-color, --text-color, black);
  font-family: title;
  margin-bottom: calc(var(--text-spacing) * 0.5);
`;
function SectionTitle({ children }) {
    return <TitleStyles>{children}</TitleStyles>;
}
exports.SectionTitle = SectionTitle;
