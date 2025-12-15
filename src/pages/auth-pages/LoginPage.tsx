import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Button, TextField, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SnackBar from "../../components/snack-bar/SnackBar";
import { useAuth } from "../../services/context/AuthContext";
import loginimage from "../../assets/loginimage.svg";

const LoginPage = () => {
  const { login } = useAuth();
  const [userdata, setUserData] = useState({
    email : "",
    password: "",
  });
  const [userDataErrors, setUserDataErrors] = useState({
    email: "",
    password: "",
  });

  const [snackMsg, setSnackMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: any) => {

      if (e.target.value == "") {
        setUserDataErrors({
          ...userDataErrors,
          [e.target.name] : `${e.target.name} is Required`,
        });
      }else{
          setUserDataErrors({
          ...userDataErrors,
          [e.target.name] : "",
        });
      }
      console.log( {[e.target.name] : e.target.value })
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
          <div className="text-blue-900 font-bold h-10 flex items-center  mb-2">
            <DashboardOutlinedIcon className="text-blue-800 font-bold ml-2" />{" "}
            Go Vantage
          </div>
          <div className="mb-4 flex flex-col gap-4">
            <Typography variant="h5" component="h5">
              Login in to your Account
            </Typography>
            <Typography variant="inherit" component="p" color="gray">
              Welcome Back!. Sign to your Account.
            </Typography>
          </div>
          <div className="flex cursor-pointer text-md gap-2 w-full border-2 justify-between items-center ">
            <span className="bg-gray-100 flex  gap-1  text-red-600 justify-center items-center m-1  p-2 w-full hover:bg-gray-300">
              <GoogleIcon />
              Google
            </span>
            <span className="bg-gray-100 flex justify-center text-blue-600 items-center gap-1  p-2 w-full m-1 hover:bg-gray-300">
              <FacebookOutlinedIcon />
              Facebook
            </span>
          </div>
          <div></div>
          <div className="flex gap-8 flex-col mt-20 p-4">
            <div className="flex flex-col gap-2">
              <TextField
                className="border-2 border-red-500"
                type="text"
                size="medium"
                variant="standard"
                label="Email"
                placeholder="user@google.com"
                name="email"
                onChange={handleInputChange}
              />
               {userDataErrors.email && <span className="text-xs text-red-400">
                {userDataErrors.email}
              </span> }
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                type="password"
                size="small"
                variant="standard"
                label="Password"
                name="password"
                onChange={handleInputChange}
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
      {snackMsg && <SnackBar message={snackMsg} onClose={() => setSnackMsg("")} />}
    </div>
  );
};

export default LoginPage;
