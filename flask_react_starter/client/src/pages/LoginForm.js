import React from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../store/session'

const LoginForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/choose');
            return;
        }

    }

    return (
        <>

        </>
    )
}
