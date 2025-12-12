import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import { useSelector } from "react-redux";

// Private Route
const PrivateRoute = ({ children }) => {
  const { user, initialized } = useSelector((state) => state.auth);

//   if (!initialized) {
//     // عرض شاشة انتظار حقيقية بدل "Loading..."
//     return <div>Checking authentication...</div>;
//   }

  return !initialized ? children : <Navigate to="/login" />;
};
const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <App />
        </PrivateRoute>
      }
    />
    {/* Redirect أي مسار غير معروف */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
