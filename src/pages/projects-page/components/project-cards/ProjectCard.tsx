import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  LinearProgress,
  AvatarGroup,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CalendarIcon } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectData }: any) => {
  const {
    id,
    projectname,
    projectmembers,
    projectdescription,
    projectstatus,
    totaltasks,
    projectpriority,
    percentagecomplete,
  } = projectData;

  return (
    <>
      <Box className="border-2 border-app-primary w-[340px] h-[240px] shadow-sm rounded-lg p-4">
        <Box className="flex flex-row gap-1">
          <Link to={`/projects/projectstasks/projectid${id}`}>
            <Typography
              variant="subtitle1"
              className="truncate hover:text-app-primary-900 cursor-pointer"
              sx={{
                fontWeight: 600,
              }}
            >
              {projectname}
            </Typography>
          </Link>
          <Box className="w-6 hover:bg-app-primary-100 rounded-sm hover:text-red-500  cursor-pointer flex items-center justify-center ">
            <MoreVertIcon />
          </Box>
        </Box>
        <Box className="h-10 mt-1">
          <Typography
            className="text-app-secondary-500"
            sx={{
              fontSize: "12px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {projectdescription}
          </Typography>
        </Box>
        <Box className="flex justify-between gap-4 text-sm mt-2">
          <span className="p-0.5 px-1 bg-app-secondary-200 rounded-sm  min-w-20 text-center">
            {projectpriority?.label}
          </span>
          <span className="p-0.5 px-1 bg-green-800 text-white rounded-sm  min-w-20 text-center">
            {projectstatus?.label}
          </span>
        </Box>
        <Box className="w-full text-center mt-2 ">
          <Box className="flex justify-between">
            <span>Progress</span>
            <p>{percentagecomplete}%</p>
          </Box>
          <LinearProgress
            sx={{
              height: "8px",
              borderRadius: "2px",
              marginBottom: "8px",
            }}
            variant="determinate"
            value={percentagecomplete}
          />
        </Box>
        <Box className="flex flex-row justify-between mt-4">
          <Box className="w/1/3 flex gap-1 items-center">
            <CalendarIcon color="disabled" />
            <span className="text-app-secondary-800 text-sm">
              {totaltasks} tasks
            </span>
          </Box>
          <Box className="w-2/3">
            <AvatarGroup max={4}>
              {projectmembers.map((eachimg: any) => (
                <Avatar sizes="md" alt="Remy Sharp" src={eachimg} />
              ))}
            </AvatarGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard
