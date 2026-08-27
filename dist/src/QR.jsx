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
exports.QR = void 0;
const react_1 = __importStar(require("react"));
const qrcode_1 = __importDefault(require("qrcode"));
const ResumeContext_1 = require("./ResumeContext");
const Resume_1 = require("./Resume");
const styled_components_1 = __importDefault(require("styled-components"));
const Style = styled_components_1.default.div `
  display: none;
  @media print {
    display: block;
  }
`;
function QR() {
    const ref = (0, react_1.useRef)();
    const resume = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            qrcode_1.default.toCanvas(ref.current, `${resume.website}/${resume.overrideKey}`, { width: 125, color: { dark: Resume_1.colorPrimary } });
        }
    }, [ref, resume.website, resume.overrideKey]);
    return <Style><canvas width="125" height="125" ref={ref}/></Style>;
}
exports.QR = QR;
