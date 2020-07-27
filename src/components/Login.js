import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {Link as Scroll} from "react-scroll";

export const Login = () => {
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] =useState('')

    return (
        <>
            <div id='Header' className={"row"}>
                <div className={"col-5"}/>
                <div className={"col-7"}>
                    <div className={'login__box'}>
                        <Link className={'login'} to={'/login'} href={'#'}>Zaloguj</Link>
                        <Link className={'login'} to={'/register'} href={'#'}>Załóż konto</Link>
                    </div>
                    <ul className={'nav__box'}>
                        <Scroll to={'Header'} smooth={true} duration={1000} className={'nav__box-element'}>Start</Scroll>
                        <Scroll to={'ThreeColumns'} smooth={true} duration={1000} className={'nav__box-element'}>O co chodzi?</Scroll>
                        <Scroll to={'About'} smooth={true} duration={1000} className={'nav__box-element'}>O nas</Scroll>
                        <Scroll to={'WeHelp'} smooth={true} duration={1000} className={'nav__box-element'}>Fundacja i organizacje</Scroll>
                        <Scroll to={'Contact'} smooth={true} duration={1000} className={'nav__box-element'}>Kontakt</Scroll>
                    </ul>
                </div>

            </div>
            <div className={'row'}>
                <div className={'login__container col-12'}>
                    <h2 className={'login__container-title'}>Zaloguj się</h2>
                    <img src={Decoration} alt={'Decoration'}/>
                    <form>
                    <div className={'login__container-box'}>
                        <div className={'login__container-inputs'}>
                            <label className={'login__label login__label-email'}>Email</label>
                            <input className={'login__input'} type={'email'}/>
                            <p className={'login__warning'}>test</p>
                            <label className={'login__label'}>Hasło</label>
                            <input className={'login__input'} type={'password'}/>
                            <p className={'login__warning'}>test</p>
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