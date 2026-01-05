import { useEffect, useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";
import TabsHeaderComponent from "../../components/tabs/Tabs";
import AddIcon from "@mui/icons-material/Add";
import userimg from "../../assets/user.webp";
import { Box } from "@mui/material";

import {
  projectcolumns,
  projectsdata,
} from "../../assets/dummy-data/projects-data";
import { useTabContext } from "../../components/tabs/tabs-context/TabContext";
import DataTable from "../../components/data-table/DataTable";
import AppButton from "../../components/app-button/AppButton";
import ProjectForm from "./components/project-form/ProjectForm";
import ProjectCardView from "./components/project-cards/ProjectCardView";
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";
import DataTable2 from "../../components/sample-table/DataTable2";
import AppDataTable from "../../components/app-table/AppDataTable";

const ProjectsPage = ({ TabsData, border }: any) => {
  const { activeTab } = useTabContext();
  const [projectsData, setProjectsData] = useState(projectsdata);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllProjectData();
  }, []);

  const getAllProjectData = async () => {
    const resData = await apiInstance.get("/projects");

    if (resData.status) {
      console.log("errror");
    }

    let activeData = resData?.data?.data;

    if (activeData) {
      const transformedData = activeData.map((item) => ({
        ...item,
        id: item.projectid, // Map `projectid` to `id`
        projectOwner: item.projectowner,
        projectstatuscolor: "blue",
        project_progress: "87%",
        proejctownerimg: userimg,
      }));

      setProjectsData(transformedData);
    }
  };

  return (
    <Box className="h-full">
      <TitleCard title="Projects" />
      <Box className="flex items-center my-4 justify-between bg-white">
        <Box className={`h-12 flex items-center justify-between `}>
          <TabsHeaderComponent TabsData={TabsData} />
        </Box>
        <Box>
          <AppButton
            text="Add Project"
            variant="contained"
            onClick={() => setOpenModal(true)}
            iconName={<AddIcon />}
            iconPosition="start"
            loading={false}
          />
        </Box>
      </Box>
      <Box className="mt-4 bg-white   p-4  overflow-y-auto">
        {activeTab === "LIST_VIEW" ? (
          <AppDataTable
            tableInstanceDetails={{
              apiUrl: "projectstable",
              tableId: "projects",
            }}
          />
        ) : (
          <ProjectCardView projectsData={projectsData} />
        )}
        <ProjectForm openModal={openModal} setOpenModal={setOpenModal} />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
