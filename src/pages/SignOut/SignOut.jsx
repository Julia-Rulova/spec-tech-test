import './SignOut.css';

import { useNavigate } from "react-router-dom";

function SignOut() {
    const navigate = useNavigate();

    function handleExit() {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <h1 className="sign-out__title" onClick={handleExit}>Выход</h1>
    )
}

export default SignOut;