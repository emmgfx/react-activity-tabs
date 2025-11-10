"use client";
"use strict";var e=require("react"),t=require("react/jsx-runtime");const r=e.createContext({});exports.Tabs=({initialActiveTab:s,className:a,children:c})=>{const[i,n]=e.useState(s);return t.jsx("div",{className:a,children:t.jsx(r.Provider,{value:{activeTab:i,setActiveTab:n},children:c})})},exports.TabsContext=r,exports.useActiveTab=()=>{const{activeTab:e}=useContext(r);return e};
//# sourceMappingURL=Tabs.js.map
