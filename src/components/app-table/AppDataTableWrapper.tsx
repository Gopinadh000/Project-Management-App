import React, { useEffect , useState } from "react";
import { Box } from "@mui/material";
import {
  MaterialReactTable,
} from 'material-react-table';
import TableSkleton from "./components/TableSkleton";
import TableFiltersContainer from "./components/TableFiltersContainer";
import TablePagination from "./components/TablePagination";
import TableComponent  from "./components/TableComponent";
import {apiInstance} from "../../services/api/axios-setup/axiosInstance";
// import { useTableData } from "../data-table";
import  buildColumns  from "./utils/ColumBuilder";
import NoDataMessage from "./components/NoDataMessage";


const AppDataTableWrapper = ({
 tableInstanceDetails,
  baseUrl,
  initialQueryParams,
  tableProps,
  systemCells,
  customCells,
  filtersConfig,
  enablePagination,
}: any) => {

  const [ tableData , setTableData ] = useState ({ rows : [] , columns : [],  isLoading : false, pagination : "" });

  const { tableId, apiUrl } = tableInstanceDetails;


  useEffect(() => {
   fetchTableData()
  }, [baseUrl, apiUrl, initialQueryParams]);


  const fetchTableData = async ()=>{
     try {
      setTableData((prev: any) => ({ ...prev, isLoading: true }));

      const res = await apiInstance.get(`${baseUrl}/${apiUrl}`);


      const resData = res.data.data.resData
      setTableData({
        columns: resData.columns,
        rows: resData.rows,
        pagination: resData.pagination,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
      setTableData((prev: any) => ({ ...prev, isLoading: false }));
    }

  }

  const columns = buildColumns(tableData?.columns);




  return  (
    <TableComponent>
       {tableData?.isLoading  &&  <TableSkleton/>}
        {filtersConfig.enabledFilters && <TableFiltersContainer />}
        <MaterialReactTable
         data-testid={`app-data-table-${tableId}`}
         columns={columns}
         data={ tableData?.rows} 
         layoutMode="semantic"
         enablePagination={false}
         enableGlobalFilter={false}
         enableDensityToggle={false}
         enableGlobalFilterModes={false}
         enableColumnFilters={true}
         enableHiding={false}
         enableFullScreenToggle={false}
         enableRowSelection={true}

         renderEmptyRowsFallback={() => <NoDataMessage/>}
          // {...defaultProps}
         />
         {enablePagination && <TablePagination  />}
    </TableComponent>
    );  
};

export default AppDataTableWrapper;
