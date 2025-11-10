"use client";
import{useContext as t}from"react";import{TabsContext as a}from"./Tabs.js";import{jsx as e}from"react/jsx-runtime";const r=({tabId:r,className:c,activeClassName:s,children:o})=>{const{activeTab:i,setActiveTab:m}=t(a);return e("button",{className:i===r&&s?s:c,onClick:()=>m(r),children:o})};export{r as TabsTab};
//# sourceMappingURL=TabsTab.js.map
