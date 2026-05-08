import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./styles.css";
const Header = () => {
  const { userData } = useContext(AuthContext);
  const { isLoggedIn } = userData;
  console.log(isLoggedIn);
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src="/markSyncSmall.svg" />
          </NavLink>
        </div>
        <Navigation isActive={isLoggedIn} />

        <div
          className="auth-links"
          style={{ display: isLoggedIn ? "none" : "block" }}
        >
          <NavLink to="/auth/login">Войти</NavLink>
          <NavLink to="/auth/register">Регистрация</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
