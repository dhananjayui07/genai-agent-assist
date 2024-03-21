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
const react_1 = __importStar(require("react"));
const use_click_outside_1 = __importDefault(require("../use-click-outside"));
const KnowledgeBaseSearch = () => {
    const inputRef = (0, react_1.useRef)(null);
    const suggestionBoxRef = (0, react_1.useRef)(null);
    const [stepFaqs] = (0, react_1.useState)([
        {
            faq: "What is Lorem Ipsum?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            faq: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            faq: "Where does it come from?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
    ]);
    const [suggestions, setSuggestions] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    let suggestionsData = [
        { faq: "What is Lorem Ipsum?" },
        { faq: "Why do we use it?" },
        { faq: "Where does it come from?" },
        { faq: "What is Lorem Ipsum Generator?" },
        { faq: "How to generate Lorem Ipsum text?" },
    ];
    const handleInputChange = (0, react_1.useCallback)((event) => {
        const searchQuery = event.target.value.trim();
        console.log("Search Query: ", searchQuery);
    }, []);
    const handleInputFocus = () => {
        setSuggestions(suggestionsData);
    };
    const handleSuggestionClick = (0, react_1.useCallback)((suggestion) => {
        if (inputRef.current) {
            inputRef.current.value = suggestion;
            setSuggestions([]);
        }
    }, []);
    const handleClickOutside = () => {
        setSuggestions([]);
    };
    (0, use_click_outside_1.default)(suggestionBoxRef, handleClickOutside);
    const handleSendButtonClick = () => {
        var _a;
        const inputValue = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value.trim();
        if (!inputValue) {
            setErrorMessage("Please enter a search query");
            return;
        }
        setLoading(true);
        console.log("Input Value: ", inputValue);
        // Reset error message when send button is clicked with valid input
        setErrorMessage("");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex rounded-lg bg-[#CDF6FF]" },
            react_1.default.createElement("div", { className: "relative flex h-10 rounded-lg flex-grow items-stretch focus-within:z-10" },
                react_1.default.createElement("input", { type: "text", ref: inputRef, className: "block h-10 w-full outline-none bg-[#CDF6FF] focus:bg-white rounded-lg border-0 py-1.5 pl-3 text-[#1F1F1F] ring-0 focus:border-none focus:ring-0 focus-visible:ring-0 placeholder:text-[#1F1F1F] text-sm font-normal", placeholder: "Ask a question", onFocus: handleInputFocus, onChange: handleInputChange }),
                react_1.default.createElement("button", { type: "button", onClick: handleSendButtonClick, className: "absolute right-2 top-2 w-6 h-6 flex items-center justify-center rounded-full text-xs font-normal text-white bg-black" }, loading ? "..." : "GO"),
                suggestions.length > 0 && (react_1.default.createElement("div", { ref: suggestionBoxRef, className: "absolute z-10 w-full bg-white shadow-sm rounded-b-lg px-2 pt-1 top-9 overflow-hidden" },
                    react_1.default.createElement("div", { className: "pb-3" },
                        react_1.default.createElement("div", { className: "mb-2 h-[1px] bg-[#f1f1f1]" }),
                        suggestions.map((suggestion, index) => (react_1.default.createElement("div", { key: index, className: "px-2 py-1 cursor-pointer text-xs leading-5 font-semibold", onClick: () => handleSuggestionClick(suggestion.faq) }, suggestion.faq)))))))),
        errorMessage && (react_1.default.createElement("p", { className: "text-red-700 font-medium text-[12px] mt-2" }, errorMessage))));
};
exports.default = KnowledgeBaseSearch;
