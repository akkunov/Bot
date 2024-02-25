import React, {useState} from 'react';
import css from './sign-in.module.css'
import {Link, useNavigate} from "react-router-dom";
import {LoginUser} from "../../store/userSlice.js";
import {useDispatch, useSelector} from "react-redux";

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const state = useSelector(state => state.user )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        console.log(email,password)
        dispatch(LoginUser({ email, password }))
            .then((result) => {
                console.log(result)
                if(result?.error?.message){
                   throw Error('Ошибка при входе')
                    return
                }
                navigate('/admin')
            })
            .catch((error) => {
                console.error('Ошибка входа:', error, );
                // Ваша логика для обработки ошибки, например, показ сообщения об ошибке
            });
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
                <div>{state.error}</div>
            </div>

        </div>
    );
}

export default SignIn;