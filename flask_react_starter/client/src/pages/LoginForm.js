import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { login } from '../store/session'
import styles from '../CSS_MODULES/auth_module.css';

const LoginForm = ({history}) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(login(emailOrUsername, password))
        if (res.ok) {
            history.replace('/choose');
            return;
        }
    }

    const onEmailOrUsernameChange = (e) => {
        setEmailOrUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="body">
                <div className={`${styles.form_wrapper} ${styles.centered}`}>
                    <div className={styles.form_container}>
                        <div className={styles.login_form_container}>
                            <form method="" action="" onSubmit={handleSubmit}>
                                <div>
                                    <input placeholder="Email or Username" type="text" name="email_or_username" value={emailOrUsername} className={styles.auth_input} onChange={onEmailOrUsernameChange} />
                                </div>
                                <div>
                                    <input placeholder="Password" type="password" name="password" value={password} className={styles.auth_input} onChange={onPasswordChange} />
                                </div>
                                <button type="submit" className={styles.auth_button}>Continue</button>
                                <button type="button" className={styles.auth_button} onClick={handleDemoLogin}>Log in as Demo User</button>
                            </form>
                        </div>
                        <div className={styles.form_footer}>
                            <div className={styles.footer_tagline}>
                                Don't have an account?
                    </div>
                            <div className={styles.footer_cta_wrapper}>
                                <Link className={styles.footer_cta} to='/signup'>Create account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(LoginForm)
