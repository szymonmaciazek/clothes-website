import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React from "react";

export const NavBar = () => {
    return (
        <>
            <div className={'login__box'}>
                <Link className={'login'} to={'/login'} href={'#'}>Zaloguj</Link>
                <Link className={'login'} to={'/register'} href={'#'}>Załóż konto</Link>
            </div>
            <ul className={'nav__box'}>
                <HashLink to={'/#Header'} smooth={true} duration={1000} className={'nav__box-element'}>Start</HashLink>
                <HashLink to={'/#ThreeColumns'} smooth={true} duration={1000} className={'nav__box-element'}>O co chodzi?</HashLink>
                <HashLink to={'/#About'} smooth={true} duration={1000} className={'nav__box-element'}>O nas</HashLink>
                <HashLink to={'/#WeHelp'} smooth={true} duration={1000} className={'nav__box-element'}>Fundacja i organizacje</HashLink>
                <HashLink to={'/#Contact'} smooth={true} duration={1000} className={'nav__box-element'}>Kontakt</HashLink>
            </ul>
        </>
    )
}