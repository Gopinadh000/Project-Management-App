import TitleCard from "../../components/title-card/TitleCard";
import AppButton from "../../components/app-button/AppButton";
import {
  projectsdata,
  projectcolumns,
} from "../../assets/dummy-data/projects-data";
import { useNavigate } from "react-router-dom";
import DynamicMRTTable from "../../components/m-table/MTable";
import AppDataTable from "../../components/app-table/AppDataTable";

const UsersPage = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/users/add");
  };

  return (
    <div className="">
      <TitleCard title="Users Page" />
      <div className="flex justify-end mb-4">
        <AppButton
          text="Add User"
          variant="contained"
          onClick={handleAddUser}
        />
      </div>
      <div className=" h-full">
        {/* <DynamicMRTTable apiUrl="users/usersdata" /> */}

        <AppDataTable
          tableInstanceDetails={{
            apiUrl: "userstable",
            tableId: "users",
          }}
        />
      </div>
    </div>
  );
};

export default UsersPage;
