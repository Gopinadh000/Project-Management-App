import { Button, TextField, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";
import SnackBar from "../../components/snack-bar/SnackBar";

const RegisterPage = () => {
  const navigate = useNavigate();
  const firstErrorField = useRef(null);

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyId: "",
    email: "",
    password: "",
    userRole: "SUPER-ADMIN",
  });

  const [errors, setErrors] = useState({});
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    let focusField = null;

    if (!registerData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      focusField = focusField || "firstName";
    } else if (/[#,$,%]/.test(registerData.firstName)) {
      newErrors.firstName = "Special characters not allowed";
      focusField = focusField || "firstName";
    }

    if (!registerData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      focusField = focusField || "lastName";
    }

    if (!registerData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
      focusField = focusField || "companyName";
    }

    if (!registerData.companyId.trim()) {
      newErrors.companyId = "Company Id is required";
      focusField = focusField || "companyId";
    }

    if (!registerData.email.trim()) {
      newErrors.email = "Email is required";
      focusField = focusField || "email";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "Invalid email format";
      focusField = focusField || "email";
    }

    if (!registerData.password.trim()) {
      newErrors.password = "Password is required";
      focusField = focusField || "password";
    } else if (registerData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      focusField = focusField || "password";
    }

    setErrors(newErrors);

    if (focusField && firstErrorField.current) {
      firstErrorField.current[focusField].focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData, 
      [name] : value
    });

    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when typing
  };

  // Submit function
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const res = await apiInstance.post("/auth/register", registerData);

      if (res.data.status) {
        setSnackMessage("Registration successful!");
        setOpenSnack(true);
        navigate("/login");
      } else {
        setSnackMessage(res.data.message || "Registration failed");
        setOpenSnack(true);
      }
    } catch (error) {
      setSnackMessage(error.response?.data?.message || "Something went wrong");
      setOpenSnack(true);
    }
  };

  return (
    <div className="flex p-20 h-screen ">
      {/* Left Panel */}
      <div className="w-1/3 md:w-3/5 xxs:hidden xs:hidden sm:hidden md:flex bg-blue-900 text-white flex flex-col rounded-l-md p-10 gap-8 shadow-lg">
        <div className="flex items-center gap-2 font-bold h-10 mb-2">
          <DashboardOutlinedIcon className="border" /> Go Vantage
        </div>
        <Typography variant="h5">Create Your Account</Typography>
        <Typography>
          Welcome to our registration page! Get started now.
        </Typography>
        <Typography>Simple & Secure Registration</Typography>
        <Typography>We prioritize your privacy and data security.</Typography>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 sm:w-full border">
        <div className="p-10">
          <div className="flex flex-col gap-4">
            <Typography variant="h5" className="px-2 text-gray-600">
              Welcome! To{" "}
              <span className="text-blue-900 font-semibold"> Go Vantage </span>{" "}
              Sign Up as a{" "}
              <span className="ml-2 font-medium text-blue-900">
                Super Admin
              </span>
            </Typography>

            {/* Input Fields */}
            <div className="flex gap-8 w-full p-2 ">
              <TextField
                variant="filled"
                fullWidth
                placeholder="First Name"
                label="First Name"
                name="firstName"
                onChange={handleInputChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                inputRef={(el) =>
                  (firstErrorField.current = {
                    ...firstErrorField.current,
                    firstName: el,
                  })
                }
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="filled"
                name="lastName"
                onChange={handleInputChange}
                inputRef={(el) =>
                  (firstErrorField.current = {
                    ...firstErrorField.current,
                    lastName: el,
                  })
                }
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>
            <div className="flex gap-8 p-2">
              <TextField
                fullWidth
                label="Company Name"
                variant="filled"
                name="companyName"
                value={registerData.companyName}
                onChange={handleInputChange}
                error={!!errors.companyName}
                helperText={errors.companyName}
              />
              <TextField
                fullWidth
                label="Company Code"
                variant="filled"
                name="companyId"
                value={registerData.companyId}
                onChange={handleInputChange}
                error={!!errors.companyId}
                helperText={errors.companyId}
              />
            </div>
            <div className=" flex flex-col p-2 gap-8">
              <TextField
                fullWidth
                label="Email"
                variant="filled"
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="filled"
                name="password"
                value={registerData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-10 px-2">
            <span className="px-2 text-md">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Sign In
              </Link>
            </span>
            <Button className="h-10" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <SnackBar
        openSnackbar={openSnack}
        message={snackMessage}
      
        onClose={() => setOpenSnack(false)}
      />
    </div>
  );
};

export default RegisterPage;
