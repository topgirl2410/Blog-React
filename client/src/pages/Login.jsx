import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext)
    console.log(login)


    const handleChange = e => {
        setInputs(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await login(inputs)
            navigate("/")
        } catch (err) {
            if (typeof err === 'object' && err !== null) {
                console.log(err.toString());
            } else {
                console.log('Unexpected error', err);
            }
        }
    }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type='text' placeholder='username' name='username' onChange={handleChange} />
                <input required type='password' placeholder='password' name='password' onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account?? <Link to='/register'>Register</Link> </span>
            </form>
        </div>
    )
}

export default Login