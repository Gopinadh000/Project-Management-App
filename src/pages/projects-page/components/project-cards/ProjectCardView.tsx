import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: "OVALEDGE-PROEJCT-001",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-002",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-003",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-004",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-005",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-006",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-007",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
  {
    id: "OVALEDGE-PROEJCT-008",
    projectname: "Web App Design and Enhancement & Chnages",
    projectlink: "/tasks/OVALEDGE-PROEJCT-001",
    projectdescription:
      "Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement Web App Design and Enhancement",
    projectstatus: {
      label: "Active",
      id: "active",
      color: "green",
    },
    projectpriority: {
      label: "High",
      id: "high",
      color: "gray",
    },
    projectowner: {
      username: "Gopinadh Vallabhanei",
      userid: "OVALEDGE-001",
      userimage: "url",
    },
    projectmemberscount: 23,
    projectmembers: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    percentagecomplete: "40",
    showthreedots: false,
    totaltasks: 30,
  },
];

const ProjectCardView = () => {
  return (
    <Box className="flex flex-wrap w-full gap-6 overflow-auto h-full">
      {projectsData?.map((item: any) => (
        <ProjectCard key={item.id} projectData={item} />
      ))}
    </Box>
  );
};

export default ProjectCardView;
