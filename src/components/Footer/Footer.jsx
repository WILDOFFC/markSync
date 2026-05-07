import { Link } from "react-router-dom";
import "./styles.css";
import telegram from "./../../assets/icons/tg.svg";
import vk from "./../../assets/icons/vk.svg";
import reddit from "./../../assets/icons/reddit.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-block">
          <Link to="" className="footer-link">
            Контакты
          </Link>
          <Link to="" className="footer-link">
            О нас
          </Link>
          <Link to="/auth/login" className="footer-link">
            Войти
          </Link>
        </div>
        <div className="footer-block">
          <p>Мы в социальных сетях</p>
          <ul className="social-networks__list">
            <li>
              <img
                src={telegram}
                alt="логотип телеграм"
                className="social-network__logo"
              />
            </li>
            <li>
              <img
                src={vk}
                alt="логотип вконтакте"
                className="social-network__logo"
              />
            </li>
            <li>
              <img
                src={reddit}
                alt="логотип телеграм"
                className="social-network__logo"
              />
            </li>
            <img
              src={telegram}
              alt="логотип телеграм"
              className="social-network__logo"
            />
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
