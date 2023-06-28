import "./CustomsClearance.scss";
import National_flag1 from "../../assets/imgs/national_flag1.png";
import National_flag1_2x from "../../assets/imgs/national_flag1@2x.png";
import National_flag2 from "../../assets/imgs/national_flag2.png";
import National_flag2_2x from "../../assets/imgs/national_flag2@2x.png";
import National_flag3 from "../../assets/imgs/national_flag3.png";
import National_flag3_2x from "../../assets/imgs/national_flag3@2x.png";
import National_flag4 from "../../assets/imgs/national_flag4.png";
import National_flag4_2x from "../../assets/imgs/national_flag4@2x.png";
import National_flag5 from "../../assets/imgs/national_flag5.png";
import National_flag5_2x from "../../assets/imgs/national_flag5@2x.png";
import National_flag6 from "../../assets/imgs/national_flag6.png";
import National_flag6_2x from "../../assets/imgs/national_flag6@2x.png";
import National_flag7 from "../../assets/imgs/national_flag7.png";
import National_flag7_2x from "../../assets/imgs/national_flag7@2x.png";
import National_flag8 from "../../assets/imgs/national_flag8.png";
import National_flag8_2x from "../../assets/imgs/national_flag8@2x.png";
import National_flag9 from "../../assets/imgs/national_flag9.png";
import National_flag9_2x from "../../assets/imgs/national_flag9@2x.png";
import National_flag10 from "../../assets/imgs/national_flag10.png";
import National_flag10_2x from "../../assets/imgs/national_flag10@2x.png";
import ButtonContactUs from '../ButtonContactUs/ButtonContactUs';


function CustomsClearance() {
    return (
        <div className="customsClearance container" id="customs">
            <div className="customsClearance__inner container__row">
                <div className="customsClearance__title">
                    Куда мы <span className="customsClearance__title_color">доставляем грузы</span> и где делаем <span className="customsClearance__title_color">таможенное оформление</span>
                </div>
                <div className="customsClearance__subTitle">Работаем с более чем 40 странами из: Европы, Азии и Америки. 
                    Для расчета можете оставить заявку и наш менеджер свяжется с вами 
                </div>
                <div className="customsClearance__main">
                    <div className="customsClearance__mainBoxes">
                        
                        <div className="customsClearance__box customsClearance__box_one">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="national flag "
                                    src={National_flag1} srcSet={`${National_flag1_2x} 2x`} />
                            </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_two">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="national flag"
                                    src={National_flag2} srcSet={`${National_flag2_2x} 2x`} />
                            </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_three">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="national flag"
                                    src={National_flag3} srcSet={`${National_flag3_2x} 2x`} />
                            </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_four">
                        <div className="customsClearance__box__imgWrapper">
                            <img className="customsClearance__box__img" alt="national flag "
                                src={National_flag4} srcSet={`${National_flag4_2x} 2x`} />
                        </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_five">
                        <div className="customsClearance__box__imgWrapper">
                            <img className="customsClearance__box__img" alt="tableware"
                                src={National_flag5} srcSet={`${National_flag5_2x} 2x`} />
                        </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_six">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="national flag"
                                    src={National_flag6} srcSet={`${National_flag6_2x} 2x`} />
                            </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_seven">
                        <div className="customsClearance__box__imgWrapper">
                            <img className="customsClearance__box__img" alt="national flag "
                                src={National_flag7} srcSet={`${National_flag7_2x} 2x`} />
                        </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_eight">
                        <div className="customsClearance__box__imgWrapper">
                            <img className="customsClearance__box__img" alt="national flag"
                                src={National_flag8} srcSet={`${National_flag8_2x} 2x`} />
                        </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_nine">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="national flag"
                                    src={National_flag9} srcSet={`${National_flag9_2x} 2x`} />
                            </div>
                        </div>
                        <div className="customsClearance__box customsClearance__box_ten">
                            <div className="customsClearance__box__imgWrapper">
                                <img className="customsClearance__box__img" alt="carnational flagt"
                                    src={National_flag10} srcSet={`${National_flag10_2x} 2x`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customsClearance__text">
                    Компания <span className="name_color">Recyclex</span> предоставит вам полный спектр услуг под ”ключ” по таможенному оформлению, которые быстро и беспрепятственно помогут пройти границы и таможенную очистку:
                </div>
                <ul className="customsClearance__list">
                        <li className="customClearance__list-item">представление Ваших интересов в таможенных инстанциях</li>
                        <li className="customClearance__list-item">составление ВЭД - контрактов, сопроводительной документации, получение разрешительной документации</li>
                        <li className="customClearance__list-item">расчет таможенных платежей на все виды товаров</li>
                        <li className="customClearance__list-item">комплексные таможенные услуги по импорту, экспорту</li>
                        <li className="customClearance__list-item">разгрузка, погрузка на СВХ, хранение.</li>
                </ul>
                <div className="customClearance__btnWrapper customClearance__btn_tab">
                    <ButtonContactUs />
                </div>
            </div>
        </div>
    )
}

export default CustomsClearance