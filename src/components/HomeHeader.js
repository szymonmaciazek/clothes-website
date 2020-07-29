import React from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {NavBar} from "./NavBar";

export const HomeHeader = () => {
    return (
        <>
            <div id='Header' className={"row home__container"}>
                <div className={"col-5 home__hero"}/>
                <div className={"col-7 "}>
                    <NavBar />
                    <div className={'header__title-box'}>
                        <h2 className={'header__title'}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce
                        </h2>
                        <img src={Decoration} alt={'Decoration'}/>
                        <div className={'header__btn-box'}>
                            <Link to={'/handover'} href={'#'} className={'header__btn'}>oddaj <br/> rzeczy</Link>
                            <Link to={'/login'} href={'#'} className={'header__btn'}>zorganizuj <br/> zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}