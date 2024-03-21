"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const knowledge_base_search_1 = __importDefault(require("./knowledge-base-search"));
const Insights = () => {
    return (react_1.default.createElement("div", { className: "p-4 bg-[#7EDEF1] rounded-b-xl min-h-72" },
        react_1.default.createElement("h3", { className: "text-lg leading-6 text-black mb-4 font-semibold" }, "Insights"),
        react_1.default.createElement(knowledge_base_search_1.default, null)));
};
exports.default = Insights;
