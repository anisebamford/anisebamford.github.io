"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSection = styled_components_1.default.div `
  margin-bottom: calc(var(--text-spacing) * 2);
`;
function Section({ children }) {
    return <StyledSection>{children}</StyledSection>;
}
exports.Section = Section;
