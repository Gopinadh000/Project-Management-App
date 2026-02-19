import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { useTheme } from '../../../../hooks/useTheme';

const ProjectCard = ({projectData}:any) => {
  const {
    projectname,
    projectdescription,
    proejctownerimg,
    projectstatuscolor,
    project_progress,
    project_status,
    status,
  } = projectData;

  //  id: "OVALEDGE-PROEJCT-001",
  // projectname: "Web App Design and Enhancement",
  // projectlink: "/tasks/OVALEDGE-PROEJCT-001",
  // projectdescription:
  //   "Web App Design and Enhancement Web App Design and Enhancement",
  // projectstatus: "Active",
  // projectowner: {
  //   username: "Gopinadh Vallabhanei",
  //   userid: "OVALEDGE-001",
  //   userimage: "url",
  // },
  // projectmemberscount: 23,
  // percentagecomplete: "40%",

  // console.log("projectData", projectData);

  const { isDark } = useTheme();

  return (
    <Box>
      <Box className="border border-app-primary w-[320px] h-[220px] rounded-md p-3">
        <Typography color="primary" variant="body1" className="truncate">
          {projectname}
        </Typography>
        <Typography
          className="text-app-secondary-500 line-clamp-[calc(var(--characters)/100)]"
          color="disabled"
          // variant="body1"
          sx={{
            fontSize: "12px",
          }}
        >
          {projectdescription}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard
