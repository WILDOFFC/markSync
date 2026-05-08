import { useNavigate, useParams } from "react-router-dom";
import AuthForm from "./../../components/Form/AuthForm/AuthForm.jsx";

const Auth = () => {
  const { action } = useParams();
  return (
    <>
      <AuthForm authAction={action} />
    </>
  );
};
export default Auth;
