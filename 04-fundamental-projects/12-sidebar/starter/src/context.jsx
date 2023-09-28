import {createContext, useState, useContext} from  "react";

const AppContext = createContext();

export const AppProvider= ({children})=>{
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);

    
    return <AppContext.Provider>{children}</AppContext.Provider> 
}