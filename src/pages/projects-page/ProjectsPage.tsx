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
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}
    >
      <TitleCard title="Projects" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
          borderRadius: "4px",
          backgroundColor: "var(--app-bg-primary)",
          boxShadow: "1px 2px 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid var(--app-bg-primary)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
      <Box sx={{ flex: 1, minHeight: 0 }}>
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
      </Box>
      <ProjectForm openModal={openModal} setOpenModal={setOpenModal} />
    </Box>
  );
};

export default ProjectsPage;
