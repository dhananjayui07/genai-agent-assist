"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ScriptTabContent = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", { className: "mb-2 text-lg leading-6 text-black  font-semibold capitalize" }, "Step 1: Available Plans"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("div", { className: "text-black m-0 text-xs leading-4" }, "Select the right plan for the customer\u2019s needs. For customers only qualifying for DSL/Copper, only the best speed available is displayed.")),
                react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                    react_1.default.createElement("div", { className: "text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]" },
                        react_1.default.createElement("p", { className: "m-0 leading-[18px] font-semibold" }, "\u201CWhat address are you seeking service for?\u201D")),
                    react_1.default.createElement("div", { className: "text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]" },
                        react_1.default.createElement("p", { className: "m-0 leading-[18px] font-semibold" }, "\u201CWhat address are you seeking service for?\u201D")),
                    react_1.default.createElement("div", { className: "text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]" },
                        react_1.default.createElement("p", { className: "m-0 leading-[18px] font-semibold" }, "\u201CWhat address are you seeking service for?\u201D")),
                    react_1.default.createElement("div", { className: "text-black text-xs items-stretch rounded-t-3xl rounded-bl-3xl bg-[#CDF6FF] p-3 border border-[#22C5E6]" },
                        react_1.default.createElement("p", { className: "m-0 leading-[18px] font-semibold" }, "\u201CDo you currently reside at this address, or are you moving to this address?\u201D")))))));
};
exports.default = ScriptTabContent;
