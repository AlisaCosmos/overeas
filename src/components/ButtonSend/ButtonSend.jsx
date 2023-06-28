import "./ButtonSend.scss";
import * as cx from "classnames";
import { useState } from "react";

function ButtonSend({ handleSendForm, isValid, handleModal, children}) {
  const [checkVisible, setCheckVisible] = useState(false);
//Отправка формы
  const handleClick = () => {
    handleSendForm();

    if (isValid) {
      setTimeout(() => {
        setCheckVisible(true);
      }, 100);

      setTimeout(() => {
        handleModal()
        
        setCheckVisible(false);
      }, 3000);
    }
  };

  return (
    <button className="buttonSend btn btn_modal buttonContactUs" onClick={handleClick}>
      <div className="buttonSend__inner">
      {checkVisible ? <div className="buttonSend__sendedText">Отправлено</div> : children}
        {/* <div className="buttonSend__sendedText">Отправлено</div>  */}
      </div>
    </button>
  );
}

export default ButtonSend;