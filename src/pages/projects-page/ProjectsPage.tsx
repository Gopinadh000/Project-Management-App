import { useEffect, useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";
import TabsHeaderComponent from "../../components/tabs/Tabs";
import AddIcon from "@mui/icons-material/Add";
import userimg from '../../assets/user.webp'

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

const ProjectsPage = ({ TabsData, border }: any) => {
  const { activeTab } = useTabContext();
  const [projectsData , setProjectsData]=useState(projectsdata)

  const [openModal, setOpenModal] = useState(false);



  useEffect(() => {
    getAllProjectData()
 
  },[])



  const getAllProjectData = async ()=>{
    const resData = await  apiInstance.get('/projects')

   if(resData.status){
    console.log("errror")
   }

   let activeData =  resData?.data?.data

   if (activeData) {
    const transformedData = activeData.map((item) => ({
      ...item,
      id: item.projectid, // Map `projectid` to `id`
      projectOwner : item.projectowner,
      projectstatuscolor : "blue",
      project_progress :"87%",
      proejctownerimg : userimg
    }));

    setProjectsData(transformedData);
  }
  }

  


  return (
    <div className="h-full">
      <TitleCard title="Projects Page" />
      <div className="flex items-center mt-4 mb-10  justify-between  border">
        <div className={`h-10 flex items-center justify-between px-1 py-6`}>
          <TabsHeaderComponent TabsData={TabsData} />
        </div>
        <div>
          <AppButton
            text="Add Project"
            variant="contained"
            onClick={() => setOpenModal(true)}
            iconName={<AddIcon />}
            iconPosition="start"
            loading={false}
            // disabled='true'
          />
        </div>
      </div>
      <div className="mt-4  h-[500px] overflow-y-auto">
        {activeTab === "LIST_VIEW" ? (
          <DataTable />
        ) : (
          <ProjectCardView projectsData={projectsData} />
        )}
        <ProjectForm openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default ProjectsPage;
