import { ReS, ReE } from '../utils/Res.utils.js';


export const notificationSettings = (req, res)=>{

    return ReS(res, {data : "Notification Settings"})
}

export const emailSettings = (req, res)=>{

    return ReS(res, {data : "Email Settings"})
} 

export const securitySettings = (req, res)=>{

    return ReS(res, {data : "Security Settings"})
}

export const privacySettings = (req, res)=>{

    return ReS(res, {data : "Privacy Settings"})
}


export const applicationSettings = (req, res)=>{

    return ReS(res, {data : "Application Settings"})
}