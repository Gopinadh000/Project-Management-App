import TitleCard from "../../components/title-card/TitleCard";
import AppButton from "../../components/app-button/AppButton";
import { useNavigate } from "react-router-dom";
import AppDataTable from "../../components/app-table/AppDataTable";
import { Box } from "@mui/material";
import APPModal from "../../components/modal/Modal";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import CreateUserForm from "./forms/CreateUserForm";

const UsersPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleAddUser = () => {
    navigate("/users/add");
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleCard title="Users Page" />
        <AppButton
          text="Add User"
          variant="contained"
          onClick={handleOpenModal}
        />
      </Box>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <AppDataTable
          tableInstanceDetails={{
            apiUrl: "userstable",
            tableId: "users",
          }}
        />
      </Box>
      <CreateUserForm openModal={open} setOpenModal={setOpen} />
    </Box>
  );
};

export default UsersPage;
