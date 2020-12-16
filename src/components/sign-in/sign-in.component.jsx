import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error);
        }
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>
            </form>
        </div >
    )
}

export default SignIn;