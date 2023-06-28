import "./ContactDetails.scss";
import { ReactComponent as BurgerImg} from "../../assets/imgs/burger_img.svg";


function ContactDetails() {
    return (
        <div className="contactDetails container" id="contact-details">
            <div className="contactDetails__title contactDetails__title_mob">
                        Контакты
            </div>
            <div className="contactDetails__inner">
                <div className="contactDetails__info">
                    <div className="contactDetails__title contactDetails__title_desk">
                        Контакты
                    </div>
                    <div className="contactDetails__main">
                        <div className="contactDetails__mainAddress">
                            <div className="contactDetails__mainAddress_title">
                                Адрес
                            </div>
                            <div className="contactDetails__mainAddress_text">
                                Россия, г. Москва, <br className="mainAddress_textSpaseMob"/> Пресненская <br className="mainAddress_textSpaseDesk"/>набережная д. 8, стр. 1
                            </div>
                        </div>
                        <div className="contactDetails__mainCommunication">
                            <div className="contactDetails__mainCommunication_title">
                                Для связи
                            </div>
                            <div className="contactDetails__mainCommunication_text">
                                <a href="tel:+74954459099" className="contactDetails_link">+7 (495) 445-90-99</a>
                                <a href="mailto:info@recyclex.pro" className="contactDetails_link">info@recyclex.pro</a>
                            </div>
                        </div>
                    </div>
                    <div className="contactDetails__BurgerImg">
                        <BurgerImg className="contactDetails__boxIcon"/>
                    </div>
                </div>
                <div className="contactDetails__mapWrapper">
                    <iframe className="contactDetails__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.65448582022!2d37.536956115874304!3d55.747132080551864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdc5428a163%3A0x3b0b79e32bc6df32!2zZ29yb2QgU3RvbGl0cywg0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCA4INGB0YLRgNC-0LXQvdC40LUgMSwg0JzQvtGB0LrQstCwLCAxMjMzMTc!5e0!3m2!1sru!2sru!4v1678195580812!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
        </div>
    )
}

export default ContactDetails;