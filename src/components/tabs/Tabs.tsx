import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTabContext } from "./tabs-context/TabContext";

const TabsHeaderComponent = ({ TabsData }: any) => {
  const { activeTab, setActiveTab } = useTabContext();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };


  return (
    <Tabs
      value={activeTab} 
      onChange={handleChange}
      sx={{  'css-9biaq2-MuiTabs-root':{maxHeight:"4px !important"} , '.css-ja771h-MuiButtonBase-root-MuiTab-root':{ minHeight :"46px"} }}
    >
      {TabsData.map((item: any) => (
        <Tab
         key={item.id}
          label={item.label}
          icon={item.icon}
          value={item.value}
          iconPosition="start"
          sx={{  height:"0px"  ,  "& .MuiButtonBase-root ": {
            padding: "0px",
            minHeight :"20px!"
           
          },}}
          
        
        />
      ))}
    </Tabs>
  );
};

export default TabsHeaderComponent;
