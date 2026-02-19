import { createContext, useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Create a TabContext
const TabsContext = createContext("");

const TabsProvider = ({ children, initialTab, routingRequired }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get("tabname");

  const [activeTab, setActiveTab] = useState(
    routingRequired && urlTab ? urlTab : initialTab
  );

  // ✅ Sync tab → URL
  useEffect(() => {
    if (routingRequired) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("tabname", activeTab);
        return params;
      });
    }
  }, [activeTab, routingRequired, setSearchParams]);

  // ✅ Sync URL → tab (on refresh or manual change)
  useEffect(() => {
    if (routingRequired && urlTab && urlTab !== activeTab) {
      setActiveTab(urlTab);
    }
  }, [urlTab]);

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
