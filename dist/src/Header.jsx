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
exports.Header = void 0;
const react_1 = __importStar(require("react"));
const ResumeContext_1 = require("./ResumeContext");
const styled_components_1 = __importDefault(require("styled-components"));
const MainTitle_1 = require("./MainTitle");
const CustomizationsContext_1 = require("./CustomizationsContext");
const Link_1 = require("./Link");
const Phone_1 = require("./Phone");
const Email_1 = require("./Email");
const QR_1 = require("./QR");
const Section_1 = require("./Section");
const BotBait_1 = require("./BotBait");
const HeaderStyle = styled_components_1.default.div `
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
`;
const HeaderTextStyle = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  &>:not(:last-child) {
    margin-bottom: var(--line-spacing)
  }
`;
function Header() {
    const resume = (0, react_1.useContext)(ResumeContext_1.ResumeContext);
    const customizations = (0, react_1.useContext)(CustomizationsContext_1.CustomizationsContext);
    return <Section_1.Section>
    <HeaderStyle>
      <HeaderTextStyle>
      <BotBait_1.BotBait />
      <MainTitle_1.MainTitle>{resume.name}</MainTitle_1.MainTitle>
      <span>{resume.pronouns}</span>
      <span>{resume.address}</span>
      <Email_1.Email address={resume.email}/>
      <Phone_1.Phone number={resume.phone}/>
      <Link_1.Link href={`${resume.website}/?${customizations.queryString}`} title={resume.website} icon="Website.svg"/>
      <Link_1.Link href={resume.linkedin} icon="LinkedIn.svg"/>
      <Link_1.Link href={resume.github} icon="Github.svg"/>
      </HeaderTextStyle>
      <QR_1.QR />
    </HeaderStyle>
  </Section_1.Section>;
}
exports.Header = Header;
