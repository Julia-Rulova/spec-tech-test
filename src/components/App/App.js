import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import SignIn from '../../pages/SignIn';
import PasswordRecovery from '../../pages/PasswordRecovery/PasswordRecovery';
import SignOut from '../../pages/SignOut/SignOut';
import Popup from '../Popup/Popup';

function App() {
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupErr, setPopupErr] = useState(false);
  const [popupText, setPopupText] = useState('');

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/sign-out")
    }
  }, []);

  function handleSignIn({mokData, phoneValue, passValue}) {
    setPopupOpen(true);

    if (phoneValue !== mokData.login || passValue !== mokData.password) {
      setPopupErr(true);
      setPopupText('Неверный логин или пароль!');
      popupCloseTime();
    } else {
      navigate("/sign-out")
      setPopupErr(false);
      setPopupText('Вы успешно вошли!');
      localStorage.removeItem("login");
      localStorage.setItem("user", JSON.stringify({login: phoneValue, password: passValue}));
      popupCloseTime();
    }
  }

  function handlePassRecovery({mokLogin, loginValue}) {
    setPopupOpen(true);

    if (loginValue === mokLogin) {
      setPopupErr(false);
      setPopupText("Ваш новый пароль: 123456");
      navigate("/");
      localStorage.setItem("login", mokLogin);
    } else {
      setPopupErr(true);
      setPopupText("Такого номера нет.");
      popupCloseTime();
    }
  }

  function popupCloseTime() {
    setTimeout(() => {
      setPopupOpen(false)
    }, 4000)
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<SignIn
            onSignIn={handleSignIn}
          />}
        />

        <Route
          path="/password-recovery"
          element={<PasswordRecovery
            onPassRecovery={handlePassRecovery}
          />}
        />

        <Route
          path="/sign-out"
          element={<SignOut />}
        />
      </Routes>

      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        err={popupErr}
        text={popupText}
      />
    </div>
  );
}

export default App;
