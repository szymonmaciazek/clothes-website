import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React, {useState} from "react";
import firebase from "firebase";
import {auth} from "../firebase/firebase.config";
import {logOut} from "../firebase/auth";

export const NavBar = () => {
    const [user] = useState(auth().currentUser);

    return (
        <>
            <div className={'login__box'}>
                {user &&(
                    <>
                    <p className={'home__user-email'} >Witaj {auth().currentUser.email}</p>
                    <Link onClick={logOut} className={'home__login'} to={'/logout'} href={'#'} >Wyloguj</Link>
                    </>
                )}
                {!user && (
                    <>
                    <Link className={'home__login'} to={'/login'} href={'#'}>Zaloguj</Link>
                    <Link className={'home__login'} to={'/register'} href={'#'}>Załóż konto</Link>
                    </>
                )}
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