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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const SectionTitle_1 = require("./SectionTitle");
const Assignment_1 = require("./Assignment");
function Jobs() {
    const { jobs } = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    return <div>
    <SectionTitle_1.SectionTitle>Experience</SectionTitle_1.SectionTitle>
    {jobs.map((job, index) => <Assignment_1.Assignment assignment={job} key={index}/>)}
  </div>;
}
exports.Jobs = Jobs;
