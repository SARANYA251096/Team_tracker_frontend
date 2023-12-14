import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import LoginPage from "../pages/LoginPage";
import CardsPage from "../pages/CardsPage.jsx";
import SignupPage from "../pages/SignupPage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/cards"
        element={
          <PrivateRoute>
            <CardsPage />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
