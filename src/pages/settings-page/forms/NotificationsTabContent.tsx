import { Box, Switch } from "@mui/material";
import React from "react";


const notificationsData = [
    {
        id : "email",
        name : "Email Notifications" ,
        description : "Receive notifications via email for important updates and alerts.",
        value : true
    },
    {
        id : "task_assignaments",
        name : "Task Assignments" ,
        description : "Get notified when you are assigned a new task or when there are updates to your existing tasks.",
        value : true
    },
    {
        id : "project_updates",
        name : "Project Updates" ,
        description : "Stay informed about project progress, milestones, and changes.",
        value : true
    },
    {
        id : "reminders",
        name : "Reminders" ,
        description : "Receive reminders for upcoming deadlines, meetings, and important events.",
        value : true
    },
    {
        id : "comments",
        name : "Comments" ,
        description : "Get notified when someone comments on your tasks, projects, or mentions you in discussions.",
        value : true
    },
    {
        id : "mentions",
        name : "Mentions" ,
        description : "Receive notifications when you are mentioned in comments, tasks, or project updates.",
        value : false
    }
]




const NotificationsTabContent = () => {

    const [notifications, setNotifications] = React.useState(notificationsData);


    const handleChange = (event:any) => {
        const { id, checked } = event.target;
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === id ? { ...notification, value: checked } : notification
          )
        );  
       
    };


  return( <div className="flex flex-col h-full overflow-auto">
    <h6>Profile Settings</h6>
     <p className="text-xs text-app-secondary-400">Update your personal information</p>
     <Box className="flex flex-col gap-4 mt-3   h-full "> 
        {
            notifications.map((notification)=> 
            <Box key={notification.id} className="flex  flex-row gap-4 items-center justify-between border border-app-secondary-100 p-4  hover:bg-app-primary-50 rounded">
                <Box className="flex flex-col gap-1">
                    <h6 className="text-sm flex gap-2">{notification.name}</h6>
                    <p className="text-xs text-app-secondary-400">{notification.description}</p>
                </Box>
                <Box className="flex  rounded-md shadow-sm p-0.5 items-center gap-2">
                <Switch size="small" checked={notification.value} id={notification.id} onChange={handleChange} color="primary"/>
                </Box>
            </Box>
            )
        }   


     </Box>

  </div>);
};

export default NotificationsTabContent;
