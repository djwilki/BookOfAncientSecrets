import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from '../store/session'
import { withRouter } from 'react-router-dom';


function HomePage({history}) {
    // const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     setErrors([]);
    // }, [emailOrUsername, password]);


    const dispatch = useDispatch()

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/choose');
            return;
        }

        // setErrors(res.data.errors);
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
            <h1>My Home Page</h1>
            <button type="button" onClick={handleDemoLogin}>Log in as Demo User</button>
            <button type="button" onClick={handleDemoLogout}>Logout Demo User</button>
        </>
    )
}


export default withRouter(HomePage)
