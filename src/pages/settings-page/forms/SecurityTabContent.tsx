import { Box, Switch } from "@mui/material";
import React from "react";

const SecurityTabContent = () => {
  return <Box>
      <h4 className="font-semibold">Security Settings</h4>
      <p className="text-xs text-app-secondary-400">Manage your password and security preferences</p>
        <Box className="flex flex-col gap-4 mt-5">
           <Box className="flex flex-col gap-2">
              <Box className="flex flex-col gap-2 w-full">
                <label className="text-sm text-app-secondary-800">Current Password</label>
                <input type="password" placeholder="Enter your current password" className="p-2 border rounded"/>
              </Box>
              <Box className="flex flex-col gap-2 w-full">
                <label className="text-sm text-app-secondary-800">New Password</label>
                <input type="password" placeholder="Enter your new password" className="p-2 border rounded"/>
              </Box>
               <Box className="flex flex-col gap-2 w-full">
                <label className="text-sm text-app-secondary-800">Confirm Password</label>
                <input type="password" placeholder="Confirm your new password" className="p-2 border rounded"/>
              </Box>
              <Box className="flex flex-row justify-between  gap-2 mt-2 w-full  border p-4 rounded">
                <Box className="flex flex-col gap-2">
                  <p>Two Factor Authentication</p>
                  <p className="text-xs  rounded-sm font-normal">Add an extra layer of security to your account</p>
                  </Box>
                  <Box className="flex flex-col gap-2 rounded">
                    <Switch defaultChecked color="primary" />
                  </Box>
              </Box>
              <Box className="flex flex-row gap-4 justify-end mt-5">
                  <button className="px-4 py-2 bg-app-primary-100 text-app-primary-800 rounded">Save Changes</button>
              </Box>
           </Box>
        </Box>
  </Box>
};

export default SecurityTabContent;
