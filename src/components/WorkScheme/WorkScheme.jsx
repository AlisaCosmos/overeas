import "./WorkScheme.scss";

import ButtonContactUs from '../ButtonContactUs/ButtonContactUs';
import {ReactComponent as Airplane} from "../../assets/imgs/airplane_small.svg";
import { ReactComponent as AirplaneImgTab} from "../../assets/imgs/burger_img.svg";

function WorkScheme() {
    return (
        <div className="workScheme container">
            <div className="workScheme__inner container__row">
                <div className="workScheme__title">
                    Схема работы
                </div>
                <div class="sixSteps__steps">
                    <div class="step step_one step_home">
                        <div class="step__number">1</div>
                        <div class="step__header">Заявка на расчет</div>
                    </div>
                    <div class="step step_two step_highlight step_home">
                        <div class="step__number">2</div>
                        <div class="step__header">КП на доставку и таможенное оформление</div>
                    </div>
                    <div class="step step_three step_home">
                        <div class="step__number">3</div>
                        <div class="step__header">Заключение договора</div>
                    </div>
                    <div class="step step_four step_home">
                        <div class="step__number">4</div>
                        <div class="step__header">Отгрузка<br/>товара</div>
                    </div>
                    <div class="step step_five step_home">
                        <div class="step__number">5</div>
                        <div class="step__header">Таможенное оформление</div>
                    </div>
                    <div class="step step_six step_home">
                        <div class="step__number">6</div>
                        <div class="step__header">Доставка груза до пункта назначения</div>
                    </div>
                    <div class="step step_seven step_home">
                        <div class="step__number">7</div>
                        <div class="step__header">Оплата</div>
                    </div>
                </div>
                
                <div className="workScheme__btnWrapper workScheme__btn_tab">
                    <ButtonContactUs />
                </div>
                <div className="workScheme__boxIcon">
                        <Airplane className="workScheme__icon"/>
                </div>
                <div className="workScheme__boxIconTab">
                        <AirplaneImgTab className="workScheme__iconTab"/>
                </div>
            </div>
        </div>
    )
}

export default WorkScheme