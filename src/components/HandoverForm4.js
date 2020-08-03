import React from "react";
import {Important} from "./Important";

export const HandoverForm4 = ({currForm, prev, next}) => {

    if (currForm !== 4) {
        return null
    }
    return (
        <>
            <Important info={'Podaj adres oraz termin odbioru rzeczy.'} />
            <div className={'row'}>
                <div className={'col-12 steps__form-container'}>
                    <form className={'steps__form'}>
                        <p className={'steps__counter'}>4/4</p>
                        <h2 className={'steps__form-title'}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                        <div className={'personal__form'}>
                            <div className={'personal__box'}>
                                <h2 className={'personal__title'}>Adres odbioru:</h2>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Ulica</label>
                                    <input className={'personal__input'} type={'text'}/>
                                </div>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Miasto</label>
                                    <input className={'personal__input'} type={'text'}/>
                                </div>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Kod<br/>pocztowy</label>
                                    <input className={'personal__input'} type={'text'}/>
                                </div>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Numer<br/>telefonu</label>
                                    <input className={'personal__input'} type={'phone'}/>
                                </div>
                            </div>
                            <div className={'personal__box'}>
                                <h2 className={'personal__title'}>Termin odbioru:</h2>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Data</label>
                                    <input className={'personal__input'} type={'data'}/>
                                </div>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Godzina</label>
                                    <input className={'personal__input'} type={'text'}/>
                                </div>
                                <div className={'personal__wrap'}>
                                    <label className={'personal__label'}>Uwagi<br/>dla kuriera</label>
                                    <textarea className={'personal__textarea'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'step__buttons'}>
                            <button onClick={prev} className={'steps__submit'}>Wstecz</button>
                            <button onClick={next} className={'steps__submit'}>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}