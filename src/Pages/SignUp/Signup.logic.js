import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authAction';

export const SignupLogic = () => {
    const dispatch = useDispatch();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleSignup = (fname, lname, email, phone, password) => {
        // randomly generate a 6 digit number and convert it to string
        const id = Math.floor(100000 + Math.random() * 900000).toString();
        dispatch(registerUser(fname, lname, email, phone, password, id))
        setEmail('');
        setPassword('');
        setFname('');
        setLname('');
        setPhone('');

    };

    return {
        fname,
        setFname,
        lname,
        setLname,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        handleSignup
    }
}

// dispatch(registerUser(fname, lname, email, phone, password)).then(() => navigate('/login')