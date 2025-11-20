import { createContext, useState, useContext } from "react";

// Create a TabContext
const TabsContext = createContext('');

const TabsProvider = ({ children, initialTab }: any) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsProvider };

export const useTabContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabContext must be used within a TabsProvider");
  }

  return context;
};
