import "./HelpModal.scss";

import * as cx from "classnames";
import { useEffect, useState } from "react";
import { initialState } from './initialState';
import { helpFields } from "./helpFields";
import ButtonSend from '../ButtonSend/ButtonSend';
import HelpInput from '../HelpInput/HelpInput';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { ReactComponent as CloseIcon } from "../../assets/imgs/close_icon.svg";
import { ReactComponent as FormImg} from "../../assets/imgs/burger_img.svg";
import { RemoveScroll } from "react-remove-scroll";
import ReactFocusLock from 'react-focus-lock';

function HelpModal({ handleModal, opened}) {
    const classModal = cx("help", {
        "help help_show": opened,
    });

//Если форма отправлена выдавать сообщение
    const [massagerVisible, setMassagerVisible] = useState(false);


    const [state, setState] = useState(initialState);
    const [phoneValue, setPhoneValue] = useState('');
    const [valid, setValid] = useState(false);
    const {helpName, helpEmail, helpQuestion} = state;

    const handleMassages = () => {
  
      if (true) {
        setTimeout(() => {
          setMassagerVisible(true);
        }, 700);
  
        setTimeout(() => {
          setMassagerVisible(false);
        }, 3000);
      }
    };

    //Открытие формы
    useEffect(() => {
        if(!opened) {
          setState(initialState);
          setPhoneValue('');
        }
      }, [opened])  

    if (!opened) {
        return null
      }

    //Обработчик изменения формы
      const handleChange = (e, id) => {
        // const value = e.target.value.trimStart().replace(/ +/g, " ");
        setState({
          ...state,
          [id]: {
              ...state[id],
              value: e.target.value
          }
        });
      };
    //Обрабочик фокуса поля
    const blurHandler = (type) => {
        setState((state) => ({
       ...state,
       [type]: {
           ...state[type],
           isDirty: true
       }
     }));
        validateForm()
    }
    //Валидация формы
    const validateForm = () => {
      setValid(true)
      const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
      const serchPunycode = /\b@xn--\b/giu;
      const regEmail = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,63}$/g;
      const regEmailFirstSign = /^[a-zA-Z0-9]/;
      
          for (const field of helpFields) {
              const { rule, id } = field;
              const value = state[id].value.trimStart().replace(/ +/g, " ");
              let error;
      
              switch (rule) {
                  case 'name':
                    if (value === undefined) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    }
                    if (value.length === 0) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    } 
                    if (value.length > 200) {
                        error = 'Максимум 200 символов';
                        setValid(false);
                        break;
                    }
                    if (!regName.test(value)) {
                        error = 'Недопустимые символы';
                        setValid(false);
                        break;
                      }
                    break;
                case 'phone':
                  if (phoneValue === undefined) {
                    error = 'Необходимо заполнить';
                    setValid(false);
                    break;
                  }
                    if (phoneValue.length === 0) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    } 
                    if (!isPossiblePhoneNumber(phoneValue)) {
                      error = 'Недопустимая длина';
                      setValid(false);
                      break;
                    }
                    break;
                case 'email':
                    if (value === undefined) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    }
                    if (value.length === 0) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    } 
                    if (value.length < 5) {
                        error = 'Минимум 5 символов';
                        setValid(false);
                        break;
                      } 
                    if (value.length > 200) {
                        error = 'Максимум 200 символов';
                        setValid(false);
                        break;
                    }
                    if (!regEmailFirstSign.test(Array.from(value)[0])) {
                      error = 'Недопустимый формат';
                      setValid(false);
                      break;
                    }
          
                    if (serchPunycode.test(value)){
                      error = "Недопустимый формат";
                      setValid(false);
                      break;
                    }
                    if (!regEmail.test(value)) {
                      error = "Недопустимый формат";
                      setValid(false);
                      break;
                    }
                    break;
                case 'question':
                    if (value.length === 0) {
                      error = 'Необходимо заполнить';
                      setValid(false);
                      break;
                    } 
                    if (value.length > 5000) {
                        error = 'Максимум 5000 символов';
                        setValid(false);
                        break;
                    }
                    break;
                  default:
                  error = '';
              }    
    
            setState((state) => ({
                ...state,
                [id]: {
                    ...state[id],
                    error: error ? error : ''
                }
              }));
        }
    }

    const sendData = () => {
        const URL = process.env.REACT_APP_API_APPLICATION;
        const data = {
          /* companyName: helpCompany.value.trimStart().replace(/ +/g, " "), */
          email: helpEmail.value.trimStart().replace(/ +/g, " "),
          mobileMumber: phoneValue.trimStart().replace(/ +/g, " "),
          name: helpName.value.trimStart().replace(/ +/g, " "),
          /* patronymic: helpMiddle.value.trimStart().replace(/ +/g, " "), */
          question: helpQuestion.value.trimStart().replace(/ +/g, " "),
          /* surname: helpSurname.value.trimStart().replace(/ +/g, " ") */
        }
      
        fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              /* company_name: data.companyName, */
              email: data.email,
              mobile_number: data.mobileMumber,
              name: data.name,
              /* patronymic: data.patronymic, */
              question: data.question,
              /* surname: data.surname */
            }),
            mode: 'cors'
        })
      
        .then((response) => {
            console.log(response)
        })
        
        .catch((e) => console.log(e))
      }

    //Отправка формы
    const handleClick = () => {
      validateForm();
    
      for (let key in state) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
        setState((state) => ({
          ...state,
          [key]: {
              ...state[key],
              isDirty: true
          }
        }));
      }
    
      if (valid) {
        // console.log(`Фамилия: ${data.surname}
        //           Имя: ${data.name}
        //           Отчество: ${data.patronymic}
        //           Название компании:${data.companyName}
        //           Телефон: ${data.mobileMumber}
        //           Почта: ${data.email}
        //           Вопрос: ${data.question}`)
        sendData()
        setState(initialState); // возвращаем состояние к началу
        setPhoneValue('');
        handleMassages(true);
        setValid(false);
      }
    };
      

    

    return (
      <RemoveScroll removeScrollBar allowPinchZoom={true}>
        <div className={classModal}>
        <ReactFocusLock>
            <div className="help__inner">
                <div className="help__content">
                    <div className="help__firstSection">
                        <button className="help__close">
                            <CloseIcon className="help__cross" onClick={handleModal} />
                        </button>
                    </div>
                    {massagerVisible ? 
                            <div className="help_messages secondSection__left_m">
                                <h1 className="help_messages__header">Спасибо!</h1>
                                <p className="help_messages__description">Ваше сообщение было успешно отправлено!</p>
                            </div> : 
                            <div>
                              <div className="help__secondSection secondSection">
                                <div className="secondSection__left">
                                  <div className="help__title">Обратная связь</div>
                                  <div className="help__subtitle">Если у Вас есть вопросы, заполните контактную форму, и наш менеджер свяжется с Вами в ближайшее время!</div>
                                  <div className="help__form">
                                      <div className="help__rows">
                                          {helpFields.map((item) => (
                                              <HelpInput
                                              key={item.id}
                                              id={item.id}
                                              label={item.label}
                                              name={item.name}
                                              value={state[item.id].value}
                                              type={item.type}
                                              view={item.view}
                                              
                                              blurHandler={blurHandler}
                                              phoneValue={phoneValue}
                                              handlePhoneValue={setPhoneValue}
                                              handleChange={handleChange}
                                              handleClick={handleClick}
                                              errorMessage={state[item.id].error}
                                              isDirty={state[item.id].isDirty}
                                              />
                                              ))}
                                      </div>
                                  <div className="help__footer">
                                  <div className="help__helper"></div>
                                      <ButtonSend handleSendForm={handleClick} isValid={valid} handleModal={handleModal} >Отправить</ButtonSend>
                                  </div>
                                </div>
                              </div>
                              <div className="secondSection__right">   
                                  <div className="helpModal__imgWrapper">
                                          <FormImg className="helpModal__img"/>
                                  </div>
                              </div>
                            </div>
                    </div>
                    }
                </div>
            </div>
          </ReactFocusLock>  
        </div>
      </RemoveScroll>  
    )
}

export default HelpModal;