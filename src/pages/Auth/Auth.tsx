import React, {useState} from 'react';
import Signin from "./Components/SignIn";
import Register from "./Components/Register";

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div>
            {showLogin ? <Signin toggleForm={toggleForm}/> : <Register toggleForm={toggleForm}/>}
        </div>);
};

export default Auth;
