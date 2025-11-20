import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardView = ({ projectsData }: any) => {
  return (
    <div className="flex flex-wrap gap-8 overflow-y-auto">
      {projectsData?.map((item) => (
        <ProjectCard projectData={item} />
      ))}
    </div>
  );
};

export default ProjectCardView;
