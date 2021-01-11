import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { useDispatch } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss'



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(emailSignInStart({ email, password }))
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    required
                    label='Email'
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    required
                    label='Password'
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>
            </form>
        </div >
    )
}

export default SignIn;