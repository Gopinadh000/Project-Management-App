

export const ReS = (res, {data = {}, message= "", staus = true},  code = 200) =>{
    return res.status(code).json({
        success: staus,
        message,
        data
    })
}

export const ReE = (res, {data = {}, message= "", status= false}, code = 400) =>{
    return res.status(code).json({data, message, status})
}