import './PasswordRecovery.css';

import { useState } from 'react';

import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

function PasswordRecovery() {
    const [rotate, setRotate] = useState(false)

    return (
        <Form
            btnText="ПОЗВОНИТЬ"
            rotate={rotate}
        >
            <p className="re-pass__text">Восстановление пароля</p>
            <Input
                name="re-phone"
                label="Введите номер телефона"
                changeRotate={() => setRotate(true)}
            ></Input>
        </Form>
    )
}

export default PasswordRecovery;