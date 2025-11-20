// Success response utility
export const ReS = (res, { data = {}, message = "", status = true }, code = 200) => {
    return res.status(code).json({ data, message, status });
};

// Error response utility
export const ReE = (res, { data = "", message = "", status = false }, code = 400) => {
    return res.status(code).json({ data, message, status });
};


const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };