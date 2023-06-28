import "./CompanyRepresentation.scss";
import ButtonContactUs from "../ButtonContactUs/ButtonContactUs";
import { ReactComponent as Diploma } from "../../assets/imgs/diploma.svg";
import { ReactComponent as Subway } from "../../assets/imgs/subway.svg";
import { ReactComponent as Handshake } from "../../assets/imgs/handshake.svg";
import { ReactComponent as Form } from "../../assets/imgs/form.svg";

function CompanyRepresentation() {
    return (
        <div className="companyRepresentation container">
            <div className="companyRepresentation__inner container__row">
                <div className="companyRepresentation__main">
                    <div className="companyRepresentation__mainTitle">
                        <span className="companyRepresentation__mainTitle_light">
                            Доставка и таможенное оформление{" "}
                        </span>
                        грузов
                    </div>
                    <div className="companyRepresentation__mainSubtitle">
                        Оставьте заявку на доставку и таможенное оформление по выгодной цене
                    </div>
                    <div className="companyRepresentation__btnWrapper companyRepresentation__btn_desktop">
                        <ButtonContactUs />
                    </div>
                </div>
                <div className="companyRepresentation__boxesWrapper">
                    <div className="companyRepresentation__boxesLeft">
                        <div className="companyRepresentation__box">
                            <Diploma className="companyRepresentation__boxIcon_diploma" />
                            <div className="companyRepresentation__boxDescription">
                                Таможенное оформление прямых контрактов
                            </div>
                        </div>
                        <div className="companyRepresentation__box">
                            <Subway className="companyRepresentation__boxIcon_subway" />
                            <div className="companyRepresentation__boxDescription">
                                Международная доставка грузов
                            </div>
                        </div>
                    </div>
                    <div className="companyRepresentation__boxesRight">
                        <div className="companyRepresentation__box">
                            <Handshake className="companyRepresentation__boxIcon_handshake" />
                            <div className="companyRepresentation__boxDescription">
                                Услуги таможенного брокера
                            </div>
                        </div>
                        <div className="companyRepresentation__box">
                            <Form className="companyRepresentation__boxIcon_form" />
                            <div className="companyRepresentation__boxDescription">
                                Консультации по ВЭД
                            </div>
                        </div>
                    </div>
                </div>
                <div className="companyRepresentation__btnWrapper companyRepresentation__btn_tab">
                        <ButtonContactUs />
                </div>
            </div>
        </div>
    )
}

export default CompanyRepresentation;