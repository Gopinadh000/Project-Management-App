import { Box } from "@mui/material";
import React from "react";

const CompanyTabContent = () => {
  return (<Box className="">
      <h4 className="font-semibold">Company Information</h4>
      <p className="text-gray-600  text-sm">Manage your company information</p>
      {/* Company Information Form */}
      <Box className="mt-4">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-sm  shadow-sm p-1" placeholder="Enter company name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-1" placeholder="Enter company address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-1" placeholder="Enter phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-sm  shadow-sm p-1" placeholder="Enter email address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-1" placeholder="Enter website URL" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-700">Save Changes</button>
          </div>
        </form>
      </Box>
    
  </Box>)
};

export default CompanyTabContent;
