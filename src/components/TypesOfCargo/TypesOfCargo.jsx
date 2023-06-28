import "./TypesOfCargo.scss";
import ButtonContactUs from "../ButtonContactUs/ButtonContactUs";
import CarImg from "../../assets/imgs/car.png";
import CarImgRetina from "../../assets/imgs/car_2x.png";
import TablewareImg from "../../assets/imgs/tableware.png";
import TablewareImgRetina from "../../assets/imgs/tableware_2x.png";
import CartImg from "../../assets/imgs/cart.png";
import CartImgRetina from "../../assets/imgs/cart_2x.png";
import HangerImg from "../../assets/imgs/hanger.png";
import HangerImgRetina from "../../assets/imgs/hanger_2x.png";
import VegetablesImg from "../../assets/imgs/vegetables.png";
import VegetablesImgRetina from "../../assets/imgs/vegetables_2x.png";

function TypesOfCargo() {
    return (
        <div className="typesOfCargo container" id="delivery">
            <div className="typesOfCargo__inner container__row">
                <div className="typesOfCargo__title">
                    Виды грузов для{" "}
                    <span className="typesOfCargo__titleAccent">
                        доставки и оформления
                    </span>
                </div>
                <div className="typesOfCargo__subTitle">
                    Компания{" "}
                    <span className="typesOfCargo__subTitleAccent">
                        Recyclex
                    </span>
                    {" "}предлагает профессиональные услуги по перевозке и таможенному оформлению любых видов груза. Индивидуально подберем транспорт, составим логистические маршруты и{" "}
                    <span className="typesOfCargo__subTitleAccent">
                        доставим
                    </span>:
                </div>
                <div className="typesOfCargo__main">
                    <div className="typesOfCargo__mainBoxes">
                        <div className="typesOfCargo__mainBoxes__left">
                            <div className="typesOfCargo__box">
                                <div className="typesOfCargo__box__imgWrapper">
                                    <img className="typesOfCargo__box__img" alt="car"
                                        src={CarImg} srcSet={`${CarImgRetina} 2x`} />
                                </div>
                            </div>
                            <div className="typesOfCargo__box">
                                <div className="typesOfCargo__box__imgWrapper">
                                    <img className="typesOfCargo__box__img" alt="tableware"
                                        src={TablewareImg} srcSet={`${TablewareImgRetina} 2x`} />
                                </div>
                            </div>
                        </div>
                        <div className="typesOfCargo__box">
                            <div className="typesOfCargo__box__imgWrapper">
                                <img className="typesOfCargo__box__img" alt="cart"
                                    src={CartImg} srcSet={`${CartImgRetina} 2x`} />
                            </div>
                        </div>
                        <div className="typesOfCargo__mainBoxes__right">
                            <div className="typesOfCargo__box">
                                <div className="typesOfCargo__box__imgWrapper">
                                    <img className="typesOfCargo__box__img" alt="hanger"
                                        src={HangerImg} srcSet={`${HangerImgRetina} 2x`} />
                                </div>
                            </div>
                            <div className="typesOfCargo__box">
                                <div className="typesOfCargo__box__imgWrapper">
                                    <img className="typesOfCargo__box__img" alt="vegetables"
                                        src={VegetablesImg} srcSet={`${VegetablesImgRetina} 2x`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="typesOfCargo__mainText">
                        <li>генеральные грузы</li>
                        <li>наливные грузы</li>
                        <li>насыпные грузы</li>
                        <li>негабаритные грузы</li>
                        <li>опасные грузы</li>
                        <li>проектные грузы</li>
                        <li>сборные грузы</li>
                    </ul>
                </div>
                <div className="typesOfCargo__btnWrapper">
                    <ButtonContactUs />
                </div>
            </div>
        </div>
    )
}

export default TypesOfCargo