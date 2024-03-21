"use strict";
"use client";
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
const react_1 = __importStar(require("react"));
const script_tab_content_1 = __importDefault(require("./script-tab-content"));
const insights_1 = __importDefault(require("./insights"));
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const StaticSales = () => {
    const scriptTabs = [
        {
            id: "tab1",
            label: "Assist",
            content: react_1.default.createElement(script_tab_content_1.default, null),
        },
        { id: "tab2", label: "Transcript", content: react_1.default.createElement("div", null, "Coming Soon..") },
        { id: "tab3", label: "Feedback", content: react_1.default.createElement("div", null, "Coming Soon..") },
    ];
    const [activeTab, setActiveTab] = (0, react_1.useState)(scriptTabs[0].id);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "w-80" },
            react_1.default.createElement("div", { className: "p-4 pb-5 bg-[#97eeff] rounded-t-xl" },
                react_1.default.createElement("div", { className: "rounded-lg bg-[#7edff2] flex justify-between items-start mb-4" }, scriptTabs.map((tab) => (react_1.default.createElement("button", { type: "button", key: tab.id, className: classNames(activeTab === tab.id
                        ? "bg-[#1f1f1f] text-[#ffffff]"
                        : "bg-transparent text-[#1f1f1f]", "h-8 rounded-lg px-2 text-sm font-medium flex-1"), onClick: () => setActiveTab(tab.id) }, tab.label)))),
                react_1.default.createElement("div", { className: "" }, scriptTabs.map((tab) => (react_1.default.createElement("div", { key: tab.id, className: activeTab === tab.id ? "" : "hidden" }, tab.content))))),
            react_1.default.createElement(insights_1.default, null))));
};
exports.default = StaticSales;
