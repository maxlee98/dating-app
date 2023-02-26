import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/authentication/auth-page";

import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
