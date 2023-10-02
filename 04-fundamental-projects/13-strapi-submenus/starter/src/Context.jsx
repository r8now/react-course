import {createContext,useState,useContext} from "react"
const  AppContext= createContext();
export const AppProvider = ({children})=> {
const [isSidebarOpen,setIsSidebarOpen]  =  useState(false);

const openSidebar = ()=> {
    setIsSidebarOpen(true);
}

const closeSidebar = () => {
  setIsSidebarOpen(false);
};
return (
  <AppContext.Provider value={{ isSidebarOpen, closeSidebar }}>
    {children}
  </AppContext.Provider>
);
};

