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
exports.ResumeContextProvider = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const db_json_1 = __importDefault(require("../db.json"));
function createCustomizationText(customizationData, onComplete) {
    const clip = new ClipboardItem({ c: JSON.stringify(customizationData, null, 2) });
    navigator.clipboard.write([clip]).then(onComplete);
}
function applyCustomizations(resume, customizations) {
    for (const key in customizations) {
        if (typeof customizations[key] === "string") {
            resume[key] = customizations[key];
        }
        else if (key === "highlightedSkills") {
            resume[key] = customizations[key];
        }
        else if (key === "jobs") {
            for (const jobId in customizations[key]) {
                resume.jobs[jobId] = customizations.jobs[jobId];
            }
        }
    }
    return resume;
}
function ResumeContextProvider({ children, customizationKey }) {
    const [customizations, setCustomizationsInner] = (0, react_1.useState)(customizationKey ? db_json_1.default.customizations[customizationKey] : { highlightedSkills: [], jobs: {} });
    const [resume, setResume] = (0, react_1.useState)(applyCustomizations(db_json_1.default.resume, customizations));
    function setCustomizations(newCustomizations) {
        setCustomizationsInner(newCustomizations);
        createCustomizationText(newCustomizations);
        setResume(applyCustomizations(resume, customizations));
    }
    const value = resume;
    value.setField = (0, react_1.useCallback)(function setField(field, value) {
        customizations[field] = value;
        setCustomizations(customizations);
    }, [customizations, setCustomizations]);
    value.switchAssignmentState = (0, react_1.useCallback)(function (assignmentKey) {
        var _a;
        const prevState = (_a = resume.jobs[assignmentKey]) === null || _a === void 0 ? void 0 : _a.state;
        const state = prevState === "mini" ? "full" : prevState === "hidden" ? "mini" : "hidden";
        if (state === "full") {
            delete customizations.jobs[assignmentKey];
        }
        else {
            if (!(assignmentKey in customizations.jobs)) {
                customizations.jobs[assignmentKey] = resume.jobs[assignmentKey];
            }
            customizations.jobs[assignmentKey].state = state;
        }
        setCustomizations(customizations);
    }, [customizations, setCustomizations]);
    value.toggleHighlightSkill = (0, react_1.useCallback)(function (skill) {
        const skillIndex = customizations.highlightedSkills.indexOf(skill);
        if (skillIndex >= 0) {
            customizations.highlightedSkills.splice(skillIndex, 1);
        }
        else {
            customizations.highlightedSkills.push(skill);
        }
        setCustomizations(customizations);
    }, [customizations, setCustomizations]);
    return <ResumeContext_1.ResumeContext.Provider value={value}>
    {children}
  </ResumeContext_1.ResumeContext.Provider>;
}
exports.ResumeContextProvider = ResumeContextProvider;
