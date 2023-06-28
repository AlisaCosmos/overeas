import "./Agreement.scss";

function Agreement() {
    return (
        <div className="agreement container">
            <div className="agreement__inner container__row">
                <div className="agreement__content">
                    <h1 className="agreement__title">
                        Соглашение для обработки <span className="agreement__title_color">персональных данных</span>
                    </h1>
                    <p className="agreement__list-title">Настоящим я даю свое согласие <span className="agreement__title_color">Recyclex</span> на:</p><br/>
                    <ul className="agreement__list">
                        <li className="agreement__list-item">· обработку принадлежащих мне персональных данных: фамилия, имя, отчество, дата рождения, номер телефона, адрес электронной почты, адрес доставки, сведения об адресе аккаунта в социальных сетях, пользовательские данные (MAC-адрес, тип и версия ОС, тип и версия браузера, тип устройства и разрешение его экрана)</li><br/>
                        <li className="agreement__list-item">· осуществление следующих действий с персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, совершаемых с использованием средств автоматизации или без использования таких средств.</li>
                    </ul><br/>
                    <p className="agreement__text">Цели обработки: продажа товаров и оказание услуг, предоставление мне справочной информации, получение обратной связи в отношении товаров/услуг, улучшение качества обслуживания покупателей, изучение и анализ рынка, изучение потребностей покупателей, проведение маркетинговых и иных исследований, а также на хранение данных об этих результатах на электронных носителях. </p> <br/>
                    <p className="agreement__text">Согласен на получение рекламных и информационных сообщений о товарах/услугах <span className="agreement__title_color">Recyclex</span>, о деятельности <span className="agreement__title_color">Recyclex</span>, о проведении стимулирующих мероприятий рекламного характера по электронной почте, посредством смс-сообщений, телефонных звонков, рассылок через сервисы Viber, WhatsApp, Telegram и другие сервисы.</p><br/>
                    <p className="agreement__text">Я проинформирован, что для решения вопросов, касающихся обработки принадлежащих мне персональных данных, я могу направить запрос оператору с темой письма «Запрос о персональных данных» (либо «Отзыв согласия на обработку персональных данных» - в случае отзыва согласия на обработку персональных данных) на адрес: Россия, г. Москва, Пресненская набережная д. 8, стр. 1</p><br/>
                    <p className="agreement__text">Настоящее согласие действует с настоящего момента до достижения указанных целей обработки. Согласие может быть отозвано мной по моему письменному запросу.</p><br/>
                    <p className="agreement__text">Текст согласия размещен на сайте в неограниченном доступе и может быть изменен без предварительного уведомления или согласия Пользователя. Новая редакция Соглашения вступает в силу с момента его утверждения и размещения на сайте.</p><br/>
                </div>
            </div>
        </div>
        
    )
}

export default Agreement;