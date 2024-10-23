import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import Home from "./HomePage/Home";
import { useAuth } from "./Authentication/AuthContext";
import ProtectedPage from "./Authentication/ProtectedPage";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the auth state to update
    if (isAuthenticated) {
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
