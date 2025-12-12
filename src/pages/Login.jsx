import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginWithGoogle } from "../redux/auth/authThunks";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/"); // إذا كان المستخدم موجود بالفعل
  }, [user, navigate]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        loginUser({ email: data.email, password: data.password })
      ).unwrap();
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/"); // توجيه بعد التحديث الفوري للـ state
    } catch (err) {
      Swal.fire({ icon: "error", title: "Login failed", text: err });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await dispatch(loginWithGoogle()).unwrap();
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({ icon: "error", title: "Google Login failed", text: err });
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={4} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={3} textAlign="center">
        Login
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          label="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>

        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login with Google"}
        </Button>

        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </Button>
      </form>
    </Box>
  );
};

export default Login;
