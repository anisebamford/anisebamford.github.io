"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Resume_1 = require("./Resume");
const Login_1 = require("./Login");
const google_1 = require("@react-oauth/google");
function Router() {
    return (<google_1.GoogleOAuthProvider clientId="633937738281-vclvujsi4oosif6im7bthpgpln3tg473.apps.googleusercontent.com">
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="login" element={<Login_1.Login />}/>
          <react_router_dom_1.Route path="/" element={<Resume_1.Resume />}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </google_1.GoogleOAuthProvider>);
}
exports.Router = Router;
