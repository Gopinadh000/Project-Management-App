import { ReS, ReE } from '../utils/Res.utils.js';

export const getDashboardData = (req, res)=>{

    return ReS(res, {data : "Dashboard Data"})
};

export const getTotalUsers = (req, res)=>{

    return ReS(res, {data : "Total Users"})
};

export const getTotalProjects = (req, res)=>{

    return ReS(res, {data : "Total Projects"})
};

export const getTotalTasks = (req, res)=>{

    return ReS(res, {data : "Total Tasks"})
};
