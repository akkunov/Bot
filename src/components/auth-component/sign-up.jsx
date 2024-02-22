import React, {useState} from 'react';
import css from './sign-in.module.css'
import {Link} from "react-router-dom";
function SignUp(props) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit (e){
        e.preventDefault();
    }
    return (
        <div className={css.wrapper}>
            <div className={css.box}>
                <form onSubmit={onSubmit}>
                    <div className={css.container}>
                        <label htmlFor="name">
                            <input type="text" id={'name'}/>
                        </label>
                        {/*email контайнер*/}
                            <label htmlFor={'email'}>Login</label>
                            <input
                                type="email"
                                value={email}
                                id={"email"}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                            />
                        {/*password контейнер*/}
                            <label htmlFor={'password'}>Password</label>
                            <input
                                type="password"
                                value={password}
                                id={'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                            />
                        <p>
                            Уже есть аккаунт?
                            <Link to={'/admin/sign-in'} className={css.Link}>Автроизавться</Link>
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

export default SignUp;