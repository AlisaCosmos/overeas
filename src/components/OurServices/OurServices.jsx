import "./OurServices.scss";
import ButtonContactUs from "../ButtonContactUs/ButtonContactUs";

function OurServices() {
    return (
        <div className="ourServices container" id="services">
            <div className="ourServices__inner container__row">
                <div className="ourServices__title">
                    Наши услуги
                </div>
                <div className="ourServices__backgroundWrapper">
                    <div className="ourServices__main">
                        <div className="customs">
                            <div className="customs__title">
                                Таможенное оформление
                            </div>
                            <div className="customs__description ourServices__desc_tabNone">
                                Подготовка документации для быстрой и безопасной перевозки груза, как при ввозе заграницу, так и при вывозе
                            </div>
                        </div>
                        <div className="calculation">
                            <div className="calculation__title">
                                Осуществление расчета
                            </div>
                            <div className="calculation__description ourServices__desc_tabNone">
                                Расчеты, связанные с издержками, оформлением на таможне, складированием, финансовый агент Recyclex берет на себя
                            </div>
                        </div>
                        <div className="transportation">
                            <div className="transportation__title">
                                Грузоперевозки любой сложности
                            </div>
                            <div className="transportation__description ourServices__desc_tabNone">
                                Возможность перемещения различных грузов, в том числе негабаритных, морским транспортом
                            </div>
                        </div>
                        <div className="route">
                            <div className="route__title">
                                Подбор оптимальных маршрутов
                            </div>
                            <div className="route__description ourServices__desc_tabNone">
                                Перемещение груза несколькими видами транспорта и хранение груза на складе
                            </div>
                        </div>
                        <div className="documentation">
                            <div className="documentation__title">
                                Документальное сопровождение
                            </div>
                            <div className="documentation__description ourServices__desc_tabNone">
                                Мы берем на себя все обязательства, связанные с оформлением документации и ее сопровождением. Вы получаете ваш товар, прошедший таможенную очистку и готовый к реализации
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ourServices__main_tab">
                        <div className="ourServices__item_tab transportation_tab">
                            <div className="ourServices__item__number">1.</div>
                            <div className="ourServices__item__desc">
                                <div className="ourServices__item__title">
                                    Грузоперевозки любой сложности
                                </div>
                                <div className="ourServices__item__description">
                                    Возможность перемещения различных грузов, в том числе негабаритных, морским транспортом
                                </div>
                            </div>
                        </div>
                        <div className="ourServices__item_tab route_tab">
                            <div className="ourServices__item__number">2.</div>
                            <div className="ourServices__item__desc">
                                <div className="ourServices__item__title">
                                    Подбор оптимальных маршрутов
                                </div>
                                <div className="ourServices__item__description">
                                    Перемещение груза несколькими видами транспорта и хранение груза на складе
                                </div>
                            </div>
                        </div>
                        <div className="ourServices__item_tab customs_tab">
                            <div class="ourServices__item__number">3.</div>
                            <div className="ourServices__item__desc">
                                <div className="ourServices__item__title">
                                    Таможенное оформление
                                </div>
                                <div className="ourServices__item__description">
                                    Подготовка документации для быстрой и безопасной перевозки груза, как при ввозе заграницу, так и при вывозе
                                </div>
                            </div>
                        </div>
                        <div className="ourServices__item_tab documentation_tab">
                            <div className="ourServices__item__number">4.</div>
                            <div className="ourServices__item__desc">
                                <div className="ourServices__item__title">
                                    Документальное сопровождение
                                </div>
                                <div className="ourServices__item__description">
                                    Мы берем на себя все обязательства, связанные с оформлением документации и ее сопровождением. Вы получаете ваш товар, прошедший таможенную очистку и готовый к реализации
                                </div>
                            </div>
                        </div>
                        <div className="ourServices__item_tab calculation_tab">
                            <div class="ourServices__item__number">5.</div>
                            <div className="ourServices__item__desc">
                                <div className="ourServices__item__title">
                                    Осуществление расчета
                                </div>
                                <div className="ourServices__item__description">
                                    Расчеты, связанные с издержками, оформлением на таможне, складированием, финансовый агент <span className="ourServices_text_decor">Recyclex</span> берет на себя
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="ourServices__btnWrapper">
                    <ButtonContactUs />
                </div>
            </div>
        </div>
    )
}

export default OurServices;