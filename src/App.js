import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Answers } from "./pages/Answers";
import { Questions } from "./pages/Questions";

export default function App() {
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline 3px" : "none",
      textUnderlineOffset: isActive ? "20px" : "none",
      color: isActive ? "grey" : "white",
      padding: "6px"
    };
  };
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "6px"
        }}
      >
        <NavLink style={navStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navStyle} to="/questions">
          Questions
        </NavLink>
        <NavLink style={navStyle} to="/answers">
          Answers
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers/:answerId" element={<Answers />} />
      </Routes>
    </div>
  );
}
