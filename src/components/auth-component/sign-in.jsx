import React, {useState} from 'react';
import css from './sign-in.module.css'
import {Link, useNavigate} from "react-router-dom";
import {LoginUser} from "../../store/userSlice.js";
import {useDispatch} from "react-redux";

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        console.log(email,password)
        dispatch(LoginUser({email,password})).then(_ => navigation('/admin'))
    }

    return (
        <div className={css.wrapper}>
            <div className={css.box}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={css.container}>
                        {/*email контайнер*/}
                        <label>Login</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                        {/*password контейнер*/}
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                        />
                        <p>
                            Уже есть аккаунт?
                            <Link to={'/admin/sign-up'} className={css.Link}>Зарегистрироваться</Link>
                        </p>

                        <button className={css.button}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignIn;