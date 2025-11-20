import userimg from "../user.webp"


export const projectcolumns = [
    // { id:1, field: 'id', headerName: 'Project Id', width: 150 },
    { id:2, field: 'projectname', headerName: 'Project Name', editable: true,  minWidth: 150 ,  resizable: true, 
      
      },
    { id:3, field: 'projectdescription', headerName: 'Description', width: 250, editable: true, },
    { 
        id:4,
      field: 'projectOwner',
      headerName: 'Owner',
      
    },
    {
        id:5,
      field: 'projectstartdate',
      headerName: 'Start Date',
     
    },
    {
        id:6,
        field: 'projectenddate',
        headerName: 'End Date',
     
        
       
    },
    {
        id:7,
        field: 'projectstatus',
        headerName: 'Status',
      
        // renderCell : {(item)=> (<div>sadni</div>)}
    },
    // {
    //     id:8,
    //     field: 'projecttype',
    //     headerName: 'Progress',
    //     // width: 150,
    // },
]

export const projectsdata = [
    // {
    //     projectid: 'OEPROJECT0001',
    //     projectname: "HR Portal Project",
    //     projectdescription: "This is a project to maintain an HR Portal for OE Company.",
    //     projectOwner: {
    //         userid :'OEUSER-0001',
    //         username :"Shewag V",
    //         userimg :userimg,
    //     },
    //     project_startdate: "2024/01/10",
    //     project_enddate: "2024/12/31",
    //     project_status: {
    //         statusid: 'inprogress',      
    //         statusname :"In-Progress"
    //     },
    //     project_progress: "50%",
    //     totaltasks : 100,
    //     completedtasks : 70,
    //     incompletedtasks :30,
    //     projectbgcolor: "#fff",
    //     create_at : "2024/01/01",
    //     created_by : {
    //         userid :'OEUSER-0001',
    //         username :"Shewag V",
    //     },
    //     updated_at : "",
    //     updated_by :{
    //         userid : "",
    //         username :"",
    //     },
        


    // },
    {
        id: 'OEPROJECT0002',
        projectname: "Employee Management System",
        projectdescription: "This project manages employee details, attendance, and payroll for OE Company.",
        projectOwner: "Sravani Kalyan",
        project_startdate: "2023/08/15",
        project_enddate: "2024/05/10",
        project_created_at: "2023/08/01",
        project_status: "Completed",
        project_progress: "100",
        proejctownerimg: userimg,
        projectstatuscolor:"green"
    },
    {
        id: 'OEPROJECT0003',
        projectname: "Inventory Management System",
        projectdescription: "An internal project to manage and track inventory in the company warehouse.",
        projectOwner: "Rajesh Sharma",
        project_startdate: "2024/02/01",
        project_enddate: "2024/09/30",
        project_created_at: "2024/01/15",
        project_status: "Not Started",
        project_progress: "0",
        proejctownerimg: userimg,
        projectstatuscolor:"gray"
    },
    {
        id: 'OEPROJECT0004',
        projectname: "Marketing Automation Tool",
        projectdescription: "A project focused on building a tool for automating marketing campaigns and lead tracking.",
        projectOwner: "Priya Reddy",
        project_startdate: "2024/03/10",
        project_enddate: "2024/11/25",
        project_created_at: "2024/02/20",
        project_status: "In-Progress",
        project_progress: "30",
        proejctownerimg: userimg,
        projectstatuscolor:"orange"
    },
    {
        id: 'OEPROJECT0005',
        projectname: "Customer Feedback Platform",
        projectdescription: "Develop a platform for collecting and analyzing customer feedback for product improvement.",
        projectOwner: "Vikram Patel",
        project_startdate: "2024/04/05",
        project_enddate: "2024/12/15",
        project_created_at: "2024/03/20",
        project_status: "In-Progress",
        project_progress: "65",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "
    },
    {
        id: 'OEPROJECT0006',
        projectname: "E-commerce Website Revamp",
        projectdescription: "A project to redesign and improve the performance of the company's e-commerce website.",
        projectOwner: "Anjali Mehra",
        project_startdate: "2023/11/01",
        project_enddate: "2024/06/30",
        project_created_at: "2023/10/15",
        project_status: "In-Progress",
        project_progress: "80",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "
    },
    {
        id: 'OEPROJECT0007',
        projectname: "Mobile App Development",
        projectdescription: "Develop a mobile app for managing employee time-tracking and attendance.",
        projectOwner: "Nikhil Kumar",
        project_startdate: "2024/05/01",
        project_enddate: "2024/10/31",
        project_created_at: "2024/04/20",
        project_status: "Not Started",
        project_progress: "0",
        proejctownerimg: userimg,
        projectstatuscolor:"gray"
    },
    {
        id: 'OEPROJECT0008',
        projectname: "Cloud Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Shewag V",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "
    },
    {
        id: 'OEPROJECT0009',
        projectname: "Google Cloud Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Shekar Dhawan",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "
    },
    {
        id: 'OEPROJECT0010',
        projectname: "Web App Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Amit Desai",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "
    }, 
    {
        id: 'OEPROJECT0011',
        projectname: "Applkcation Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Virat Kohli",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
    {
        id: 'OEPROJECT0012',
        projectname: "Code Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Aditya Nanda",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
    {
        id: 'OEPROJECT0013',
        projectname: "Data Source Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Rahul Choudary",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
    {
        id: 'OEPROJECT0014',
        projectname: "Mongo db Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Gopinadh",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
    {
        id: 'OEPROJECT0015',
        projectname: "SSIS Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Amit Desai",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
    {
       id: 'OEPROJECT0015',
        projectname: "Data Migration",
        projectdescription: "Migrate the company's infrastructure to a cloud-based platform for better scalability.",
        projectOwner: "Gopinadh",
        project_startdate: "2024/02/01",
        project_enddate: "2024/08/15",
        project_created_at: "2024/01/05",
        project_status: "In-Progress",
        project_progress: "45",
        proejctownerimg: userimg,
        projectstatuscolor:"DodgerBlue "

    },
];



export const TASKSDATA = [

    {
        taskid : 'OETASK-001',
        taskname : "Create React App",
        taskassignee : {
            userid :'OEUSER-0001',
            username :"Gopinadh Vallabhaneni",
            userimg :userimg,
            // role :"admin"
        },
        taskstatus : {
             statusid: 'inprogress',      // [ 'todo' , 'inprogress' ,  'hold' ,  'completed'], ['ordered' , 'packed', 'dispached' , 'shipped' , 'delivered']
             statusname :"In-Progress"
        },
        projectinfo : {
            projectid : 'OEPROJECT0001',
            proejctowner : {
                userid :'OEUSER-0001',
                username :"Gopinadh Vallabhaneni",
                userimg :userimg,
            }
        },
        created_by : {
            userid :'OEUSER-0001',
            username :"Shewag V",
            userimg :userimg,
            // role :"admin"
        },
        create_at : "2024/01/01",
        updated_by :{
            userid :'OEUSER-0001',
            username :"Gopinadh Vallabhaneni",
            userimg :userimg
        },
        updated_at : ''
    }
]



const proejctsdata2=[ 

    {
        projectid: 'OEPROJECT0001',
        projectname: "HR Portal Project",
        projectdescription: "This is a project to maintain an HR Portal for OE Company.",
        projectOwner: {
            userid :'OEUSER-0001',
            username :"Shewag V",
            userimg :userimg,
        },
        project_startdate: "2024/01/10",
        project_enddate: "2024/12/31",
        project_status: {
            statusid: 'inprogress',      
            statusname :"In-Progress"
        },
        project_progress: "50%",
        totaltasks : 100,
        completedtasks : 70,
        incompletedtasks :30,
        projectbgcolor: "#fff",
        create_at : "2024/01/01",
        created_by : {
            userid :'OEUSER-0001',
            username :"Shewag V",
        },
        updated_at : "",
        updated_by :{
            userid : "",
            username :"",
        },
        
    }
]



export const proejctsdata3 = 
    [
        {
            "projectid": "OEPROJECT0001",
            "projectname": "HR Portal Project",
            "projectdescription": "This is a project to maintain an HR Portal for OE Company.",
            "projectOwner": {
                "userid": "OEUSER-0001",
                "username": "Shewag V",
                "userimg": "userimg"
            },
            "project_startdate": "2024/01/10",
            "project_enddate": "2024/12/31",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "50%",
            "totaltasks": 100,
            "completedtasks": 70,
            "incompletedtasks": 30,
            "projectbgcolor": "#fff",
            "create_at": "2024/01/01",
            "created_by": {
                "userid": "OEUSER-0001",
                "username": "Shewag V"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0002",
            "projectname": "Finance Management System",
            "projectdescription": "Developing a finance management system for better budgeting.",
            "projectOwner": {
                "userid": "OEUSER-0002",
                "username": "James H",
                "userimg": "userimg"
            },
            "project_startdate": "2024/02/01",
            "project_enddate": "2024/11/30",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 80,
            "completedtasks": 0,
            "incompletedtasks": 80,
            "projectbgcolor": "#f0f0f0",
            "create_at": "2024/01/15",
            "created_by": {
                "userid": "OEUSER-0002",
                "username": "James H"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0003",
            "projectname": "E-commerce Website",
            "projectdescription": "Creating an e-commerce platform for online shopping.",
            "projectOwner": {
                "userid": "OEUSER-0003",
                "username": "Alice B",
                "userimg": "userimg"
            },
            "project_startdate": "2024/01/15",
            "project_enddate": "2024/10/15",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "40%",
            "totaltasks": 120,
            "completedtasks": 48,
            "incompletedtasks": 72,
            "projectbgcolor": "#e0f7fa",
            "create_at": "2024/01/05",
            "created_by": {
                "userid": "OEUSER-0003",
                "username": "Alice B"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0004",
            "projectname": "Mobile App Development",
            "projectdescription": "Designing a mobile application for customer engagement.",
            "projectOwner": {
                "userid": "OEUSER-0004",
                "username": "David C",
                "userimg": "userimg"
            },
            "project_startdate": "2024/03/01",
            "project_enddate": "2024/08/31",
            "project_status": {
                "statusid": "hold",
                "statusname": "On Hold"
            },
            "project_progress": "20%",
            "totaltasks": 60,
            "completedtasks": 12,
            "incompletedtasks": 48,
            "projectbgcolor": "#ffebee",
            "create_at": "2024/01/25",
            "created_by": {
                "userid": "OEUSER-0004",
                "username": "David C"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0005",
            "projectname": "Website Redesign",
            "projectdescription": "Revamping the company website for better UX.",
            "projectOwner": {
                "userid": "OEUSER-0005",
                "username": "Laura D",
                "userimg": "userimg"
            },
            "project_startdate": "2024/02/15",
            "project_enddate": "2024/06/15",
            "project_status": {
                "statusid": "completed",
                "statusname": "Completed"
            },
            "project_progress": "100%",
            "totaltasks": 40,
            "completedtasks": 40,
            "incompletedtasks": 0,
            "projectbgcolor": "#c8e6c9",
            "create_at": "2024/02/01",
            "created_by": {
                "userid": "OEUSER-0005",
                "username": "Laura D"
            },
            "updated_at": "2024/06/16",
            "updated_by": {
                "userid": "OEUSER-0005",
                "username": "Laura D"
            }
        },
        {
            "projectid": "OEPROJECT0006",
            "projectname": "Data Analysis Tool",
            "projectdescription": "Building a tool for data visualization and analysis.",
            "projectOwner": {
                "userid": "OEUSER-0006",
                "username": "Mike E",
                "userimg": "userimg"
            },
            "project_startdate": "2024/01/20",
            "project_enddate": "2024/09/20",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "30%",
            "totaltasks": 90,
            "completedtasks": 27,
            "incompletedtasks": 63,
            "projectbgcolor": "#bbdefb",
            "create_at": "2024/01/10",
            "created_by": {
                "userid": "OEUSER-0006",
                "username": "Mike E"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0007",
            "projectname": "AI Chatbot Development",
            "projectdescription": "Creating an AI chatbot for customer support.",
            "projectOwner": {
                "userid": "OEUSER-0007",
                "username": "Sara F",
                "userimg": "userimg"
            },
            "project_startdate": "2024/03/10",
            "project_enddate": "2024/11/10",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 75,
            "completedtasks": 0,
            "incompletedtasks": 75,
            "projectbgcolor": "#ffccbc",
            "create_at": "2024/02/20",
            "created_by": {
                "userid": "OEUSER-0007",
                "username": "Sara F"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0008",
            "projectname": "Cloud Migration",
            "projectdescription": "Migrating on-premise applications to the cloud.",
            "projectOwner": {
                "userid": "OEUSER-0008",
                "username": "Tom G",
                "userimg": "userimg"
            },
            "project_startdate": "2024/04/01",
            "project_enddate": "2024/12/01",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "20%",
            "totaltasks": 100,
            "completedtasks": 20,
            "incompletedtasks": 80,
            "projectbgcolor": "#d1c4e9",
            "create_at": "2024/02/28",
            "created_by": {
                "userid": "OEUSER-0008",
                "username": "Tom G"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0009",
            "projectname": "Marketing Campaign",
            "projectdescription": "Launching a new marketing campaign for product awareness.",
            "projectOwner": {
                "userid": "OEUSER-0009",
                "username": "Linda H",
                "userimg": "userimg"
            },
            "project_startdate": "2024/05/01",
            "project_enddate": "2024/07/30",
            "project_status": {
                "statusid": "completed",
                "statusname": "Completed"
            },
            "project_progress": "100%",
            "totaltasks": 50,
            "completedtasks": 50,
            "incompletedtasks": 0,
            "projectbgcolor": "#fff9c4",
            "create_at": "2024/03/15",
            "created_by": {
                "userid": "OEUSER-0009",
                "username": "Linda H"
            },
            "updated_at": "2024/07/31",
            "updated_by": {
                "userid": "OEUSER-0009",
                "username": "Linda H"
            }
        },
        {
            "projectid": "OEPROJECT0010",
            "projectname": "Inventory Management System",
            "projectdescription": "Creating a system to manage inventory efficiently.",
            "projectOwner": {
                "userid": "OEUSER-0010",
                "username": "Oliver I",
                "userimg": "userimg"
            },
            "project_startdate": "2024/06/01",
            "project_enddate": "2024/09/01",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "10%",
            "totaltasks": 70,
            "completedtasks": 7,
            "incompletedtasks": 63,
            "projectbgcolor": "#dcedc8",
            "create_at": "2024/04/10",
            "created_by": {
                "userid": "OEUSER-0010",
                "username": "Oliver I"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0011",
            "projectname": "Social Media Strategy",
            "projectdescription": "Developing a comprehensive social media strategy.",
            "projectOwner": {
                "userid": "OEUSER-0011",
                "username": "Nina J",
                "userimg": "userimg"
            },
            "project_startdate": "2024/02/05",
            "project_enddate": "2024/05/30",
            "project_status": {
                "statusid": "completed",
                "statusname": "Completed"
            },
            "project_progress": "100%",
            "totaltasks": 30,
            "completedtasks": 30,
            "incompletedtasks": 0,
            "projectbgcolor": "#ffe082",
            "create_at": "2024/01/15",
            "created_by": {
                "userid": "OEUSER-0011",
                "username": "Nina J"
            },
            "updated_at": "2024/05/31",
            "updated_by": {
                "userid": "OEUSER-0011",
                "username": "Nina J"
            }
        },
        {
            "projectid": "OEPROJECT0012",
            "projectname": "Customer Feedback System",
            "projectdescription": "Implementing a system to gather customer feedback.",
            "projectOwner": {
                "userid": "OEUSER-0012",
                "username": "Peter K",
                "userimg": "userimg"
            },
            "project_startdate": "2024/03/15",
            "project_enddate": "2024/08/15",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "25%",
            "totaltasks": 50,
            "completedtasks": 12,
            "incompletedtasks": 38,
            "projectbgcolor": "#b2ebf2",
            "create_at": "2024/02/25",
            "created_by": {
                "userid": "OEUSER-0012",
                "username": "Peter K"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0013",
            "projectname": "Training Program Development",
            "projectdescription": "Creating training programs for staff development.",
            "projectOwner": {
                "userid": "OEUSER-0013",
                "username": "Rita L",
                "userimg": "userimg"
            },
            "project_startdate": "2024/07/01",
            "project_enddate": "2024/09/30",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 40,
            "completedtasks": 0,
            "incompletedtasks": 40,
            "projectbgcolor": "#f8bbd0",
            "create_at": "2024/05/01",
            "created_by": {
                "userid": "OEUSER-0013",
                "username": "Rita L"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0014",
            "projectname": "Website SEO Optimization",
            "projectdescription": "Optimizing the website for search engines.",
            "projectOwner": {
                "userid": "OEUSER-0014",
                "username": "Sam M",
                "userimg": "userimg"
            },
            "project_startdate": "2024/04/15",
            "project_enddate": "2024/07/15",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "35%",
            "totaltasks": 45,
            "completedtasks": 16,
            "incompletedtasks": 29,
            "projectbgcolor": "#e1f5fe",
            "create_at": "2024/03/20",
            "created_by": {
                "userid": "OEUSER-0014",
                "username": "Sam M"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0015",
            "projectname": "Product Launch Event",
            "projectdescription": "Organizing an event for product launch.",
            "projectOwner": {
                "userid": "OEUSER-0015",
                "username": "Tina N",
                "userimg": "userimg"
            },
            "project_startdate": "2024/08/01",
            "project_enddate": "2024/08/30",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 20,
            "completedtasks": 0,
            "incompletedtasks": 20,
            "projectbgcolor": "#fce4ec",
            "create_at": "2024/06/15",
            "created_by": {
                "userid": "OEUSER-0015",
                "username": "Tina N"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0016",
            "projectname": "Supply Chain Optimization",
            "projectdescription": "Improving supply chain processes and efficiency.",
            "projectOwner": {
                "userid": "OEUSER-0016",
                "username": "Vikram O",
                "userimg": "userimg"
            },
            "project_startdate": "2024/05/10",
            "project_enddate": "2024/11/10",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "15%",
            "totaltasks": 80,
            "completedtasks": 12,
            "incompletedtasks": 68,
            "projectbgcolor": "#f0f4c3",
            "create_at": "2024/04/01",
            "created_by": {
                "userid": "OEUSER-0016",
                "username": "Vikram O"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0017",
            "projectname": "Customer Relationship Management",
            "projectdescription": "Implementing a CRM system for better customer service.",
            "projectOwner": {
                "userid": "OEUSER-0017",
                "username": "Wendy P",
                "userimg": "userimg"
            },
            "project_startdate": "2024/06/20",
            "project_enddate": "2024/12/20",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "5%",
            "totaltasks": 100,
            "completedtasks": 5,
            "incompletedtasks": 95,
            "projectbgcolor": "#ffe0b2",
            "create_at": "2024/05/05",
            "created_by": {
                "userid": "OEUSER-0017",
                "username": "Wendy P"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0018",
            "projectname": "Risk Management Framework",
            "projectdescription": "Developing a framework for risk management.",
            "projectOwner": {
                "userid": "OEUSER-0018",
                "username": "Xavier Q",
                "userimg": "userimg"
            },
            "project_startdate": "2024/07/05",
            "project_enddate": "2024/10/30",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 25,
            "completedtasks": 0,
            "incompletedtasks": 25,
            "projectbgcolor": "#c5cae9",
            "create_at": "2024/06/01",
            "created_by": {
                "userid": "OEUSER-0018",
                "username": "Xavier Q"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0019",
            "projectname": "Annual Financial Audit",
            "projectdescription": "Conducting the annual financial audit.",
            "projectOwner": {
                "userid": "OEUSER-0019",
                "username": "Yasmine R",
                "userimg": "userimg"
            },
            "project_startdate": "2024/08/10",
            "project_enddate": "2024/09/30",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "10%",
            "totaltasks": 50,
            "completedtasks": 5,
            "incompletedtasks": 45,
            "projectbgcolor": "#e1f5fe",
            "create_at": "2024/06/25",
            "created_by": {
                "userid": "OEUSER-0019",
                "username": "Yasmine R"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0020",
            "projectname": "IT Security Assessment",
            "projectdescription": "Assessing IT security measures and protocols.",
            "projectOwner": {
                "userid": "OEUSER-0020",
                "username": "Zachary S",
                "userimg": "userimg"
            },
            "project_startdate": "2024/07/15",
            "project_enddate": "2024/12/15",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 60,
            "completedtasks": 0,
            "incompletedtasks": 60,
            "projectbgcolor": "#f3e5f5",
            "create_at": "2024/05/20",
            "created_by": {
                "userid": "OEUSER-0020",
                "username": "Zachary S"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0021",
            "projectname": "Data Privacy Compliance",
            "projectdescription": "Ensuring compliance with data privacy regulations.",
            "projectOwner": {
                "userid": "OEUSER-0021",
                "username": "Amy T",
                "userimg": "userimg"
            },
            "project_startdate": "2024/08/20",
            "project_enddate": "2024/11/20",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "5%",
            "totaltasks": 70,
            "completedtasks": 3,
            "incompletedtasks": 67,
            "projectbgcolor": "#e8f5e9",
            "create_at": "2024/06/30",
            "created_by": {
                "userid": "OEUSER-0021",
                "username": "Amy T"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0022",
            "projectname": "Employee Onboarding System",
            "projectdescription": "Implementing an onboarding system for new hires.",
            "projectOwner": {
                "userid": "OEUSER-0022",
                "username": "Ben U",
                "userimg": "userimg"
            },
            "project_startdate": "2024/09/01",
            "project_enddate": "2024/12/01",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 100,
            "completedtasks": 0,
            "incompletedtasks": 100,
            "projectbgcolor": "#fce4ec",
            "create_at": "2024/07/15",
            "created_by": {
                "userid": "OEUSER-0022",
                "username": "Ben U"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0023",
            "projectname": "Mobile Payment Integration",
            "projectdescription": "Integrating mobile payment solutions into the app.",
            "projectOwner": {
                "userid": "OEUSER-0023",
                "username": "Catherine V",
                "userimg": "userimg"
            },
            "project_startdate": "2024/09/15",
            "project_enddate": "2024/12/15",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "20%",
            "totaltasks": 60,
            "completedtasks": 12,
            "incompletedtasks": 48,
            "projectbgcolor": "#ffe0b2",
            "create_at": "2024/07/30",
            "created_by": {
                "userid": "OEUSER-0023",
                "username": "Catherine V"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0024",
            "projectname": "Business Continuity Plan",
            "projectdescription": "Developing a plan for business continuity.",
            "projectOwner": {
                "userid": "OEUSER-0024",
                "username": "Derek W",
                "userimg": "userimg"
            },
            "project_startdate": "2024/10/01",
            "project_enddate": "2024/12/31",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 30,
            "completedtasks": 0,
            "incompletedtasks": 30,
            "projectbgcolor": "#e0e0e0",
            "create_at": "2024/08/01",
            "created_by": {
                "userid": "OEUSER-0024",
                "username": "Derek W"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0025",
            "projectname": "Website Performance Optimization",
            "projectdescription": "Improving website performance and load times.",
            "projectOwner": {
                "userid": "OEUSER-0025",
                "username": "Eva X",
                "userimg": "userimg"
            },
            "project_startdate": "2024/10/10",
            "project_enddate": "2024/12/10",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "10%",
            "totaltasks": 40,
            "completedtasks": 4,
            "incompletedtasks": 36,
            "projectbgcolor": "#f1f8e9",
            "create_at": "2024/08/15",
            "created_by": {
                "userid": "OEUSER-0025",
                "username": "Eva X"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0026",
            "projectname": "Health and Safety Training",
            "projectdescription": "Conducting health and safety training for employees.",
            "projectOwner": {
                "userid": "OEUSER-0026",
                "username": "Frank Y",
                "userimg": "userimg"
            },
            "project_startdate": "2024/09/20",
            "project_enddate": "2024/12/20",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 35,
            "completedtasks": 0,
            "incompletedtasks": 35,
            "projectbgcolor": "#f9fbe7",
            "create_at": "2024/07/25",
            "created_by": {
                "userid": "OEUSER-0026",
                "username": "Frank Y"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0027",
            "projectname": "Digital Marketing Strategy",
            "projectdescription": "Creating a digital marketing strategy for the company.",
            "projectOwner": {
                "userid": "OEUSER-0027",
                "username": "Grace Z",
                "userimg": "userimg"
            },
            "project_startdate": "2024/08/15",
            "project_enddate": "2024/12/15",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "15%",
            "totaltasks": 60,
            "completedtasks": 9,
            "incompletedtasks": 51,
            "projectbgcolor": "#e8eaf6",
            "create_at": "2024/06/20",
            "created_by": {
                "userid": "OEUSER-0027",
                "username": "Grace Z"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0028",
            "projectname": "Employee Wellness Program",
            "projectdescription": "Launching a wellness program for employees.",
            "projectOwner": {
                "userid": "OEUSER-0028",
                "username": "Hannah A",
                "userimg": "userimg"
            },
            "project_startdate": "2024/09/25",
            "project_enddate": "2024/11/25",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 50,
            "completedtasks": 0,
            "incompletedtasks": 50,
            "projectbgcolor": "#f3e5f5",
            "create_at": "2024/07/10",
            "created_by": {
                "userid": "OEUSER-0028",
                "username": "Hannah A"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0029",
            "projectname": "Network Infrastructure Upgrade",
            "projectdescription": "Upgrading the network infrastructure for better performance.",
            "projectOwner": {
                "userid": "OEUSER-0029",
                "username": "Ian B",
                "userimg": "userimg"
            },
            "project_startdate": "2024/10/05",
            "project_enddate": "2024/12/05",
            "project_status": {
                "statusid": "inprogress",
                "statusname": "In-Progress"
            },
            "project_progress": "20%",
            "totaltasks": 80,
            "completedtasks": 16,
            "incompletedtasks": 64,
            "projectbgcolor": "#ffeab6",
            "create_at": "2024/08/05",
            "created_by": {
                "userid": "OEUSER-0029",
                "username": "Ian B"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        },
        {
            "projectid": "OEPROJECT0030",
            "projectname": "Quality Assurance Process Improvement",
            "projectdescription": "Improving the quality assurance processes in the company.",
            "projectOwner": {
                "userid": "OEUSER-0030",
                "username": "Jasmine C",
                "userimg": "userimg"
            },
            "project_startdate": "2024/10/15",
            "project_enddate": "2024/12/31",
            "project_status": {
                "statusid": "todo",
                "statusname": "To-Do"
            },
            "project_progress": "0%",
            "totaltasks": 45,
            "completedtasks": 0,
            "incompletedtasks": 45,
            "projectbgcolor": "#ffe0b2",
            "create_at": "2024/09/01",
            "created_by": {
                "userid": "OEUSER-0030",
                "username": "Jasmine C"
            },
            "updated_at": "",
            "updated_by": {
                "userid": "",
                "username": ""
            }
        }
    ]
