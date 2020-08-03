import React from "react";
import Decoration from "../assets/Decoration.svg";

export const HandoverForm6 = ({currForm}) => {

    if (currForm !== 6) {
        return null
    }
    return (
        <>
            <div className={'row'}>
                <div className={'col-12 steps__form-container thanks__container'}>
                    <div className={'thanks__container-content'}>
                        <h2>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                        <img className={'about__decoration'} src={Decoration} alt={'Decoration'}/>

                    </div>
                </div>
            </div>
        </>
    )
}