import './SignOut.css';

import { useNavigate } from "react-router-dom";

function SignOut() {
const navigate = useNavigate();

    return (
        <h1 className="sign-out__title" onClick={() => navigate("/")}>Выход</h1>
    )
}

export default SignOut;