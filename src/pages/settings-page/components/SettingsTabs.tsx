import { AddToHomeScreen, ColorizeOutlined, CompareRounded, NotificationAddOutlined, PersonOffOutlined, Settings } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";


const settingsTabsData =[
    {
        id : 1,
        label : "Profile",
        icon : <PersonOffOutlined  color="primary"/>
    },
    {
        id : 2,
        label : "Notifications",
        icon : <NotificationAddOutlined  color="primary"/>
    },
    {
        id : 3,
        label : "Security",
        icon : <AddToHomeScreen  color="primary"/>
    },
    {
        id : 4,
        label : "Appearance",
        icon : <ColorizeOutlined  color="primary"/>
    },
    {
        id : 5,
        label : "Company",
        icon : <CompareRounded  color="primary"/> 
    }
]

const SettingsTabs = ({handleOnTabChange}:any) => {

  return( 
    <Box>
        {
            settingsTabsData.map((tab)=> 
             <div key={tab.id} onClick={()=> handleOnTabChange(tab.label.toLowerCase())} className="flex items-center gap-4 m-2 p-2 cursor-pointer text-app-secondary-800 hover:bg-app-primary-500 rounded">
                {tab.icon}
                <span>{tab.label}</span>
            </div>
            )
        }
    </Box>);
};

export default SettingsTabs;
