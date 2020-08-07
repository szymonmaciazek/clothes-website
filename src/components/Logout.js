import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Decoration from "../assets/Decoration.svg";
import {NavBar} from "./NavBar";

export const Logout = () =>{

    return (
        <>
            <div id='Header' className={"row"}>
                <div className={"col-5"}/>
                <div className={"col-7"}>
                    <NavBar />
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12 logout__box'}>
                    <h2 className={'logout__title'}>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <img src={Decoration} alt={'Decoration'} className={'logout__decoration'}/>
                    <Link to={'/'} className={'login__submit'}>Strona główna</Link>
                </div>
            </div>
        </>
    )
}