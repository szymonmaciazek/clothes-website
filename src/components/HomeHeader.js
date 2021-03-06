import React from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {NavBar} from "./NavBar";
import {HashLink} from "react-router-hash-link";

export const HomeHeader = () => {
    return (
        <>
            <div id='Header' className={"row home__container"}>
                <div className={"col-5 home__hero"}/>
                <div className={"col-7 "}>
                    <NavBar/>
                    <div className={'header__title-box'}>
                        <h2 className={'header__title'}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce
                        </h2>
                        <img src={Decoration} alt={'Decoration'}/>
                        <div className={'header__btn-box'}>
                            <HashLink to={'/handover/#form'} smooth={true} duration={1000} href={'#'}
                                      className={'header__btn'}>oddaj <br/> rzeczy</HashLink>
                            <HashLink to={'/handover'}   href={'#'} className={'header__btn'}>zorganizuj <br/> zbiórkę</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
