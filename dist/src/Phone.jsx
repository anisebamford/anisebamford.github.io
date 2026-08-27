"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const react_1 = __importDefault(require("react"));
const Link_1 = require("./Link");
function Phone({ number }) {
    return <Link_1.Link href={`tel:${number}`} title={number} icon="Phone.svg"/>;
}
exports.Phone = Phone;
