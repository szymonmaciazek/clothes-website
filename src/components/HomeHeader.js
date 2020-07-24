import React from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {Link as Scroll} from "react-scroll";

export const HomeHeader = () => {
    return (
        <>
            <div id='Header' className={"row home__container"}>
                <div className={"col-5 home__hero"}/>
                <div className={"col-7 "}>
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
                    <div className={'header__title-box'}>
                        <h2 className={'header__title'}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce
                        </h2>
                        <img src={Decoration} alt={'Decoration'}/>
                        <div className={'header__btn-box'}>
                            <Link to={'/login'} href={'#'} className={'header__btn'}>oddaj <br/> rzeczy</Link>
                            <Link to={'/login'} href={'#'} className={'header__btn'}>zorganizuj <br/> zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}