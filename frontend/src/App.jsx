import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <h1>Note Taking App</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <form className="form-container">
        <input className="form-input" />
        <textarea className="form-input" />
        <button className="form-button">Submit</button>
      </form>
      <div className="form-footer">...</div>
    </BrowserRouter>
  );
}

export default App;
