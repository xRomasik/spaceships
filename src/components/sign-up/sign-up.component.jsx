import { useState } from 'react';
import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';


import './sign-up.styles.scss'


const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const dispatch = useDispatch();


    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't macth")
            return;
        }

        dispatch(signUpStart({ displayName, email, password }))

        setDisplayName('')
        setEmail('')
        setConfirmPassword('')
        setPassword('')

    }



    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'displayName') {
            setDisplayName(value)
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value)
        }
    }


    return (
        <div className='sign-up'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    handleChange={handleChange}
                    value={password}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>

            </form>

        </div>
    )
}

export default SignUp;