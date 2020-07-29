import React from "react";
import {NavBar} from "./NavBar";
import Decoration from "../assets/Decoration.svg";

export const HandoverHeader = () => {
    return (
        <>
            <div id='HandoverHeader' className={"row home__container"}>
                <div className={"col-5 handover__hero"}/>
                <div className={"col-7 "}>
                    <NavBar/>
                    <div className={'handover__title-box'}>
                        <h2 className={'header__title'}>Oddaj rzeczy, których już nie chcesz <br/>POTRZEBUJĄCYM
                        </h2>
                        <img src={Decoration} alt={'Decoration'}/>
                        <div className={'handover__diamonds'}>
                            <div className={'diamond'}>
                                <div className={'diamondL'}>
                                    <p className={'diamond__number'}>1</p>
                                    <p className={'diamond__text'}>Wybierz<br/>rzeczy</p>
                                </div>
                            </div>
                            <div className={'diamond'}>
                                <div className={'diamondL'}>
                                    <p className={'diamond__number'}>2</p>
                                    <p className={'diamond__text'}>Spakuj je<br/>w worki</p>
                                </div>
                            </div>
                            <div className={'diamond'}>
                                <div className={'diamondL'}>
                                    <p className={'diamond__number'}>3</p>
                                    <p className={'diamond__text'}>Wybierz<br/>fundację</p>
                                </div>
                            </div>
                            <div className={'diamond'}>
                                <div className={'diamondL'}>
                                    <p className={'diamond__number'}>4</p>
                                    <p className={'diamond__text'}>Zamów<br/>kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className={'col-12 '}>*/}
                {/*    <h2>Ważne</h2>*/}
                {/*    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>*/}
                {/*</div>*/}
            </div>
        </>
    )
}