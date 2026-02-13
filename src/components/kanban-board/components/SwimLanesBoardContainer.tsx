import { Box } from "@mui/material";
import React from "react";
import SwimLane from "./SwimLane";

const SwimLanesBoardContainer = () => {
  const lanes = [
    {
      id : "new",
      displayName: "New",
      icon : "",
      order : 0,
      collapsed :  true,
      totalTasks : 4,
      tasks : [
        {
          id : 1,
          taskname : "Web Applciation Developemnet",
          assignee : "Gopinadh Vallabhaneni",
          priority : "High",
          priorityicon : "High",
          assigneeimg : "",
        },
         {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low",
          priorityicon : "High",
          assigneeimg : "",
        }
      ]
    },
    {
        id : "in-progress",
      displayName: "In Progress",
      icon : "",
      order : 2,
      collapsed :  false,
      totalTasks : 5,
       tasks : [
         {
          id : 1,
          taskname : "Web Applciation Developemnet",
          assignee : "Gopinadh Vallabhaneni",
          priority : "High"
        },
         {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        }
       ]
    },
    {
        id : "on-hold",
      displayName: "On Hold",
      icon : "",
      order : 3,
      collapsed :  false,
            totalTasks : 10,
       tasks : [
         {
          id : 1,
          taskname : "Web Applciation Developemnet",
          assignee : "Gopinadh Vallabhaneni",
          priority : "High"
        },
         {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        },
        {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        },
        {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        },
        {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        },
        {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        },
        {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        }
       ]
    },
     {
        id : "in-review",
      displayName: "Review",
      icon : "",
      order : 4,
            totalTasks : 10,
      collapsed :  false,
       tasks : [
         {
          id : 1,
          taskname : "Web Applciation Developemnet",
          assignee : "Gopinadh Vallabhaneni",
          priority : "High"
        },
         {
          id : 2,
          taskname : "Mobile Applciation Developemnet",
          assignee : "Abid Ali Mohammed",
          priority : "Low"
        }
       ]
    },
     {
        id : "completed",
      displayName: "Completed",
      icon : "",
      order : 5,
        collapsed :  true,
              totalTasks : 0,
       tasks : []
    }
  ]
  return( <Box className="flex gap-6 overflow-x-auto overflow-y-hidden w-max min-w-screen h-full px-4">
      {
        lanes.map(eachlane => <SwimLane laneData={eachlane} />)
      }
  </Box>)
};

export default SwimLanesBoardContainer;
