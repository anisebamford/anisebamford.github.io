"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementTitle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ElementTitle = styled_components_1.default.h4 `
  font-size: 1.15rem;
  display: inline;
  color: var(--secondary-color, --text-color, black);
  font-weight: bold;
`;
