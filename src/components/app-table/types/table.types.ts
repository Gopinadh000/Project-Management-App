export interface TableResponse {
    rowsData : any[];
    columnsData : any[];
    pagination :{
        totalItems : number;
    }
};



export interface TableQuery {
    pagination : {
        page : number;
        pageSize : number;
    };
    filter  : any[];
    search  : any[];
    sort  : any[];
};


export interface TableState {
  query: TableQuery;
  response: TableResponse;
  ui: {
    loading: boolean;
  };
}


