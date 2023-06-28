import "./Footer.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/imgs/logo_footer.svg";

function Footer({ scrollToTop, handleModal }) {
    return (
        <footer className="footer container">
            <div className="footer__inner container__row">
                <div className="footer__leftSide">
                    <Link to="/" className="footer__logo" onClick={scrollToTop}>
                        <Logo className="footer__logoIcon" />
                    </Link>
                </div>
                <div className="footer__rightSide">
                    <div className="footer__rightSide_top navigation">
                        <nav className="navigation__linkWrapper">
                            <div className="navigation__linkColumn">
                                <HashLink smooth to="/#services" className="navigation__link">
                                    Наши услуги
                                </HashLink>
                                <HashLink smooth to="/#cooperation" className="navigation__link">
                                    Сотрудничество
                                </HashLink>
                                <HashLink smooth to="/#delivery" className="navigation__link">
                                    Доставка грузов
                                </HashLink>
                            </div>
                            <div className="navigation__linkColumn">
                                <HashLink smooth to="/#customs" className="navigation__link">
                                    Таможенное оформление
                                </HashLink>
                                <HashLink smooth to="/#contact-details" className="navigation__link">
                                    Контакты
                                </HashLink>
                            </div>
                        </nav>
                    </div>
                    <div className="footer__rightSide_bottom information">
                        <Link to="/agreement" className="information__link">
                            Соглашение для обработки персональных данных
                        </Link>
                        <button className="information__helpBtn" onClick={handleModal}>
                            <span className="information__link">
                                Служба поддержки
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;