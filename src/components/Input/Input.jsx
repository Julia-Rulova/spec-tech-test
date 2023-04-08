import "./Input.css";

import { useNavigate } from "react-router-dom";

import ReactInputMask from "react-input-mask";

function Input({name, label, value, onChange, type, changeRotate}) {
    const navigate = useNavigate();

    function handleNavigate() {
        changeRotate();
        setTimeout(() => {
            if (name === 'password') {
                navigate("/password-recovery");
            } else {
                navigate("/");
            }
        }, 800)
    }

    return (
        <div className="input">
            <label className="input__label" htmlFor={name}>{label}</label>
            {
                name === "phone"
                ? 
                <ReactInputMask className="input__item" id={name} mask="+7 (999) 999-99-99" maskChar="_" required value={value} onChange={onChange}></ReactInputMask>
                :
                <input className="input__item" name={name} id={name} required type={type} value={value} onChange={onChange}></input>
            }
            {
                name === "password"
                &&
                <span className="input__forget-link" onClick={handleNavigate}>Забыли пароль?</span>
            }
            {
                name === "re-phone"
                &&
                <span className="input__forget-link" onClick={handleNavigate}>назад</span>
            }
        </div>
    )
}

export default Input;