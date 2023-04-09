import './Popup.css';

function Popup({ isOpen, text, err, onClose }) {
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <div className={err ? "popup__circle_red" : "popup__circle_green"} />
                <p className="popup__text">{text}</p>
                <button type="button" onClick={onClose} className="popup__close-btn" />
            </div>
        </div>
    )
}

export default Popup;
