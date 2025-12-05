import dotenv from 'dotenv';
dotenv.config();

function env(key){
    return process.env[key];
}

//Change Only Here For DB CREDENTIALS
export const DB_CREDIENTAILS_CONFIG ={
    DEV :{
        HOST :"localhost",
        PORT : 3306,
        USERNAME :"root",
        PASSWORD : "ovaledge!",
        DATABASE : "projectmanagement",
        ssl: false,
    },
    TEST :{
        HOST :"test_instance_host",
        PORT : 3306,
        USERNAME :"root",
        PASSWORD : "Welcome@123",
        DATABASE : "pm_app",
        ssl: false,
    },
    PROD : {
        HOST : env('APP_DB_HOST'),
        PORT : env('APP_DB_PORT'),
        USERNAME :env('APP_DB_USER'),
        PASSWORD : env('APP_DB_PASSWORD'),
        DATABASE : env('APP_DB_NAME'),
        ssl: false,
    },
}