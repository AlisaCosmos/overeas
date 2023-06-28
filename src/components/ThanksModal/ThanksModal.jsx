import "./ThanksModal.scss";
import * as cx from "classnames";
/* import ButtonClose from "../ButtonClose/ButtonClose"; */
import { RemoveScroll } from "react-remove-scroll";
import ReactFocusLock from 'react-focus-lock';

export default function ThanksModal({ handleModal, opened }) {
    const classThanksModal = cx("thanksModal", {
        "thanksModal_show": opened,
    });

    if (!opened) {
        return null
    }

    return (  
        <RemoveScroll removeScrollBar  allowPinchZoom>
        <div className={classThanksModal}>
            <ReactFocusLock>
            <div className="thanksModal__inner">
                <div className="thanksModal__content">
                    <h1 className="thanksModal__header">Спасибо!</h1>
                    <p className="thanksModal__description">Ваше сообщение было успешно отправлено!</p>
                    {/* <ButtonClose handleModal={handleModal}/> */}
                    {/* <button onClick={handleModal} className="btn btn_smaller">Закрыть</button> */}
                </div>
            </div>
            </ReactFocusLock>
        </div>  
        </RemoveScroll>
    );
}