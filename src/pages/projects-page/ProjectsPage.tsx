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
import AppButton from "../../components/app-button/AppButton";
import ProjectForm from "./components/project-form/ProjectForm";
import ProjectCardView from "./components/project-cards/ProjectCardView";
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";
import AppDataTable from "../../components/app-table/AppDataTable";
import { useTableReloadKey } from "../../components/data-table";

const ProjectsPage = ({ TabsData }: any) => {
  const { activeTab } = useTabContext();
  const { reRenderKey, refreshTable } = useTableReloadKey();
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
    <Box className="flex flex-col gap-2 h-full">
      <TitleCard title="Projects" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5px",
          borderRadius: "4px",
          backgroundColor: "var(--app-bg-primary)",
          boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.09)",
          border: "0.85px solid var(--app-secondary-100)",
        }}
      >
        <Box className="flex items-center p-1">
          <TabsHeaderComponent TabsData={TabsData} />
        </Box>
        <Box className="flex items-center gap-2 mr-2">
          <AppButton
            text="Add Project"
            variant="contained"
            onClick={() => setOpenModal(true)}
            // iconName={<AddIcon />}
            // iconPosition="start"
            loading={false}
          />
        </Box>
      </Box>
      <Box className="flex flex-col mt-4 h-full">
        {activeTab === "LIST_VIEW" ? (
          <AppDataTable
            reRenderKey={reRenderKey}
            tableInstanceDetails={{
              apiUrl: "projectstable/data",
              tableId: "projects",
            }}
          />
        ) : (
          <ProjectCardView projectsData={projectsData} />
        )}
      </Box>
      <ProjectForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSuccess={refreshTable}
      />
    </Box>
  );
};

export default ProjectsPage;
