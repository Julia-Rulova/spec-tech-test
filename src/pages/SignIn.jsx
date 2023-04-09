import { useState } from "react";

import Form from "../components/Form/Form";
import Input from "../components/Input/Input";

function SignIn({onSignIn}) {
    const [rotate, setRotate] = useState(false);
    const [phoneValue, setPhoneValue] = useState(localStorage.getItem("login") || '');
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

        onSignIn({mokData, phoneValue, passValue});
        // if (phoneValue !== mokData.login || passValue !== mokData.password) {
        //     setPopupErr(true);
        //     setPopupText('Неверный логин или пароль!');
        // } else {
        //     navigate("/sign-out")
        //     setPopupErr(false);
        //     setPopupText('Вы успешно вошли!');
        //     localStorage.removeItem("login");
        //     localStorage.setItem("user", JSON.stringify({login: phoneValue, password: passValue}))
        // }
    }

    return (
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
    )
}

export default SignIn;