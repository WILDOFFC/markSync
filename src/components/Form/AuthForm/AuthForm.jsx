import { useEffect } from "react";
import bcrypt from "bcryptjs";
import "./styles.css";

const AuthForm = ({ checkboxLabel, submitAction, formTitle }) => {
  const hashPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  };

  const action = {
    login: {
      submitTitle: "Войти",
      handleSubmit: (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("pass");
      },
    },
    register: {
      submitTitle: "Создать аккаунт",
      handleSubmit: (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("pass");
      },
    },
  };

  const config = action[submitAction];
  return (
    <>
      <div className="auth-wrapper">
        <form onSubmit={config.handleSubmit}>
          <h2 className="form-title">{formTitle}</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Адрес электронной почты"
            />
            <input type="password" id="pass" name="pass" placeholder="Пароль" />
            <div className="form-row">
              <input id="agreement" name="agreement" type="checkbox" />
              <label for="agreement">{checkboxLabel}</label>
            </div>
          </div>
          <input type="submit" value="{config.submitTitle}" />
        </form>
      </div>
    </>
  );
};

export default AuthForm;
