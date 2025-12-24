import AppButton from "../../../../components/app-button/AppButton";

import InputFeild from "../../../../components/input-fields/input-feild/InputFeild";
import TextAreaFeild from "../../../../components/input-fields/text-area/TextAreaFeild";
import { useState } from "react";
import { apiInstance } from "../../../../services/api/axios-setup/axiosInstance";
import APPModal from "../../../../components/modal/Modal";
import SnackBar from "../../../../components/snack-bar/SnackBar";

interface ProjectFormProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ProjectForm = ({ openModal, setOpenModal }: ProjectFormProps) => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: "",
  });
  const [errorMsg, setErrMsg] = useState("");
  const [suceessMsg, setSuccessMsg] = useState("");

  const handleOnChange = (e, fieldName) => {
    if (fieldName === "PROJECTNAME" && e.target.value.trim() === "") {
      setErrMsg("Project Name is required");
    } else {
      setErrMsg("");
    }
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    const resData = await apiInstance.post("/projects", projectData);

    if (!resData.status) {
      console.log("error", resData?.message);
    }
    setSuccessMsg(resData?.message);
    setOpenModal(false);
    setProjectData({
      projectName: "",
      projectDescription: "",
    });
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
            onChange={(e) => handleOnChange(e, "PROJECTNAME")}
            placeholder="Enter Project Name"
            errMessage={errorMsg}
          />
          <TextAreaFeild
            label="Description"
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={(e) => handleOnChange(e, "PROJECTDESCRIPTION")}
            placeholder="Enter Project Description"
          />
        </div>
      </APPModal>
      {suceessMsg && (
        <SnackBar message={suceessMsg} onClose={() => setSuccessMsg("")} />
      )}
    </>
  );
};

export default ProjectForm;
