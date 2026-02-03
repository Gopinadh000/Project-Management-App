import AppDataTableWrapper from "./AppDataTableWrapper";


const AppDataTable = (props :any) => {
  const {
    tableInstanceDetails,
    baseUrl = `app/table`,
    initialQueryParams = {
      pagination: { page: 1, pageSize: 20 },
      filters: [],
      search: [],
      sort: [],
    },
     tableProps,
     systemCells = [],
     customCells = [],
    enablePagination = true,
    filtersConfig = {
      enabledFilters : false 
    },
  } = props;

  return  (
      <AppDataTableWrapper
        tableInstanceDetails={tableInstanceDetails}
        baseUrl={baseUrl}
        initialQueryParams={initialQueryParams}
        tableProps={tableProps}
        systemCells={systemCells}
        customCells={customCells}
        enablePagination={enablePagination}
        filtersConfig={filtersConfig}
    />
    )
};

export default AppDataTable;

