import { Box } from "@mui/material";
import AppAvatar from "go-van-ui/src/components/avatar/AppAvatar";
import AppButton from "../../../components/app-button/AppButton";


const ProfileTabContent = () => {
  return <div>
     <h6>Profile Settings</h6>
     <p className="text-xs text-app-secondary-400">Update your personal information</p>
     <Box className="flex flex-col gap-4 mt-5">
        <Box className="flex flex-row gap-4 items-center">
            <Box className="w-[80px] border rounded-full h-[80px] overflow-hidden">
              <label htmlFor="profilePicture" className="flex h-full flex-col items-center gap-2 cursor-pointer">
                <AppAvatar   src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Picture" size="xl"/>
              </label>
              <input type="file" id="profilePicture" className="hidden"/>
            </Box>
            <Box className="flex flex-col gap-1">
                <Box className="flex items-center gap-2">
                     <h6 className="text-m flex gap-2 font-semibold">Gopinadh Vallabhaneni 
                </h6>
                <span className="text-xs px-2  border bg-app-primary-100 rounded-sm font-normal">Admin</span>
                </Box>
                <p className="text-xs text-app-secondary-400">gopinadh.vallabhaneni@ovaledge.com</p>
            </Box>
        </Box>

        <Box className="flex flex-row gap-4">
            <Box className="flex flex-col gap-2 w-full">
                <label className="text-xs text-app-secondary-400">First Name</label>
                <input type="text" placeholder="Enter your full name" className="p-2 border rounded"/>
            </Box>
            <Box className="flex flex-col gap-2 w-full">
                <label className="text-xs text-app-secondary-400">Last Name</label>
                <input type="text" placeholder="Enter your last name" className="p-2 border rounded"/>
            </Box>
        </Box>
        <Box className="flex gap-4">
            <Box className="flex flex-col w-full gap-2">
                 <label className="text-xs text-app-secondary-400">Email</label>
                 <input type="email" placeholder="Enter your email" className="p-2 border rounded"/>
            </Box>
            <Box className="flex flex-col  w-full gap-2">
                <label className="text-xs text-app-secondary-400">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="p-2 border rounded"/>
            </Box>
        </Box>
        <Box className="flex flex-row gap-4">
            <Box className="flex flex-col w-full gap-2">
                 <label className="text-xs text-app-secondary-400">Job Title</label>
                 <input type="text" placeholder="Enter your job title" className="p-2 border rounded"/>
            </Box>
            <Box className="flex flex-col  w-full gap-2">
                <label className="text-xs text-app-secondary-400">Department</label>
                <input type="text" placeholder="Enter your department" className="p-2 border rounded"/>
            </Box>
        </Box>
        <Box className="flex flex-row gap-4 justify-end mt-5">
            <AppButton text="Save" variant="contained" color="primary"/>
        </Box>
    </Box>
  </div>;
};

export default ProfileTabContent;
