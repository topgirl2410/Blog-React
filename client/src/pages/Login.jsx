import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();


    const handleChange = e => {
        setInputs(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/api/auth/login", inputs)
            navigate("/")
        } catch (err) {
            setErr(err.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type='text' placeholder='username' />
                <input required type='password' placeholder='password' />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account?? <Link to='/register'>Register</Link> </span>
            </form>
        </div>
    )
}

export default Login