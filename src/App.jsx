import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import "./App.css";
const bootstrapCDN =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <link rel="stylesheet" href={bootstrapCDN} />
      <Router>
        <nav className="navbar navbar-dark bg-dark p-3 d-flex justify-content-center">
          <Link to="/signin" className="text-white mx-3">
            Sign In
          </Link>
          <Link to="/signup" className="text-white mx-3">
            Sign Up
          </Link>
        </nav>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
