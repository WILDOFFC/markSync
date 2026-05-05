import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form.jsx";

const Auth = () => {
  const { action } = useParams();

  const formConfig = {
    login: {
      formTitle: "Авторизация",
      checkboxLabel: "Запомнить меня",
      submitTitle: "Войти",
    },
    register: {
      formTitle: "Регистрация",
      checkboxLabel:
        "Я ознакомлен с <span className='guide-link'>политикой конфиденциальности</span> и <span className='guide-link'>условиями использования сервиса</span>",
      submitTitle: "Создать аккаунт",
    },
  };

  const config = formConfig[action] || formConfig["login"];
  return (
    <>
      <Form
        formTitle={config.formTitle}
        submitAction={config.submitAction}
        checkboxLabel={config.checkboxLabel}
      />
    </>
  );
};
export default Auth;
