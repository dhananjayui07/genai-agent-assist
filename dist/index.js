"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentAssist = void 0;
const react_1 = __importDefault(require("react"));
const wrapper_1 = __importDefault(require("./components/wrapper"));
require("./styles.css");
const AgentAssist = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(wrapper_1.default, { text: "Agent assist wrapper!" })));
};
exports.AgentAssist = AgentAssist;
