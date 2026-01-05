import React from 'react';
import userimg from '../../../../assets/user.webp'

const ProjectCard = ({projectData}:any) => {
    const {
      project_name,
      projectOwner,
      proejctownerimg,
      projectstatuscolor,
      project_progress,
      project_status,
    } = projectData;

    console.log(projectData, "projectOwner");
    return (
      <div className="border shadow-sm bg-gray-50 border-gray-300 rounded-md w-[300px] h-[200px]  p-4 justify-between flex flex-col cursor-pointer hover:shadow-md">
        <h6 className="text-lg cursor-pointer  text-blue-600 hover:text-blue-900 truncate border-b-2 border-gray-100">
          {project_name}
        </h6>
        <div className="flex  gap-4 items-center ">
          <img
            className="w-12 h-12 rounded-full"
            src={proejctownerimg}
            alt=""
          />
          <span className="text-lg">{projectOwner}</span>
        </div>
        <div className="flex gap-2 justify-between items-center h-10 ">
          <span
            className="p-1 rounded-md text-white"
            style={{ backgroundColor: projectstatuscolor }}
          >
            {project_status}
          </span>
          <span className="w-10 h-10 text-sm  p-4 justify-center  border border-blue-300 rounded-full flex items-center">
            {project_progress} <span className="text-black w-4 h-4">%</span>
          </span>
        </div>
      </div>
    );
}

export default ProjectCard
