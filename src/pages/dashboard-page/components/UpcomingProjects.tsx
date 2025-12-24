import React from "react";



const notificationsdata = [
    {
        id : 1,
        message : "New project assigned to you",
        time : "2 hours ago"    
    },
    {
        id :2,
        message : "Task deadline approaching",
        time : "1 day ago   "
    },
    {
        id :3,
        message : "New comment on your task",
        time : "3 days ago"
    },
    {
        id :4,
        message : "Project marked as completed",
        time : "5 days ago"
    },
    {
        id :5,
        message : "User joined your project",
        time : "1 week ago"
    }
]

const UpcomingProjects = () => {
  return (<div>
        <div className="p-4 bg-white  rounded-md shadow-sm h-[350px] overflow-y-scroll">         
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>
            <ul className="space-y-4">
                {notificationsdata.map((notification) => (
                    <li key={notification.id} className="border-b pb-2">
                        <p className="text-gray-800">{notification.message}</p>
                        <span className="text-sm text-gray-500">{notification.time}</span>
                    </li>
                ))}
            </ul>
        </div>
  </div>);
};

export default UpcomingProjects;
