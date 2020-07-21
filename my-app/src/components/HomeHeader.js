import React from 'react';
import {Link} from 'react-router-dom'
import Home_Hero from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"


export const HomeHeader = () => {
    return (
        <>

            <div className={"row home__container"}>
                <div className={"col-5 home__hero"}/>
                <div className={"col-7"}>
                    <div className={'login__box'}>
                        <Link className={'login'} to={'/login'} href={'#'}>Zaloguj</Link>
                        <Link className={'login'} to={'/register'} href={'#'}>Załóż konto</Link>
                    </div>
                    <ul className={'nav__box'}>
                        <li className={'nav__box-element'}>Start</li>
                        <li className={'nav__box-element'}>O co chodzi?</li>
                        <li className={'nav__box-element'}>O nas</li>
                        <li className={'nav__box-element'}>Fundacja i organizacje</li>
                        <li className={'nav__box-element'}>Kontakt</li>
                    </ul>
                    <div className={'header__title-box'}>
                        <h2 className={'header__title'}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img src={Decoration} alt={'Decoration'}/>
                    </div>
                    <div className={'heder__btn-box'}>
                        <Link to={'/login'} href={'#'} className={'Header__btn'}>oddaj <br/> rzeczy</Link>
                        <Link to={'/login'} href={'#'} className={'Header__btn'}>zorganizuj <br/> zbiórkę</Link>
                    </div>
                </div>
            </div>

        </>


    )
}