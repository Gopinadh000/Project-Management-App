import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Box, Button, TextField, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SnackBar from "../../components/snack-bar/SnackBar";
import { useAuth } from "../../services/context/AuthContext";
import loginimage from "../../assets/loginimage.svg";
import InputFeild from "../../components/input-fields/input-feild/InputFeild";
import { EmailOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage = () => {
  const { login } = useAuth();
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userDataErrors, setUserDataErrors] = useState({
    email: "",
    password: "",
  });

  const [snackMsg, setSnackMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e: any) => {
    if (e.target.value == "") {
      setUserDataErrors({
        ...userDataErrors,
        [e.target.name]: `${e.target.name} is Required`,
      });
    } else {
      setUserDataErrors({
        ...userDataErrors,
        [e.target.name]: "",
      });
    }
    console.log({ [e.target.name]: e.target.value });
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;

    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const validatePasswordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/;

    let validedEmail = validateEmailRegex.test(userdata.email);
    let validatedPassword = validatePasswordRegex.test(userdata.password);

    let errors = { ...userDataErrors };

    // Email Validation
    if (userdata.email.trim() === "") {
      errors.email = "Email is Required";
      isValid = false;
    } else if (!validedEmail) {
      errors.email = "Invalid Email Address";
      isValid = false;
    } else {
      errors.email = "";
    }

    // Password Validation
    if (userdata.password.trim() === "") {
      errors.password = "Password is Required";
      isValid = false;
    } else if (!validatedPassword) {
      errors.password =
        "Password must be 8+ chars, with uppercase, lowercase, number & symbol.";
      isValid = false;
    } else {
      errors.password = "";
    }

    setUserDataErrors(errors);
    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      await login(userdata.email, userdata.password);
      // Success - AuthContext will handle navigation
      setSnackMsg("Login successful!");
    } catch (error: any) {
      setSnackMsg(error.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen p-20 ">
      <div className="md:w-3/5 xxs:hidden xs:hidden sm:hidden md:flex flex items-center shadow-sm bg-white">
        <img src={loginimage} alt="login" />
      </div>
      <div className="sm:w-full md:w-2/5 shadow-md border-t bg-white">
        <div className="border-gray-20 h-full p-10">
          <div className="text-blue-900 font-bold h-10 flex items-center gap-2  mb-2">
            <DashboardOutlinedIcon className="text-blue-800  ml-2 font-2xl" />{" "}
            Go Manage
          </div>
          <div className="mb-4 flex flex-col gap-4">
            <Typography variant="h5" component="h5">
              Login in to your Account
            </Typography>
            <Typography variant="inherit" component="p" color="gray">
              Welcome Back!. Sign to your Account.
            </Typography>
          </div>
          <div className="flex cursor-pointer  gap-2 w-full justify-between items-center">
            <span className="bg-gray-100 flex gap-1 text-red-600 justify-center items-center m-1 p-2 w-full hover:bg-gray-100 border-2 border-transparent hover:border-app-primary-500 transition-all duration-200">
              <GoogleIcon />
              Google
            </span>
            <span className="bg-gray-100 flex gap-1 text-blue-600 justify-center items-center m-1 p-2 w-full hover:bg-gray-100 border-2 border-transparent hover:border-app-primary-500 transition-all duration-200">
              <FacebookOutlinedIcon />
              Facebook
            </span>
          </div>
          <div className="relative mt-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div></div>
          <div className="flex gap-8 flex-col mt-5 p-4">
            <div className="flex flex-col gap-2">
              <TextField
                className="w-full"
                type="text"
                size="medium"
                variant="standard"
                label="Email"
                placeholder="user@google.com"
                name="email"
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <EmailOutlined
                        fontSize="small"
                        className="text-app-secondary-500  mr-2"
                      />
                    ),
                  },
                }}
              />
              {userDataErrors.email && (
                <span className="text-xs text-red-400">
                  {userDataErrors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                label="Password"
                name="password"
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <LockOutlinedIcon
                        fontSize="small"
                        className="text-app-secondary-500  mr-2"
                      />
                    ),
                    endAdornment: (
                      <Box>
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon
                            fontSize="small"
                            className="text-app-secondary-500  mr-2 cursor-pointer"
                            onClick={handleShowPasswordToggle}
                          />
                        ) : (
                          <VisibilityOutlinedIcon
                            fontSize="small"
                            className="text-app-secondary-500  mr-2 cursor-pointer"
                            onClick={handleShowPasswordToggle}
                          />
                        )}
                      </Box>
                    ),
                  },
                }}
              />
              {userDataErrors.password && (
                <span className="text-xs text-red-400">
                  {userDataErrors.password}
                </span>
              )}
            </div>
            <Button
              className=""
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Submit"}
            </Button>
            <p className="text-sm">
              Don't Have a an Account ?{" "}
              <NavLink to="/register" className="text-blue-500">
                SignUp{" "}
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
      {snackMsg && (
        <SnackBar message={snackMsg} onClose={() => setSnackMsg("")} />
      )}
    </div>
  );
};

export default LoginPage;
