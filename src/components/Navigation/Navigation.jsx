import { NavLink } from "react-router-dom";
import "./styles.css";
const Navigation = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <NavLink to="/">
            <img src="/markSyncSmall.svg" />
          </NavLink>
        </div>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Панель управления
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Аналитика
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Товары
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
