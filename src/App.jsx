// src/App.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "./redux/expensesSlice";
import { Container, Box, Typography, Skeleton, Button } from "@mui/material";

import ExpensesForm from "./Components/ExpensesForm";
import ExpensesTable from "./Components/ExpensesTable";
import MainImage from "./resources/Images/m1.png";

// Import Auth Thunks
import {
  loginWithGoogle,
  logoutUser,
  initializeAuth,
} from "./redux/auth/authThunks";

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.expenses);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchExpenses());
    dispatch(initializeAuth()); // تحقق من وجود مستخدم مسجل عند تحميل التطبيق
    const timer = setTimeout(() => setFakeLoading(false), 1800); // simulate slow loading
    return () => clearTimeout(timer);
  }, [dispatch]);

  const isLoading = loading || fakeLoading;

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={4}
        mb={4}
      >
        <Box
          flex={1}
          sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height={250} />
          ) : (
            <img
              src={MainImage}
              alt="Main Visual"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </Box>

        <Box flex={1} sx={{ p: 2, borderLeft: { md: "4px solid #6776af" } }}>
          {isLoading ? (
            <>
              <Skeleton variant="text" width="70%" height={50} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="90%" height={30} />
            </>
          ) : (
            <>
              <Typography variant="h4" color="primary" gutterBottom>
                Welcome to Expenses Manager
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Track your expenses in real-time using Firebase and Redux
                Toolkit.
              </Typography>

              {/* Auth Buttons */}
              <Box mt={2} display="flex" gap={2}>
                {/* {!user && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGoogleLogin}
                    disabled={authLoading}
                  >
                    Login with Google
                  </Button>
                )} */}

                {user && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleLogout}
                    disabled={authLoading}
                  >
                    Logout
                  </Button>
                )}
              </Box>

              {user && (
                <Typography variant="body2" mt={1}>
                  Logged in as: {user.displayName || user.email}
                </Typography>
              )}
            </>
          )}
        </Box>
      </Box>

      <ExpensesForm isloading={isLoading} />
      <ExpensesTable isloading={isLoading} />
    </Container>
  );
};

export default App;
