import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        phoneNumber: ''
    })

    const handleOnChange = (event) =>{
        const{name, value} = event.target;

        setUser({...user, [name]: value})
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        console.log(user)

    
    }

  return (
    <div className='container'>
        <div className='form-container'>
            <header>
                <h1>Sing Up</h1>
                <p>Please fill in this form to create an account</p>
            </header>

            <form onSubmit={handleOnSubmit}>
                <label htmlFor="first-name">
                    First Name
                    <input name='firstName' type="text" placeholder='Enter your first name' value={user.firstName} onChange={handleOnChange}/>
                </label>
                <label htmlFor="last-name">
                    last Name
                    <input name='lastName' type="text" placeholder='Enter your last name' value={user.lastName} onChange={handleOnChange}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input name='email' type="text" placeholder='Enter your email' value={user.email} onChange={handleOnChange }/>
                </label>
                <label htmlFor="password">
                    Password
                    <input name='password' type="password" placeholder='Enter strong password' value={user.password} onChange={handleOnChange}/>
                </label>
                <label htmlFor="number">
                    Phone
                    <input name='phoneNumber' type="text" placeholder='Enter phone number' value={user.phoneNumber} onChange={handleOnChange}/>
                </label>
                
                <p className='conditions'>By create an account you agree to our <span>Terms & Privacy</span></p>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>  
  )
}

export default RegistrationForm