import { Box, colors, Switch } from "@mui/material";
import React from "react";

const ApperanceTabContent = () => {


  const themeData = [
    { id : "blue", name : "Blue", color : "#3b82f6" },
    { id : "yellow", name : "Yellow", color : "#fbbf24" },
    { id : "purple", name : "Purple", color : "#8b5cf6" },
    { id : "gray", name : "Gray", color : "#6b7280" },
  ]

  return( <Box>
      <h4 className="font-semibold">Appearance Settings</h4>
      <p className="text-xs text-app-secondary-400">Customize how the app looks</p>
      <Box className="flex flex-col gap-4 mt-5">
        <Box className="flex flex-col gap-2">
          <p className="text-sm  text-app-secondary-900">Theme Color</p>
          <Box className="flex flex-row gap-4 justify-between">
            {themeData.map((theme)=>(
              <Box key={theme.id} className="flex flex-col w-full border-2 hover:border-app-primary-500 gap-2 items-center p-3 rounded cursor-pointer">
                <Box className="w-8 h-8 rounded-full" sx={{backgroundColor : theme.color}}></Box>
                <p className="text-xs">{theme.name}</p>
              </Box>
            ))}          
          </Box>
        </Box>
        <Box className="flex flex-row gap-4 justify-between border p-2 mt-2 rounded">
          <Box className="flex flex-col gap-2"> 
             <p>Dark Mode </p>
            <p className="text-xs text-app-secondary-500  rounded-sm font-normal">Enable dark mode for a better experience in low light</p>
            </Box>
            <Switch defaultChecked color="primary" />
          </Box>
          <Box className="flex flex-row gap-4 justify-between border rounded mt-2 p-2">
             <Box className="flex flex-col gap-2">
                <p>Compact Mode</p>
                <p className="text-xs text-app-secondary-500  rounded-sm font-normal">Reduce spacing and font size for a more condensed layout</p>
             </Box>
             <Switch defaultChecked color="primary" />
          </Box>
            <Box className="flex flex-row gap-4 justify-between border rounded mt-2 p-2">
              <Box className="flex flex-col gap-2">
                <p>Sidebar Collapsed By Default</p>
                <p className="text-xs text-app-secondary-500  rounded-sm font-normal">Show only the sidebar icons by default</p>
              </Box>
              <Switch defaultChecked color="primary" />
            </Box>
      </Box>
  </Box>)
}

export default ApperanceTabContent;
