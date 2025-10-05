"use strict";var e=require("react"),r=require("react/jsx-runtime");const t=e.createContext({});exports.Tabs=({activeTab:s,children:i})=>{const[a,c]=e.useState(s);return r.jsx(t.Provider,{value:{activeTab:a,setActiveTab:c},children:i})},exports.TabsList=({children:e})=>r.jsx("div",{children:e}),exports.TabsPanels=({children:e})=>r.jsx("div",{children:e});
//# sourceMappingURL=index.js.map
