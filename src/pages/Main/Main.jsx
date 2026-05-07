import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../components/icons/MainLogo";
import BoldButton from "../../components/Button/BoldButton/BoldButton";
import "./styles.css";
const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="main-section">
        <MainLogo secondColor={"var(--blue)"} />
        <BoldButton
          width={"120px"}
          textContent={"Войти"}
          buttonColor={"var(--blue)"}
          action={() => navigate("./auth/login")}
        />
      </section>
      <section className="capabilities-section">
        <h2 className="section-header">
          Управляйте маркетплейсами из одного сервиса
        </h2>
        <p className="section-description">
          Добавляйте товары, отслеживайте аналитику и масштабируйте продажи на
          Ozon, Wildberries, Яндекс.Маркете и других площадках — без
          переключения вкладок
        </p>
        <div className="service-benefits">
          <div className="benefits-block">
            <div className="benefit-title">
              <img src="null" alt="" />
              <p>Анализ аналитики</p>
            </div>
            <div className="benefit-description">
              <p>Подробное описание</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
