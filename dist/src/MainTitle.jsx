"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTitle = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const TitleStyle = styled_components_1.default.h1 `
  color: var(--primary-color, --text-color, black);
  font-size: 1.5rem;
  margin-top: var(--text-spacing);
  font-weight: bold;
  font-family: title;
`;
function MainTitle({ children }) {
    return <TitleStyle>{children}</TitleStyle>;
}
exports.MainTitle = MainTitle;
