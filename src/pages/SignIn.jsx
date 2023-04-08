import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import Popup from "../components/Popup/Popup";

function SignIn() {
    const navigate = useNavigate();
    const [rotate, setRotate] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupErr, setPopupErr] = useState(false);
    const [popupText, setPopupText] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const mokData = {
        login: "+7 (111) 111-11-11",
        password: "123456"
    }

    function handlePhoneChange(evt) {
        setPhoneValue(evt.target.value)
    }

    function handlePassChange(evt) {
        setPassValue(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(phoneValue);
        setPopupOpen(true);
        if (phoneValue !== mokData.login || passValue !== mokData.password) {
            setPopupErr(true);
            setPopupText('Неверный логин или пароль!');
        } else {
            navigate("/sign-out")
            setPopupErr(false);
            setPopupText('Вы успешно вошли!');
        }
    }

    if (popupOpen) {
        setTimeout(() => {
            setPopupOpen(false);
        }, 4000);
    }

    return (
        <>
            <Form
                btnText="ВОЙТИ"
                rotate={rotate}
                handleSubmit={handleSubmit}
            >
                <Input
                    name="phone"
                    label="Введите логин"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                />
                <Input
                    name="password"
                    label="Введите пароль"
                    type="password"
                    value={passValue}
                    onChange={handlePassChange}
                    changeRotate={() => setRotate(true)}
                />
            </Form>

            <Popup
                isOpen={popupOpen}
                err={popupErr}
                text={popupText}
            />
        </>
    )
}

export default SignIn;