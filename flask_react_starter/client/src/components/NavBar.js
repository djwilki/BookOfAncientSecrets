import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from '../store/session'
import styles from '../CSS_MODULES/nav_bar.module.css'


function NavBar({history}) {

    const userId = useSelector(state => state.session.userId);
    const dispatch = useDispatch()


    const handleRedirect = (e) => {
        e.preventDefault();
        history.push('/choose')
    }


    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/choose');
            return;
        }

    }

    const handleLogin = async (e) => {
        e.preventDefault();
            history.replace('/login');
            return;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

            history.replace('/signup');
            return;

    }

    const handleDemoLogout = async (e) => {
        e.preventDefault();
        await dispatch(logout())
        history.replace('/');
    }

    return (
        <>
            <div className={styles.nav_bar}>
                <div className={styles.nav_container}>
                    {/* <div className={styles.logo}> */}
                    <button className={styles.logo} onClick={handleRedirect}>
                        <svg className={styles.logo_svg} width="25" height="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 101.37"><g><path d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"></path></g></svg>
                        <span className={styles.logo_label}>Book of Ancient Secrets</span>
                    </button>
                    {/* </div> */}
                    {userId ?  <button className={styles.log_button} type="button" onClick={handleDemoLogout}>Logout Demo User</button> : <><button className={styles.log_button} type="button" onClick={handleSignUp}> Sign Up </button> <button className={styles.log_button} type="button" onClick={handleLogin}>Log in</button></>}
                </div>
            </div>
        </>
    )
}

export default withRouter(NavBar)
