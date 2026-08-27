"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Icon_1 = require("./Icon");
const Anchor = styled_components_1.default.a `
  display: flex;
  color: var(--link-color, --text-color, black);
  align-items: center;
  &>:not(:last-child) {
    margin-right: var(--text-spacing, 1rem);
  }
`;
function Link({ href, title, icon }) {
    return <Anchor href={href}>
      {icon ? <Icon_1.Icon size="sm" src={icon} alt={`Icon for ${title || icon}`}/> : null}
      <span>{title || href}</span>
    </Anchor>;
}
exports.Link = Link;
