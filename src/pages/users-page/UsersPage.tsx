import TitleCard from "../../components/title-card/TitleCard";
import AppButton from "../../components/app-button/AppButton";
import AppDataTable from "../../components/app-table/AppDataTable";
import { Box } from "@mui/material";
import { useState } from "react";
import CreateUserForm from "./forms/CreateUserForm";
import { useTableReloadKey } from "../../components/data-table";
import { useAuth } from "../../services/context/AuthContext";

const UsersPage = () => {
  const { reRenderKey, refreshTable } = useTableReloadKey();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  console.log(user);

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
        <TitleCard title="Users" />
        {user?.role === "SUPER_ADMIN" && (
          <AppButton
            text="Add User"
            variant="contained"
            onClick={handleOpenModal}
          />
        )}
      </Box>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <AppDataTable
          reRenderKey={reRenderKey}
          tableInstanceDetails={{
            apiUrl: "userstable/data",
            tableId: "users",
          }}
        />
      </Box>
      <CreateUserForm
        openModal={open}
        setOpenModal={setOpen}
        onSuccess={refreshTable}
      />
    </Box>
  );
};

export default UsersPage;
