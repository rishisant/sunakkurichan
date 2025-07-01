import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const navItems = [
  { label: "ホーム", path: "/", icon: <FaHome /> },
  { label: "プロフィール", path: "/profile", icon: <FaUser /> },
  { label: "設定", path: "/settings", icon: <FaCog /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => navigate("/")}>
        <img src={logo} alt="スナックりっちゃん ロゴ" />
      </div>
      <ul className="navbar__links">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`navbar__link ${isActive(item.path) ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
