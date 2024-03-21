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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const StaticSales = () => {
    const getAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('in access token function');
        let oauthKey = process.env.REACT_APP_OAUTH_KEY;
        let oauthSecret = process.env.REACT_APP_OAUTH_SECRET;
        console.log(oauthKey, oauthSecret);
        const oauthCredentials = btoa(`${oauthKey}:${oauthSecret}`);
        let data = '';
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api-dv.brightspeed.com/genai/oauth/client_credential/accesstoken?grant_type=client_credentials',
            headers: {
                Authorization: `Basic ${oauthCredentials}`,
            },
            data: data,
        };
        try {
            console.log('before axios request start');
            const response = yield axios_1.default.request(config);
            console.log('after axios request');
            const { issued_at, expires_in } = response.data;
            localStorage.setItem('issued_at', issued_at);
            localStorage.setItem('expires_in', expires_in);
            console.log('access_token: ', response.data);
            return response.data.access_token;
        }
        catch (error) {
            console.log(error);
        }
    });
    const handleAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('getting access tokens here');
        const accessToken = yield getAccessToken();
        if (accessToken) {
            console.log('Access Token from response: ', accessToken);
        }
    });
    const insightsTabs = [
        {
            id: 'tab1',
            label: 'Assist',
            content: react_1.default.createElement("div", null, "Assist"),
        },
        { id: 'tab2', label: 'Transcript', content: react_1.default.createElement("div", null, "Coming Soon..") },
        { id: 'tab3', label: 'Feedback', content: react_1.default.createElement("div", null, "Coming Soon..") },
    ];
    const [activeTab, setActiveTab] = (0, react_1.useState)(insightsTabs[0].id);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "w-80" },
            react_1.default.createElement("div", { className: "p-4 bg-[#97eeff] rounded-t-xl" },
                react_1.default.createElement("div", { className: "rounded-lg bg-[#7edff2] flex justify-between items-start mb-4" }, insightsTabs.map((tab) => (react_1.default.createElement("button", { type: "button", key: tab.id, className: classNames(activeTab === tab.id ? 'bg-[#1f1f1f] text-white' : 'bg-transparent text-[#1f1f1f]', 'h-8 rounded-lg px-2 text-sm font-medium flex-1'), onClick: () => setActiveTab(tab.id) }, tab.label)))),
                react_1.default.createElement("div", { className: "" }, insightsTabs.map((tab) => (react_1.default.createElement("div", { key: tab.id, className: activeTab === tab.id ? '' : 'hidden' }, tab.content)))),
                react_1.default.createElement("button", { type: "button", onClick: handleAccessToken }, "Miracle!")))));
};
exports.default = StaticSales;
