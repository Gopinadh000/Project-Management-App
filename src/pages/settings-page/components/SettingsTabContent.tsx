import React from "react";
import ProfileTabContent from "../forms/ProfileTabContent";
import CompanyTabContent from "../forms/CompanyTabContent";
import PreferenceTabContent from "../forms/PreferenceTabContent";
import ApperanceTabContent from "../forms/ApperanceTabContent";
import SecurityTabContent from "../forms/SecurityTabContent";
import { Notifications } from "@mui/icons-material";
import NotificationsTabContent from "../forms/NotificationsTabContent";

const SettingsTabContent = ({tabName}:any) => {

    const renderTabContent =()=>{
        switch(tabName){
            case "profile":
                return <ProfileTabContent/>
            case "notifications":
                return <NotificationsTabContent/>
            case "company":
                return <CompanyTabContent/>
            case "preference":
                return <PreferenceTabContent/>
            case "appearance":
                return <ApperanceTabContent/>
            case "security":
                return <SecurityTabContent/>
            default:
                return <ProfileTabContent/>
        }
    }

  return( <div className="p-4 border shadow-md rounded h-full">
    {renderTabContent()}
    </div>);
};

export default SettingsTabContent;
