import React from "react";
import { Modal } from "go-van-ui";
import {useForm } from "react-hook-form";
import InputFeild from "../../../components/input-fields/input-feild/InputFeild";
import { Box } from "@mui/material";


type CreateUserFormProps = {    
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
};

const CreateUserForm  = ({
  openModal,
  setOpenModal,
}: CreateUserFormProps) => {

  const {register , handleSubmit} = useForm();


  console.log( {
    register,
    handleSubmit
  })






  const handleCloseModal =()=>{
    setOpenModal(false)
  }


  const handleFormSubmit =(data)=>{

    console.log({data})

  }

  return (<>
  <Modal
    title="Add New User"
    modalType="center"
    size="lg" 
    open={openModal}
    onClose={handleCloseModal}
    subtitle="Create a new user account for your company. Fill in all the required information below."
    footer={
      <div className="flex justify-end gap-2 p-2">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-app-primary-900 text-app-bg-secondary px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSubmit(handleFormSubmit)}
        >
          Create
        </button>
      </div>


    }
    children={
    <div className="min-h-40 p-2">
          <div className="flex flex-col gap-4">
        <Box className="flex gap-2">
           <InputFeild  {...register("firstName")} label="First Name" name="firstName" placeholder="John" type="text"  />
           <InputFeild {...register("lastName")} label="Last Name" name="lastName" placeholder="Doe" type="text"  />
        </Box>
        <Box>
        <InputFeild {...register("email")} label="Email" name="email" placeholder="john.doe@gmail.com" type="email"/>
         <InputFeild {...register("phoneNumber")} label="Phone Number" name="phoneNumber" placeholder="1234567890" type="number"/>
        </Box>
        </div>
    </div>
    } 
  />
  </>)
};

export default CreateUserForm;
