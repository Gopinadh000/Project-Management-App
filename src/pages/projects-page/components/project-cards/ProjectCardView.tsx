import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectCardView = ({ projectsData }: any) => {
  return (
    <Box
      // sx={{
      //   display: "grid",
      //   gridTemplateColumns: {
      //     xs: "1fr",
      //     sm: "repeat(2, 1fr)",
      //     md: "repeat(2, 1fr)",
      //     lg: "repeat(3, 1fr)",
      //   },
      //   gap: 3,
      //   padding: 2,
      // }}
      className="flex flex-wrap w-full gap-6 overflow-auto h-full"
    >
      {projectsData?.map((item: any, index: number) => (
        <ProjectCard key={item.id || index} projectData={item} />
      ))}
    </Box>
  );
};

export default ProjectCardView;
