import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/authThunks";
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

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/"); // إذا كان المستخدم موجود بالفعل
  }, [user, navigate]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        registerUser({
          email: data.email,
          password: data.password,
          displayName: data.displayName,
        })
      ).unwrap();

      Swal.fire({
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset(); // إعادة تهيئة الحقول
      navigate("/"); // توجيه بعد التسجيل
    } catch (err) {
      Swal.fire({ icon: "error", title: "Registration failed", text: err });
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={4} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={3} textAlign="center">
        Register
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          label="Display Name"
          {...register("displayName", { required: "Display Name is required" })}
          error={!!errors.displayName}
          helperText={errors.displayName?.message}
        />
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
          {...register("password", {
            required: "Password is required",
            minLength: 6,
          })}
          error={!!errors.password}
          helperText={errors.password?.message || "Minimum 6 characters"}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Register"}
        </Button>
      </form>
    </Box>
  );
};

export default Register;
