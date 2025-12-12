// src/redux/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  loginWithGoogle,
  resetPassword,
  logoutUser,
  initializeAuth,
} from "./authThunks";

const initialState = {
  user: null, // المستخدم الحالي
  loading: false, // حالة العمليات غير المتزامنة
  error: null, // أي خطأ يحدث
  initialized: false, // لتحديد إذا تم التحقق من auth أم لا
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ----------- Register -----------
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------- Login -----------
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------- Google Login -----------
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------- Reset Password -----------
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------- Logout -----------
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------- Initialize Auth -----------
      .addCase(initializeAuth.pending, (state) => {
        state.initialized = false;
      })
      .addCase(initializeAuth.rejected, (state) => {
        state.initialized = true;
      });

  },
});

export default authSlice.reducer;
