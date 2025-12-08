

export const ReS = (res, {data = {}, message= "", staus = true , statuscode = 200}) =>{
    return res.status(code).json({
        success: staus,
        message,
        data,
        statuscode,
    })
}

export const ReE = (res, {data = {}, message= "", status= false , statuscode = 400}) =>{
    return res.status(statuscode).json({data, message, status, statuscode,})
}