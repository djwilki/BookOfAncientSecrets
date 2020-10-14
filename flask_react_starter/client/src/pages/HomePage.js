import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from '../store/session'
import { withRouter } from 'react-router-dom';


function HomePage({history}) {


    const dispatch = useDispatch()

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/choose');
            return;
        }

    }

    const handleDemoLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout())
        if (res.ok) {
            history.replace('/');
            return;
        }
    }

    return (
        <>
            <h1>PLEASE LOG IN</h1>
        </>
    )
}


export default withRouter(HomePage)
