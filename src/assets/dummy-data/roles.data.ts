


export const APP_ROLES ={

    SUPERADMIN :[
        //dashboard 
         "view:dashbaord",
         "view:users",

        //users
         "create:user" , 
         "update:user",
         "delete:user" ,

     ],
    ADMIN : [ //dashboard 
        "view:dashbaord",
         "view:users",

         "create:project" , 
         "update:project", 
         "delete:project",

         //task
         "create:task",
         "update:task",
         "delete:own-task"
        ],

    USER : [
        //dashboard
        "view:own-dashboard",
        "create:project",
        "update: own-project",
        "delete: own-project",

        //task 
        "create:task",
        "update:task",
        "delete:own-task",
    ]
};



// export const hasPermision = ( user :any, permission :any , taskOwnerId :any)=>{
//     if (!APP_ROLES[user.role]) return false;

//    if (APP_ROLES[user.role].includes(permission)) return true;

//   if (permission === "delete:own-task" || permission == "update:own-task") {
//     return user.id === taskOwnerId;
//   }

//   return false;


// }