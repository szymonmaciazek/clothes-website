import React from "react";

export const Important = ({info}) => {

    return (
        <div id='form' className={'row'}>
            <div className={'important__box'}>
                <h2 className={'important__title'}>Ważne!</h2>
                <p className={'important__text'}>{info}</p>
            </div>
        </div>
    )
}