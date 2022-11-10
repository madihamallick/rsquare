import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/actions/authAction';

export const SigninLogic = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = (email, password) => {
        dispatch(userLogin(email, password))
        // navigate("/dashboard");
        // window.location.reload();
        setEmail('');
        setPassword('');
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSignin
    }
}