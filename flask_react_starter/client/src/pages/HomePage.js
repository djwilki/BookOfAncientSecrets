import React from 'react'
// import {useDispatch} from 'react-redux'
// import { login, logout } from '../store/session'
import { withRouter, NavLink } from 'react-router-dom';


function HomePage({ history }) {


    return (
            <div>
                <h1>Welcome to Book of Ancient Secrets!</h1>
                <h2>If you don't have an account yet, <NavLink to='/signup'>sign up!</NavLink></h2>
                <h2>If you do, <NavLink to='/login'>log in!</NavLink></h2>
            </div>
    )
}


export default withRouter(HomePage)
