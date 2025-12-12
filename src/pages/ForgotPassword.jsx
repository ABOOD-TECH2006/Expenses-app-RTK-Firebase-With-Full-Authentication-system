import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/auth/authThunks";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(resetPassword(data.email)).unwrap();
      setSuccessMsg("Password reset email sent! Check your inbox.");
    } catch (err) {
      console.error(err); // display error from thunk
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={4} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={3} textAlign="center">
        Forgot Password
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

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        {successMsg && (
          <Typography color="success.main" variant="body2">
            {successMsg}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Send Reset Email"}
        </Button>

        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPassword;
