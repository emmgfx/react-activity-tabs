"use client";
"use strict";var e=require("react"),r=require("./Tabs.js"),s=require("react/jsx-runtime");exports.TabsPanel=({tabId:t,className:i,children:a})=>{const{activeTab:c}=e.useContext(r.TabsContext);return s.jsx(e.Activity,{mode:c===t?"visible":"hidden",children:s.jsx("div",{className:i,children:a})})};
//# sourceMappingURL=TabsPanel.js.map
