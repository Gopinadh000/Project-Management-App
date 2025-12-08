

export const ReS = (res, {data = {}, message= "", staus = true , statuscode = 200 , ...rest}) =>{
    return res.status(code).json({
        success: staus,
        message,
        data,
        statuscode,
        ...rest
    })
}

export const ReE = (res, {data = {}, message= "", status= false , statuscode = 400 , ...rest}) =>{
    return res.status(statuscode).json({data, message, status, statuscode, ...rest})
}