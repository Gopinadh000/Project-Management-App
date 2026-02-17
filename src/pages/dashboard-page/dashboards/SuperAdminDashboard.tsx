import React from "react";
import { Box } from "@mui/material";
import StatCard from "../components/StatCard";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonPinIcon from "@mui/icons-material/PersonPin";
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
    </Box>
  );
};

export default SuperAdminDashboard;
