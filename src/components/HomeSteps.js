import React from 'react';
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

export const HomeSteps = () => {
    return (
        <>
            <div id='Steps' className={'row steps__container'}>

                <h2 className={'steps__title'}>Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt={'Decoration'}/>

                <div className={'col-12 steps__content'}>
                    <div className={'col-8 steps__content-container'}>
                        <div className={'steps__content-column'}>
                            <img src={Icon1} alt={'Icon-1'}/>
                            <p className={'steps__content-column-title'}>Wybierz rzeczy</p>
                            <hr className={'steps__line'}/>
                            <p className={'steps__content-column-text'}>ubrania, zabawki,<br/> sprzęt i inne</p>
                        </div>
                        <div className={'steps__content-column'}>
                            <img src={Icon2} alt={'Icon-2'}/>
                            <p className={'steps__content-column-title'}>Spakuj je</p>
                            <hr className={'steps__line'}/>
                            <p className={'steps__content-column-text'}>skorzystaj z<br/> worków na śmieci</p>
                        </div>
                        <div className={'steps__content-column'}>
                            <img src={Icon3} alt={'Icon-3'}/>
                            <p className={'steps__content-column-title'}>Zdecyduj komu chcesz pomóc</p>
                            <hr className={'steps__line'}/>
                            <p className={'steps__content-column-text'}>wybierz zaufane<br/> miejsce</p>
                        </div>
                        <div className={'steps__content-column'}>
                            <img src={Icon4} alt={'Icon-4'}/>
                            <p className={'steps__content-column-title'}>Zamów kuriera</p>
                            <hr className={'steps__line'}/>
                            <p className={'steps__content-column-text'}>kurier przyjedzie<br/> w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <Link to={'/login'} href={'#'} className={'header__btn steps__btn'}>oddaj <br/> rzeczy</Link>
            </div>
        </>
    )
}