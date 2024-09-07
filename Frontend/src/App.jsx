import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/authContext";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import PostForm from "./components/PostForm";
import Dashboard from "./pages/Dashboard";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        >
          <Route path="/home/post" element={<PostForm />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home" element={<Feed />} />
        </Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/home" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
