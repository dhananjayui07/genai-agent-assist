"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Wrapper = ({ text }) => {
    return react_1.default.createElement("div", { className: "text-sky-500" }, text);
};
exports.default = Wrapper;
