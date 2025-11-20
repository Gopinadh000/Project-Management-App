import AppButton from "../../../../components/app-button/AppButton";

import InputFeild from "../../../../components/input-fields/input-feild/InputFeild";
import TextAreaFeild from "../../../../components/input-fields/text-area/TextAreaFeild";
import SelectFeild from "../../../../components/input-fields/select-feild/SelectFeild";
import { useState } from "react";
import { apiInstance } from "../../../../services/api/axios-setup/axiosInstance";
import APPModal from "../../../../components/modal/Modal";

const proejctownerdata = [
  { id: 1, label: "Gopinadh", value: "gopinadh" },
  { id: 2, label: "Virat Kohi", value: "viratkohli" },
  { id: 2, label: "Dhoni", value: "Dhoni" },
];

const ProjectForm = ({ openModal, setOpenModal ,  }: any) => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: "",
    projectOwner: "",
  });

  const handleProejctName = (e: any) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {


   const  resData =  await  apiInstance.post('/projects' , projectData)
   
   if(!resData.status){
    console.log(resData?.message)

   }
   setOpenModal(false)
  };


  return (
    <div>
      <APPModal
        modalType="side"
        size="l"
        title="Add Project"
        open={openModal}
        onClose={() => setOpenModal(false)}
        footerComponent={
          <div className="flex gap-4 float-right mr-5">
            <AppButton
              onClick={() => setOpenModal(false)}
              variant="outlined"
              text="cancel"
            />
            <AppButton
              onClick={handleSubmitForm}
              variant="contained"
              text="Submit"
            />
          </div>
        }
      >
        <div>
          <InputFeild
            type="text"
            label="Project Name"
            required={true}
            name="projectName"
            value = {projectData.projectName}
            onChange={handleProejctName}
          />
          <TextAreaFeild label="Description" name="projectDescription" value={projectData.projectDescription}  onChange={handleProejctName} />
          <SelectFeild
            label="Project Owner"
            required
            options={proejctownerdata}
            name="projectOwner"
            value={projectData.projectOwner}
            onChange={handleProejctName}
          />
        </div>
      </APPModal>
    </div>
  );
};

export default ProjectForm;
