import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import {HashLink} from "react-router-hash-link";
import {NavBar} from "./NavBar";

export const Register = () => {
    const [user,setUser] = useState({
        email: "",
        password: "",
        password2: ""
    });
    const[emailErr,setEmailErr] = useState("");
    const[passwordErr,setPasswordErr] = useState("");
    const[password2Err, setPassword2Err] = useState("")
    const handleChangeUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    const handleLogin = (e) => {
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
        if(user.password2 !== user.password) {
            setPassword2Err('Podane hasło nie jest! ')
        } else{
            setPassword2Err('')
        }
    }

    return (
        <>
            <div id='Header' className={"row"}>
                <div className={"col-5"}/>
                <div className={"col-7"}>
                    <NavBar />
                </div>
            </div>
            <div className={'row'}>
                <div className={'login__container col-12'}>
                    <h2 className={'login__container-title'}>Załóż konto</h2>
                    <img src={Decoration} alt={'Decoration'}/>
                    <form onSubmit={handleLogin}>
                        <div className={'login__container-box register__box'}>
                            <div className={'login__container-inputs'}>
                                <label className={'login__label login__label-email'} >Email</label>
                                <input className={'login__input'} name={'email'} type={'text'} value={user.email} onChange={handleChangeUserData}/>
                                <p className={'login__warning'}>{emailErr}</p>
                                <label className={'login__label'}>Hasło</label>
                                <input className={'login__input'} type={'password'} name={'password'} onChange={handleChangeUserData}/>
                                <p className={'login__warning'}>{passwordErr}</p>
                                <label className={'login__label'}>Hasło</label>
                                <input className={'login__input'} type={'password'} name={'password2'} onChange={handleChangeUserData}/>
                                <p className={'login__warning'}>{password2Err}</p>
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
    )
}