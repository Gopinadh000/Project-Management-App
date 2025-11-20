import { useEffect } from "react"
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";
import TitleCard from "../../components/title-card/TitleCard";
import AppButton from "../../components/app-button/AppButton";
import DataTable from "../../components/data-table/DataTable";
import { projectsdata, projectcolumns } from "../../assets/dummy-data/projects-data";
import ModalWithHeaderFooter from "../../components/modal/ModalWithHeaderFooter";
import { Link, useNavigate } from "react-router-dom";
import DynamicMRTTable from "../../components/m-table/MTable";

const UsersPage = () => {

  const navigate = useNavigate()




  const handleAddUser=()=>{
    navigate('/users/add')
  }



  return (
    <div className=" h-full">
      <TitleCard title="Users Page" />
      <div className="flex justify-end mb-4">   
         <AppButton  text="Add User" variant="contained"   onClick={handleAddUser} />
      </div>
      <div>
        {/* <DataTable   rows={projectsdata}
        columns={projectcolumns}   /> */}
        <DynamicMRTTable apiUrl="users/usersdata" />
      </div>  
    </div>
  )
}

export default UsersPage

  