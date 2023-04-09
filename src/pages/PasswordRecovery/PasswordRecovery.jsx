import './PasswordRecovery.css';

import { useState } from 'react';

import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

function PasswordRecovery({onPassRecovery}) {
    const [rotate, setRotate] = useState(false);
    const [loginValue, setLoginValue] = useState("");
    const mokLogin = "+7 (111) 111-11-11";

    function handleLodinChange(evt) {
        setLoginValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onPassRecovery({mokLogin, loginValue});
        // if (loginValue === mokLogin) {
        //     setPopupErr(false);
        //     setPopupText("Ваш новый пароль: 123456");
        //     navigate("/");
        //     localStorage.setItem("login", mokLogin);
        // } else {
        //     setPopupErr(true);
        //     setPopupText("Такого номера нет.");
        // }
    }

    return (
            <Form
                btnText="ПОЗВОНИТЬ"
                rotate={rotate}
                handleSubmit={handleSubmit}
            >
                <p className="re-pass__text">Восстановление пароля</p>
                <Input
                    name="re-phone"
                    label="Введите номер телефона"
                    changeRotate={() => setRotate(true)}
                    value={loginValue}
                    onChange={handleLodinChange}
                ></Input>
            </Form>
    )
}

export default PasswordRecovery;