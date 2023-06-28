import "./ButtonContactUs.scss";

import { useState } from 'react';

function ButtonContactUs(handleRequestModal) {

    const [isActive, setIsActive] = useState(false);
    //Отправка кнопки
    const handleClick = () => {
        setIsActive(true)
        setTimeout(() => {
          handleRequestModal();
          setIsActive(false);
        }, 250)
      }

    return (
        <button className="buttonContactUs" onClick={handleClick} >
            Оставить заявку
        </button>
    )
}

export default ButtonContactUs;