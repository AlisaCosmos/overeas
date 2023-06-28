import "./Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { ReactComponent as BurgerBlack} from "../../assets/imgs/burger.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import { ReactComponent as BurgerImg} from "../../assets/imgs/burger_img.svg";
import ButtonContactUs from '../ButtonContactUs/ButtonContactUs';
import { RemoveScroll } from 'react-remove-scroll';

import { useState } from "react";
import * as cx from "classnames";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

function Header({ scrollToTop }) {
    let [opened, setOpened] = useState(false);
    useDisableBodyScroll(opened);


  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });
  
 const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": opened,
  });

  const handleClick = () => {
    if(opened) {
      setOpened(false)
    }
  }
  //Навигация бургер
  const handleNav = () => {
    if (opened === false) {
      /* handleFocus(); */
    } else {
        handleClick(); 
      /* closeBurger();
      handleFocus(); */
    }
  }

    return (
        <header className="header container">
            <div className="header__inner container__row_wide">
                <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/>
                <div className={classOverlay}></div>
                <Link to="/" className="header__logo" onClick={scrollToTop}>
                    <Logo className="header__logoIcon" />
                </Link>
                <nav className={classNav} onClick={handleClick} /* className="header__nav" */>
                    <div className="header__navInner" onClick={e => e.stopPropagation()}>
                        {opened && (
                            <div className="header__logoTab_wrapper">
                                <Link to="/" className="header__logo_tab" onClick={scrollToTop}>
                                    <Logo className="header__logoIcon" />
                                </Link>
                                <button className="header__close" onClick={handleClick}>
                                    <Close className="header__closeIcon" />
                                </button>
                            </div>
                        )}
                        <div className="header__links"> 
                            <HashLink smooth to="/#services" className="header__link" onClick={handleNav}>
                                Наши услуги
                            </HashLink>
                            <HashLink smooth to="/#cooperation" className="header__link" onClick={handleNav}>
                                Сотрудничество
                            </HashLink>
                            <HashLink smooth to="/#delivery" className="header__link" onClick={handleNav}>
                                Доставка грузов
                            </HashLink>
                            <HashLink smooth to="/#customs" className="header__link" onClick={handleNav}>
                                Таможенное оформление
                            </HashLink>
                            <HashLink smooth to="/#contact-details" className="header__link" onClick={handleNav}>
                                Контакты
                            </HashLink>
                        </div>
                        {opened && (
                            <div className="header__bottomWraper">
                                <div className="header__btnWrapper">
                                    <ButtonContactUs />
                                </div>
                                <div className="header__BurgerImg">
                                    <BurgerImg className="header__boxIcon"/>
                                </div>
                            </div>
                        )}
                    </div>
                </nav> 
            </div>
        </header>
    )
}

export default Header;