import React, {useState} from "react";


export function useTableQueryState(){
    const [params,  setParams] = useState({}:any);

    const returnparams = {
        page: Number(params.get('page') ?? 1),
        pageSize: Number(params.get('pageSize') ?? 20),
        sort: params.get('sort'),
        search: params.get('search'),
        filters: params.get('filters'),
        updateParams: (newParams) => {
        setParams(prev => ({ ...Object.fromEntries(prev), ...newParams }));
        }
    }
    return returnparams;
}