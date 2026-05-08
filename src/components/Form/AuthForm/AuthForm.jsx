import { use, useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";
import { registerRequest } from "../../../features/registerRequest.jsx";
import { loginRequest } from "../../../features/loginRequest.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";
import Auth from "../../../pages/Auth/Auth.jsx";

const AuthForm = ({ authAction }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");

  const { handleUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Пароль обязателен");
      return;
    }
    if (value.length < 8) {
      setPasswordError("Пароль должен быть не менее 8 символов");
      return;
    }

    setPassword(value);
    setPasswordError("");
  };
  const validateLogin = (value) => {
    if (!value) {
      setLoginError("Почта обязательна");
      return;
    }
    setLogin(value);
    setLoginError("");
  };

  const action = {
    login: {
      formTitle: "Авторизация",
      checkboxLabel: "Запомнить меня",
      submitTitle: "Войти",
      handleSubmit: async (e) => {
        e.preventDefault();
        try {
          const data = await loginRequest({ login, password });
          if (Object.keys(data).length > 0) {
            const { email } = data;
            handleUserData({ email, isLoggedIn: true });
            navigate("/settings");
          }
          throw new Error("Введен неправильный логин или пароль");
        } catch (error) {
          setAuthError("Введен неправильный логин или пароль");
          console.error("Login error:", error);
          return;
        }
      },
    },
    register: {
      formTitle: "Регистрация",
      checkboxLabel:
        "Я ознакомлен с политикой конфиденциальности и условиями использования сервиса",
      submitTitle: "Создать аккаунт",
      handleSubmit: (e) => {
        e.preventDefault();
        const handleRegister = async ({ login, password }) => {
          try {
            const data = await registerRequest({ login, password });
            const { email } = data;
            handleUserData({ email, isLoggedIn: true });
            navigate("/settings");
          } catch (error) {
            console.error("Registration error:", error);
            return;
          }
        };
        handleRegister({ login, password });
      },
    },
  };
  const config = action[authAction] || action.login;
  return (
    <>
      <div className="auth-wrapper">
        <form onSubmit={(e) => config.handleSubmit(e)}>
          <h2 className="form-title">{config.formTitle}</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Адрес электронной почты"
              onChange={(e) => validateLogin(e.target.value)}
            />
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Пароль"
              onChange={(e) => validatePassword(e.target.value)}
            />
            <div className="form-row">
              <input id="agreement" name="agreement" type="checkbox" />
              <label htmlFor="agreement">{config.checkboxLabel}</label>
            </div>
          </div>
          {authError && <p className="auth-error">{authError}</p>}
          <input type="submit" value={config.submitTitle} />
          {authAction === "login" && (
            <p className="additional-info">
              <Link to="/auth/recovery" className="info-link">
                Забыли пароль?
              </Link>
            </p>
          )}
          {authAction === "register" && (
            <p className="additional-info">
              Уже есть аккаунт?{" "}
              <Link to="/auth/login" className="info-link">
                Войти
              </Link>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default AuthForm;
