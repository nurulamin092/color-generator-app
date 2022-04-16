import React from 'react';
import '../../../style/login.css'
const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-title'>LOGIN</div>
            <form className='login-form'>
                <input type="email" placeholder='Your Email' />
                <input type="password" name="password" id="" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;