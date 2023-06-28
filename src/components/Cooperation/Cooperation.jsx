import "./Cooperation.scss";
import ButtonContactUs from "../ButtonContactUs/ButtonContactUs";

function Cooperation() {
    return (
        <div className="cooperation container" id="cooperation">
            <div className="cooperation__inner container__row">
                <div className="cooperation__title">
                    Как осуществляется <span className="cooperation__title_color">сотрудничество</span> с нашей компанией?
                </div>
                <div className="cooperation__subTitle"><span className="cooperation__subTitle_color">Recyclex</span> оказывает своим клиентам полный перечень услуг, связанных с таможенным оформлением. Сюда входят:</div>
                <div className="sixSteps__steps">
                    <div className="step step_one step_home">
                        <div className="step__number">1</div>
                        <div className="step__header">Помощь в составлении международных контрактов</div>
                    </div>
                    <div className="step step_two step_home">
                        <div className="step__number">2</div>
                        <div className="step__header">Получение разрешительной документации</div>
                    </div>
                    <div className="step step_three step_highlight step_home">
                        <div className="step__number">3</div>
                        <div className="step__header cooperation__item_headerDesc">Подготовка необходимых документов в процессе сопровождения грузов</div>
                        <div className="step__header cooperation__item_headerMob">Подготовка документов для сопровождения грузов</div>
                    </div>
                    <div className="step step_four step_home">
                        <div className="step__number">4</div>
                        <div className="step__header cooperation__item_headerDesc">Профессиональное представление интересов клиента в таможенных органах</div>
                        <div className="step__header cooperation__item_headerMob">Представление интересов клиента в таможенных органах</div>
                    </div>
                    <div className="step step_five step_home">
                        <div className="step__number">5</div>
                        <div className="step__header cooperation__item_headerDesc">Выполнение предварительного расчета всех таможенных платежей на различные типы товаров</div>
                        <div className="step__header cooperation__item_headerMob">Расчет всех таможенных платежей на различные <br/> типы товаров</div>
                    </div>
                    <div className="step step_six step_home">
                        <div className="step__number">6</div>
                        <div className="step__header cooperation__item_headerDesc">Оказание комплексных услуг в процессе экспортного и импортного оформления товаров</div>
                        <div className="step__header cooperation__item_headerMob">Услуги в процессе экспортного и импортного оформления товаров</div>
                    </div>
                    <div className="step step_seven step_home">
                        <div className="step__number">7</div>
                        <div className="step__header cooperation__item_headerDesc">Оперативная разгрузка, ответственное хранение, погрузка транспортируемых через границу товаров</div>
                        <div className="step__header cooperation__item_headerMob">Разгрузка,  хранение, погрузка транспортируемых через границу товаров</div>
                    </div>
                </div>
                <div className="cooperation__btnWrapper">
                    <ButtonContactUs />
                </div>
                
            </div>
        </div>
    )
}

export default Cooperation