export const tableData = {
    pageIndex : 0,
    totalItems : 200,
    totalPages : 20,
    totalItemsPerPage : 10,
    columnsData :[ {
        fieldname : "projectname",
        displayName : "Project Name",
        sort : true,
        search : true,
        tooltip : true,
        customCell : false,
        order : 1,
        type : "string",
        width : 150,
        minWidth : 150,
        resizable : true,
        editable : true,
        filterable : true,
    },{
        fieldname : "projectdescription",
        displayName : "Project Description",
        sort : true,
        search : true,
        tooltip : true,
        customCell : false,
        order : 2,
        type : "string",
        width : 150,
        minWidth : 150,
        resizable : true,
        editable : true,
        filterable : true,
    },{
        fieldname : "projectowner",
        displayName : "Project Owner",
        sort : true,
        search : true,
        tooltip : true,
        customCell : false,
        order : 3,
        type : "obejct",
        width : 150,
        minWidth : 150,
        resizable : true,
        editable : true,
        filterable : true,
    } ,
    {
        fieldname : "projectstartdate",
        displayName : "Project Start Date",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 4,
        type : "date",
    },{
        fieldname : "projectenddate",
        displayName : "Project End Date",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 5,
        type : "date",
    },{
        fieldname : "projectstatus",
        displayName : "Project Status",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 6,
        type : "object",
    },{
        fieldname : "projectprogress",
        displayName : "Project Progress",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 7,
        type : "string",
    },{
        fieldname : "projectcreatedat",
        displayName : "Created At",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 8,
        type : "date",
    },{
        fieldname : "projectcreatedby",
        displayName : "Created By",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 9,  
        type : "object",
    },{
        fieldname : "projectupdatedat",
        displayName : "Updated At",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 10,
        type : "date",
    }
    ,{
        fieldname : "projectupdatedby",
        displayName : "Updated By",
        sort : true,
        search : true,
        tooltip : true,
        customCell : true,
        order : 11,
        type : "object",
    }
],
    rowsData :[{
        projectname : {
            value : "Project 1",
            type : "string",
        },
        projectdescription : {
            value : "Project 1 description",
            type : "string",
        },
        projectowner : {
            value : "Project 1 owner",
            type : "string",
        },
        projectstartdate : {
            value : "2024-01-01",
            type : "date",
        },
        projectenddate : {
            value : "2024-01-30",
            type : "date",
        },  
        projectstatus : {
            value : { id:"inprogress", label:"In Progress" , value:"inprogress"},
            type : "object",
        },
        projectprogress : {
            value : "50%",
            type : "string",
        },
        projectcreatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectcreatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 created by" , value:"OEUSER-0001"},
            type : "object",
        },
        projectupdatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectupdatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 updated by" , value:"OEUSER-0001"},
            type : "object",
        },
    },{
        projectname : {
            value : "Project 2",
            type : "string",
        },
        projectdescription : {
            value : "Project 2 description",
            type : "string",
        },
        projectowner : {
            value : { id:"OEUSER-0001", label:"Project 2 owner" , value:"OEUSER-0001"},
            type : "obejct",    
        },
        projectstartdate : {
            value : "2024-01-01",
            type : "date",
        },
        projectenddate : {
            value : "2024-01-30",
            type : "date",
        },  
        projectstatus : {
            value : { id:"inprogress", label:"In Progress" , value:"inprogress"},
            type : "object",
        },
        projectprogress : {
            value : "50%",
            type : "string",
        },
        projectcreatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectcreatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 created by" , value:"OEUSER-0001"},
            type : "object",
        },
        projectupdatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectupdatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 updated by" , value:"OEUSER-0001"},
            type : "object",
        },  
    },
    {
        projectname : {
            value : "Project 2",
            type : "string",
        },
        projectdescription : {
            value : "Project 2 description",
            type : "string",
        },
        projectowner : {
            value : { id:"OEUSER-0001", label:"Project 2 owner" , value:"OEUSER-0001"},
            type : "obejct",    
        },
        projectstartdate : {
            value : "2024-01-01",
            type : "date",
        },
        projectenddate : {
            value : "2024-01-30",
            type : "date",
        },  
        projectstatus : {
            value : { id:"inprogress", label:"In Progress" , value:"inprogress"},
            type : "object",
        },
        projectprogress : {
            value : "50%",
            type : "string",
        },
        projectcreatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectcreatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 created by" , value:"OEUSER-0001"},
            type : "object",
        },
        projectupdatedat : {
            value : "2024-01-01",
            type : "date",
        },
        projectupdatedby : {
            value : { id:"OEUSER-0001", label:"Project 1 updated by" , value:"OEUSER-0001"},
            type : "object",
        },
    }
],
}