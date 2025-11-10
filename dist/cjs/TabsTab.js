"use client";
"use strict";var e=require("react"),t=require("./Tabs.js"),a=require("react/jsx-runtime");exports.TabsTab=({tabId:s,className:r,activeClassName:c,children:i})=>{const{activeTab:n,setActiveTab:b}=e.useContext(t.TabsContext),u=n===s;return a.jsx("button",{className:u&&c?c:r,onClick:()=>b(s),children:i})};
//# sourceMappingURL=TabsTab.js.map
