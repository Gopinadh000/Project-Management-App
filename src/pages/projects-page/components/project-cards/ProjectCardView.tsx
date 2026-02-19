import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: "OVALEDGE-PROEJCT-001",
    projectname: "Web App Design and Enhancement",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: "Active",
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    percentagecomplete: "40%",
  },
];

const ProjectCardView = () => {
  return (
    <Box className="flex flex-wrap w-full gap-6 overflow-auto h-full">
      {projectsData?.map((item: any, index: number) => (
        <ProjectCard key={item.id || index} projectData={item} />
      ))}
    </Box>
  );
};

export default ProjectCardView;
