import AppButton from "../../../../components/app-button/AppButton";

import InputFeild from "../../../../components/input-fields/input-feild/InputFeild";
import TextAreaFeild from "../../../../components/input-fields/text-area/TextAreaFeild";
import { useState } from "react";
import { apiInstance } from "../../../../services/api/axios-setup/axiosInstance";
import SnackBar from "../../../../components/snack-bar/SnackBar";
import { Modal } from "go-van-ui";
import SelectFeild from "../../../../components/input-fields/select-feild/SelectFeild";
import { Cancel, SaveAsSharp } from "@mui/icons-material";

interface ProjectFormProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  onSuccess?: () => void;
}

const ProjectForm = ({
  openModal,
  setOpenModal,
  onSuccess,
}: ProjectFormProps) => {
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
    if (projectData.projectName.trim() === "") {
      setErrMsg("Project Name is required");
      return;
    }
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
    onSuccess?.();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setErrMsg("");
  };

  return (
    <>
      <Modal
        modalType="center"
        size="md"
        title="Add Project"
        open={openModal}
        onClose={handleCloseModal}
        footer={
          <div className="flex gap-4 float-right mr-5">
            <AppButton
              // iconName={<Cancel fontSize="small" />}
              onClick={handleCloseModal}
              variant="outlined"
              text="cancel"
            />
            <AppButton
              // iconName={<SaveAsSharp fontSize="small" />}
              onClick={handleSubmitForm}
              variant="contained"
              text="Submit"
              loading={false}
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
            rows={1}
            label="Description"
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={(e) => handleOnChange(e, "PROJECTDESCRIPTION")}
            placeholder="Enter Project Description"
            // height="60px !important"
          />
          <SelectFeild
            required
            label="Project Owner"
            name="projectowner"
            placeholder="Select Project Owner"
            options={[
              { id: 1, label: "Gopinadh Vallabhaneni", value: "OVALEDGE-001" },
              { id: 2, label: "Sai Krishna", value: "OVALEDGE-002" },
              { id: 3, label: "Vijay", value: "OVALEDGE-003" },
            ]}
          />
        </div>
      </Modal>
      {suceessMsg && (
        <SnackBar message={suceessMsg} onClose={() => setSuccessMsg("")} />
      )}
    </>
  );
};

export default ProjectForm;
