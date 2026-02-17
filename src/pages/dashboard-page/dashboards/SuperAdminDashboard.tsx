import React from "react";
import { Box, LinearProgress } from "@mui/material";
import StatCard from "../components/StatCard";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";

const statcarddata = [
  {
    id: 1,
    title: "Total Projects",
    icon: (
      <PrecisionManufacturingIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 30,
  },
  {
    id: 2,
    title: "Completed Projects",
    icon: (
      <FactCheckIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 15,
  },
  {
    id: 3,
    title: "Active Projects",
    icon: (
      <ChecklistRtlIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 10,
  },
  {
    id: 4,
    title: "On Hold Projects",
    icon: (
      <EventBusyIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 5,
  },
];

const usersstatdata = [
  {
    id: 1,
    title: "Total Users",
    icon: (
      <GroupIcon fontSize="medium" color="primary" sx={{ fontSize: "34px" }} />
    ),
    value: 250,
    staticon: "",
  },
  {
    id: 2,
    title: "New Users",
    icon: (
      <GroupAddIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 10,
    staticon: "",
  },
  {
    id: 3,
    title: "Active Users",
    icon: (
      <PersonPinIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 200,
    staticon: "",
  },
  {
    id: 4,
    title: "In-Active Users",
    icon: (
      <PersonOffIcon
        fontSize="medium"
        color="primary"
        sx={{ fontSize: "34px" }}
      />
    ),
    value: 50,
    staticon: "",
  },
];

const recentProjectsData = [
  {
    id: 1,
    projectname: "Website Redesign",
    members: 6,
    projectstatus: "In Progress",
    percenatgecomplete: 60,
    projectendate: "01/02/2026",
  },
  {
    id: 2,
    projectname: "Mobile App Development",
    members: 10,
    projectstatus: "In Progress",
    percenatgecomplete: 42,
    projectendate: "01/02/2026",
  },
  {
    id: 3,
    projectname: "Marketing Campaign",
    members: 3,
    projectstatus: "In Progress",
    percenatgecomplete: 42,
    projectendate: "01/02/2026",
  },
  {
    id: 4,
    projectname: "Game  App Developement",
    members: 3,
    projectstatus: "On Hold",
    percenatgecomplete: 20,
    projectendate: "01/02/2026",
  },
];

const SuperAdminDashboard = () => {
  return (
    <Box className="flex flex-col gap-6">
      <Box className="flex flex-wrap justify-between gap-4 ">
        {statcarddata.map((eachitem) => (
          <StatCard itemData={eachitem} />
        ))}
      </Box>
      <Box className="flex  flex-wrap justify-between gap-4">
        {usersstatdata.map((eachitem) => (
          <StatCard itemData={eachitem} />
        ))}
      </Box>
      <Box>
        <Box className="border border-app-secondary-100 min-h-60 p-4  rounded-lg">
          <Typography variant="h6">Recent Projects</Typography>
          <span className="text-app-secondary-500">
            Track your ongoing projects
          </span>

          <Box className="flex flex-col gap-4 mt-4">
            {recentProjectsData.map((item) => (
              <Box className="flex flex-row border justify-between rounded-md p-4  border-app-secondary-200">
                <Box className="flex gap-2 flex-col  w-3/5">
                  <Typography variant="subtitle1">
                    {item?.projectname}
                  </Typography>
                  <Box className="flex gap-4">
                    <Box className="flex items-center gap-2">
                      <PeopleOutlineIcon fontSize="small" color="primary" />
                      <span className="text-sm text-gray-500">
                        {item?.members} members
                      </span>
                    </Box>
                    <Box className="flex items-center gap-2">
                      <ScheduleIcon fontSize="small" color="primary" />
                      <span className="text-sm text-gray-500">
                        {item.projectendate}
                      </span>
                    </Box>
                  </Box>
                </Box>
                <Box className=" flex flex-row w-1/5 justify-between  items-center gap-5">
                  <Box className="w-44 text-center">
                    <p>{item.percenatgecomplete}%</p>
                    <LinearProgress
                      variant="determinate"
                      value={item.percenatgecomplete}
                    />
                  </Box>
                  <Box className="w-60 ">
                    <span className="bg-app-primary-100 p-2 rounded-md">
                      {item.projectstatus}
                    </span>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SuperAdminDashboard;
