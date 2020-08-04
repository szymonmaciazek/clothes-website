import React from 'react';
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Step} from "./Step";

export const HomeSteps = () => {
    return (
        <>
            <div id='Steps' className={'row steps__container'}>
                <h2 className={'steps__title'}>Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt={'Decoration'}/>
                <div className={'col-12 steps__content'}>
                    <div className={'col-8 steps__content-container'}>
                        <Step
                            img={Icon1}
                            title={'Wybierz rzeczy'}
                            text={'ubrania, zabawki, sprzęt i inne'} />
                        <Step
                            img={Icon2}
                            title={'Spakuj je'}
                            text={'skorzystaj z worków na śmieci'} />
                        <Step
                            img={Icon3}
                            title={'Zdecyduj komu chcesz pomóc'}
                            text={'wybierz zaufane miejsce'} />
                        <Step
                            img={Icon4}
                            title={'Zamów kuriera'}
                            text={'kurier przyjedzie w dogodnym terminie'} />
                    </div>
                </div>
                <Link to={'/login'} href={'#'} className={'header__btn steps__btn'}>oddaj <br/> rzeczy</Link>
            </div>
        </>
    )
}