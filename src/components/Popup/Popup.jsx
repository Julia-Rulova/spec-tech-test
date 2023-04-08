import './Popup.css';

function Popup({ isOpen, text, err }) {
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <div className={err ? "popup__circle_red" : "popup__circle_green"} />
                <p className="popup__text">{text}</p>
            </div>
        </div>
    )
}

export default Popup;
