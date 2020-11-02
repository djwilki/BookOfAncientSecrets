import React from 'react'
// import {useDispatch} from 'react-redux'
// import { login, logout } from '../store/session'
import { withRouter } from 'react-router-dom';


function HomePage({history}) {


    return (
        <>
        <h1>Log in, fool!</h1>
        </>
    )
}


export default withRouter(HomePage)
