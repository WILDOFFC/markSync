import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../components/icons/MainLogo";
import BoldButton from "../../components/Button/BoldButton/BoldButton";
import "./styles.css";
import star from "./../../assets/icons/star_filled.svg";
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
          buttonTextColor={"var(--white)"}
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
              <img src={star} alt="Знак звезда" className="benefit-icon" />
              <p>Анализ аналитики</p>
            </div>
            <div className="benefit-description">
              <p>
                Возможность отслеживать аналитику продаж всех аккаунтов в едином
                пространстве
              </p>
            </div>
          </div>
          <div className="benefits-block">
            <div className="benefit-title">
              <img src={star} alt="Знак звезда" className="benefit-icon" />
              <p>Анализ аналитики</p>
            </div>
            <div className="benefit-description">
              <p>
                Возможность отслеживать аналитику продаж всех аккаунтов в едином
                пространстве
              </p>
            </div>
          </div>
          <div className="benefits-block">
            <div className="benefit-title">
              <img src={star} alt="Знак звезда" className="benefit-icon" />
              <p>Анализ аналитики</p>
            </div>
            <div className="benefit-description">
              <p>
                Возможность отслеживать аналитику продаж всех аккаунтов в едином
                пространстве
              </p>
            </div>
          </div>
        </div>
        <div className="how-it-works__block">
          <div className="section-header">Как это работает?</div>
          <div className="how-it-works__steps">
            <div className="how-it-works__step-block">
              <div className="step-block__name">Шаг 1</div>
              <div className="step-block__description">
                Создайте личный кабинет на платформе
              </div>
              <div className="steps-divider">
                <img src="null" alt="" />
              </div>
              <div className="how-it-works__step-block">
                <div className="step-block__name">Шаг 2</div>
                <div className="step-block__description">
                  Подключите личный аккаунт маркетплейса
                </div>
              </div>
              <div className="steps-divider">
                <img src="null" alt="" />
              </div>
              <div className="how-it-works__step-block">
                <div className="step-block__name">Шаг 3</div>
                <div className="step-block__description">
                  Получите возможность управлять аккаунтами маркетплейсов прямо
                  из панели управления
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
