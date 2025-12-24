export const ReS = (
  res,
  { data = {}, message = "", status = true, statuscode = 200, ...rest }
) => {
  return res.status(statuscode).json({
    status: status,
    message,
     statuscode,
    data,
    ...rest,
  });
};

export const ReE = (
  res,
  { data = {}, message = "", status = false, statuscode = 400, ...rest }
) => {
  return res
    .status(statuscode)
    .json({status , message , statuscode ,  data, ...rest });
};
