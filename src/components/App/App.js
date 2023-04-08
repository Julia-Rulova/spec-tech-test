import './App.css';

import { Route, Routes } from "react-router-dom";

import SignIn from '../../pages/SignIn';
import PasswordRecovery from '../../pages/PasswordRecovery/PasswordRecovery';
import SignOut from '../../pages/SignOut/SignOut';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<SignIn />}
        />

        <Route
          path="/password-recovery"
          element={<PasswordRecovery />}
        />

        <Route
          path="/sign-out"
          element={<SignOut />}
        />
      </Routes>
    </div>
  );
}

export default App;
