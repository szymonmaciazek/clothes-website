import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {NavBar} from "./NavBar";
import {login} from "../firebase/auth";

export const Login = () => {
    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    const[emailErr,setEmailErr] = useState("");
    const[passwordErr,setPasswordErr] = useState("");
    const handleChangeUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    async function handleLogin (e){
        e.preventDefault()
        if (user.email.length < 5 && !user.email.includes("@")) {
            setEmailErr("Podany email jest nieprawidłowy!");
        } else {
            setEmailErr("");
        }
        if (user.password.length < 6) {
            setPasswordErr("Podane hasło jest za krótkie!");
        } else {
            setPasswordErr("");
        }
        try {
            await login(user.email, user.password);
        } catch (err) {
            setEmailErr(err.message);
        }
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col-5"}/>
                <div className={"col-7"}>
                    <NavBar />
                </div>
            </div>
            <div className={'row'}>
                <div className={'login__container col-12'}>
                    <h2 className={'login__container-title'}>Zaloguj się</h2>
                    <img src={Decoration} alt={'Decoration'}/>
                    <form onSubmit={handleLogin}>
                        <div className={'login__container-box'}>
                            <div className={'login__container-inputs'}>
                                <label className={'login__label login__label-email'} >Email</label>
                                <input className={'login__input'} name={'email'} type={'text'} value={user.email} onChange={handleChangeUserData}/>
                                <p className={'login__warning'}>{emailErr}</p>
                                <label className={'login__label'}>Hasło</label>
                                <input className={'login__input'} type={'password'} name={'password'} onChange={handleChangeUserData}/>
                                <p className={'login__warning'}>{passwordErr}</p>
                            </div>
                        </div>
                        <div className={'login__button-box'}>
                            <Link className={'login'} to={'/register'} href={'#'}>Załóż konto</Link>
                            <input className={'login__submit'} type={'submit'} value={'Zaloguj się'}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}