"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const IconSizes = {
    "sm": "1rem",
    "md": "2rem",
    "lg": "3rem",
};
const Img = styled_components_1.default.img `
  height: ${(props) => props["$data-size"]};
  width: ${(props) => props["$data-size"]};
`;
function Icon({ src, alt, size }) {
    return <Img src={src} $data-size={IconSizes[size]} alt={alt}/>;
}
exports.Icon = Icon;
