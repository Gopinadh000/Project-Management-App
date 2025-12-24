import AppButton from "../../../../components/app-button/AppButton";

import InputFeild from "../../../../components/input-fields/input-feild/InputFeild";
import TextAreaFeild from "../../../../components/input-fields/text-area/TextAreaFeild";
import { useState } from "react";
import { apiInstance } from "../../../../services/api/axios-setup/axiosInstance";
import APPModal from "../../../../components/modal/Modal";

const ProjectForm = ({ openModal, setOpenModal }: any) => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: "",
  });

  const handleProejctName = (e: any) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    const resData = await apiInstance.post("/projects", projectData);

    if (!resData.status) {
      console.log(resData?.message);
    }
    setOpenModal(false);
  };

  return (
    <>
      <APPModal
        modalType="center"
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
            value={projectData.projectName}
            onChange={handleProejctName}
            placeholder="Enter Project Name"
            errMessage={"Project Name is required"}
          />
          <TextAreaFeild
            label="Description"
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleProejctName}
          />
        </div>
      </APPModal>
    </>
  );
};

export default ProjectForm;
