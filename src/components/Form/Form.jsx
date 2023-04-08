import './Form.css';

import logo from "../../images/logo.svg"

function Form({children, btnText, rotate, handleSubmit}) {
    return (
        <form className={`form ${rotate ? 'form_rotate' : ''}`} onSubmit={handleSubmit}>
            <img className="form__logo" src={logo} alt="логотип."/>
            {children}
            <button className="form__submit-btn" type="submit">{btnText}</button>
        </form>
    )
}

export default Form;