import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from "../store/users.js";
import { login } from "../store/session.js";
import { withRouter } from 'react-router-dom';
import styles from '../styles/auth.module.css';


const SignUpPage = ({ history }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await dispatch(signup(username, email, password));
        console.log("signup res", res)
        if (res.ok) {
            await dispatch(login(username, password));
            history.replace("/")
            return;
        }

        setErrors(res.data.errors);
    }

    const demoUserClick = async (event) => {
        event.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/');
            return;
        }
        setErrors(res.data.errors);
    }

    return (
        <div className="body">
        <div className={`${styles.form_wrapper} ${styles.centered}`}>
            <div className={styles.form_container}>
                <button onClick={demoUserClick} className={styles.demo_button}>Continue as Demo User</button>
                <div className={styles.divider_container}>
                    <div className={styles.divider_text}>or</div>
                    <div className={styles.divider_line}></div>
                </div>
                <div className={styles.login_form_container}>

                    <form onSubmit={submitHandler}>
                        <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.auth_input} placeholder='Username' />
                        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.auth_input} placeholder='Email' />
                        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.auth_input} placeholder='Password' />
                        <button type="submit" className={styles.auth_button}>Continue</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default withRouter(SignUpPage)
