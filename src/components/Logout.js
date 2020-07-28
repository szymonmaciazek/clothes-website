import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Decoration from "../assets/Decoration.svg";

export const Logout = () =>{

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
                        <HashLink to={'/#Header'} smooth={true} duration={1000}
                                  className={'nav__box-element'}>Start</HashLink>
                        <HashLink to={'/#ThreeColumns'} smooth={true} duration={1000} className={'nav__box-element'}>O
                            co chodzi?</HashLink>
                        <HashLink to={'/#About'} smooth={true} duration={1000} className={'nav__box-element'}>O
                            nas</HashLink>
                        <HashLink to={'/#WeHelp'} smooth={true} duration={1000} className={'nav__box-element'}>Fundacja
                            i organizacje</HashLink>
                        <HashLink to={'/#Contact'} smooth={true} duration={1000}
                                  className={'nav__box-element'}>Kontakt</HashLink>
                    </ul>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12 logout__box'}>
                    <h2 className={'logout__title'}>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <img src={Decoration} alt={'Decoration'} className={'logout__decoration'}/>
                    <button className={'login__submit'}>Strona główna</button>
                </div>
            </div>
        </>
    )
}