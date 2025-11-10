"use client";
import{createContext as e,useState as t}from"react";import{jsx as r}from"react/jsx-runtime";const i=e({}),a=({initialActiveTab:e,className:a,children:c})=>{const[n,o]=t(e);return r("div",{className:a,children:r(i.Provider,{value:{activeTab:n,setActiveTab:o},children:c})})},c=()=>{const{activeTab:e}=useContext(i);return e};export{a as Tabs,i as TabsContext,c as useActiveTab};
//# sourceMappingURL=Tabs.js.map
