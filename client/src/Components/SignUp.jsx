import React from  'react';
import "../App.css"

const SignUp = () => {
    return (
        <div className='sign-up=container'>

       
        <h1>Signup</h1>

        <form className='sign-up-form'>
    <label htmlFor='username'>Username:</label>

    <input type='text' placeholder='Username'/>

    <label htmlFor='email'> Email:</label>
    <input type='email' autoComplete='off' placeholder='Email@email.com'/>

    <label htmlFor='password'> Password</label>
    <input type='password' placeholder = "******" />


  <button type = 'submit'> Sign Up</button>

        </form>
        </div>
    )
}
export default SignUp