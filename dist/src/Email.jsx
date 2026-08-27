"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const react_1 = __importDefault(require("react"));
const Link_1 = require("./Link");
function Email({ address }) {
    return <div>
    <Link_1.Link href={`mailto:${address}`} title={address} icon="Email.svg"/>
  </div>;
}
exports.Email = Email;
