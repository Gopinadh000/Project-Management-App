import React, { useEffect } from "react";
import { Modal } from "go-van-ui";
import { useForm, Controller } from "react-hook-form";
import InputFeild from "../../../components/input-fields/input-feild/InputFeild";
import { Box } from "@mui/material";
import SelectFeild from "../../../components/input-fields/select-feild/SelectFeild";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

type CreateUserFormProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
};

const CreateUserForm = ({ openModal, setOpenModal }: CreateUserFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors, "form errors");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFormSubmit = (data) => {
    console.log({ data });
  };

  useEffect(() => {
    if (openModal) {
      reset(); // clears values + errors
    }
  }, [openModal, reset]);

  return (
    <>
      <Modal
        title="Add New User"
        modalType="center"
        size="md"
        open={openModal}
        onClose={handleCloseModal}
        subtitle="Create a new user account for your company. Fill in all the required information below."
        footer={
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-200 text-gray-700 px-2 py-1.5 rounded-sm hover:bg-gray-300 flex items-center gap-1"
              onClick={handleCloseModal}
            >
              <CloseIcon />
              Cancel
            </button>
            <button
              type="submit"
              className="bg-app-primary-900 text-app-bg-secondary px-2 py-1.5 rounded-sm hover:bg-blue-700 flex items-center gap-1"
              onClick={handleSubmit(handleFormSubmit)}
            >
              <AddIcon />
              Create
            </button>
          </div>
        }
        children={
          <div className="min-h-40 p-2">
            <div className="flex flex-col gap-2">
              <Box className="flex gap-0">
                <Controller
                  control={control}
                  name="firstName"
                  rules={{
                    required: "First Name is required",
                  }}
                  render={({ field }) => (
                    <InputFeild
                      {...field}
                      required
                      label="First Name"
                      name="firstName"
                      placeholder="John"
                      type="text"
                      startIcon={
                        <PermIdentityOutlinedIcon className="text-app-secondary-500" />
                      }
                      errMessage={errors?.firstName?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="lastName"
                  rules={{
                    required: "Last Name is required",
                  }}
                  render={({ field }) => (
                    <InputFeild
                      {...field}
                      required
                      label="Last Name"
                      name="lastName"
                      placeholder="Doe"
                      type="text"
                      startIcon={
                        <PermIdentityOutlinedIcon className="text-app-secondary-500" />
                      }
                      errMessage={errors?.lastName?.message}
                    />
                  )}
                />
              </Box>
              <Box className="flex gap-2">
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Email is required",
                  }}
                  render={({ field }) => (
                    <InputFeild
                      {...field}
                      required
                      label="Email"
                      name="email"
                      placeholder="john.doe@gmail.com"
                      type="email"
                      startIcon={
                        <MailOutlinedIcon className="text-app-secondary-500" />
                      }
                      errMessage={errors?.email?.message}
                    />
                  )}
                />
              </Box>
              <Box className="flex flex-col gap-2">
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <InputFeild
                      {...field}
                      required
                      label="Phone Number"
                      name="phoneNumber"
                      placeholder="1234567890"
                      type="number"
                      startIcon={
                        <LocalPhoneOutlinedIcon className="text-app-secondary-500" />
                      }
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <SelectFeild
                      {...field}
                      name="role"
                      label="Role"
                      placeholder="Select User Role"
                      required
                      options={[
                        { id: 1, label: "Super Admin", value: "SUPER_ADMIN" },
                        { id: 2, label: "Manager", value: "MANAGER" },
                        { id: 3, label: "User", value: "USER" },
                      ]}
                    />
                  )}
                />
              </Box>
            </div>
          </div>
        }
      />
    </>
  );
};

export default CreateUserForm;
