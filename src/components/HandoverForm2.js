import React from "react";
import {Important} from "./Important";
import {Select} from "./Select";

export const HandoverForm2 = ({currForm, prev, next}) => {

    if (currForm !== 2) {
        return null
    }
    return (
        <>
            <Important info={'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie' +
            ' spakować rzeczy znajdziesz TUTAJ.'} />
            <div className={'row'}>
                <div className={'col-12 steps__form-container'}>
                    <form className={'steps__form'}>
                        <p className={'steps__counter'}>2/4</p>
                        <h2 className={'steps__form-title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        <div>
                            <div className={'steps__select-box'}>
                                <label className={'steps__form-label'}>Liczba 60l worków:</label>
                                <Select title={'— wybierz —'} items={[1, 2, 3, 4, 5]} />
                            </div>
                            <div className={'step__buttons'}>
                                <button onClick={prev} className={'steps__submit'}>Wstecz</button>
                                <button onClick={next} className={'steps__submit'}>Dalej</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
    )
}