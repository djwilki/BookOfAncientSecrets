import React from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../store/session'
import { withRouter } from 'react-router-dom';


function HomePage( {history}) {
    // const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     setErrors([]);
    // }, [emailOrUsername, password]);


    const dispatch = useDispatch()

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const res = await dispatch(login("Owen", "password"))
        if (res.ok) {
            history.replace('/');
            return;
        }

        // setErrors(res.data.errors);
    }

    return (
        <>
            <h1>My Home Page</h1>
            <button type="button" onClick={handleDemoLogin}>Log in as Demo User</button>
        </>
    )
}


export default withRouter(HomePage)
