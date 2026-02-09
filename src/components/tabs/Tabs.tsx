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
      sx={{
        ".MuiBox-root": {
          background: "red",
        },
        "& .MuiTabs-indicator": {
          height: "4px",
          backgroundColor: "var(--app-primary-500)",
        },
        "& .MuiTabs-list": {
          gap: "8px",
        },
        "& .MuiTab-root ": {
          padding: "12px 10px",
        },
        "& .MuiTab-root": {
          color: "var(--app-text-secondary)",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          minHeight: "40px",
          "&.Mui-selected": {
            color: "var(--app-primary-500)",
            fontWeight: 600,
            borderRadius: "2px",
            backgroundColor: "var(--app-primary-100)", // 🔥 THIS is what you want
          },
          "&:hover": {
            color: "var(--app-primary-500)",
            backgroundColor: "var(--app-primary-100)",
          },
        },
      }}
    >
      {TabsData.map((item: any) => (
        <Tab
          key={item.id}
          label={item.label}
          icon={item.icon}
          value={item.value}
          iconPosition="start"
          sx={{
            gap: 1,
            "& .MuiSvgIcon-root": {
              fontSize: "1.125rem",
            },
          }}
          // sx={{}}
        />
      ))}
    </Tabs>
  );
};

export default TabsHeaderComponent;
