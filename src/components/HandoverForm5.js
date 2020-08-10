import React from "react";
import Icon1 from "../assets/Icon-1.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Important} from "./Important";


export const HandoverForm5 = ({currForm, prev, next}) => {

    if (currForm !== 5) {
        return null
    }
    return (
        <>
            <Important info={'Sprawdź czy wszystkie dane się zgadzają'} />
            <div className={'row'}>
                <div className={'col-12 steps__form-container'}>
                    <div className={'steps__form'}>
                        <h2 className={'steps__form-title'}>Podsumowanie Twojej darowizny</h2>
                        <div className={'summary__items-box'}>
                            <h3 className={'personal__title'}>Oddajesz:</h3>
                            <div className={'summary__item'}>
                                <img className={'summary__item-img'} src={Icon1} alt={'Icon-1'}/>
                                <p className={'summary__item-text'}>4 worki, ubrania w dobrym stanie</p>
                            </div>
                            <div className={'summary__item'}>
                                <img className={'summary__item-img'} src={Icon4} alt={'Icon-4'}/>
                                <p className={'summary__item-text'}>dla lokalizacji: Warszawa</p>
                            </div>
                        </div>
                        <div className={'personal__form'}>

                            <div className={'personal__box'}>
                                <h3 className={'personal__title'}>Adres odbioru:</h3>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Ulica</p>
                                    <p className={'personal__input personal__input-summary'}>Prosta 51</p>
                                </div>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Miasto</p>
                                    <p className={'personal__input personal__input-summary'}>Nowy</p>
                                </div>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Kod<br/>pocztowy</p>
                                    <p className={'personal__input personal__input-summary'}>00-402</p>
                                </div>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Numer<br/>telefonu</p>
                                    <p className={'personal__input personal__input-summary'}>405 403 509</p>
                                </div>
                            </div>
                            <div className={'personal__box'}>
                                <h3 className={'personal__title'}>Termin odbioru:</h3>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Data</p>
                                    <p className={'personal__input personal__input-summary'}>25.04.2019</p>
                                </div>
                                <div className={'personal__wrap personal__wrap-summary'}>
                                    <p className={'personal__label personal__label-summary'}>Godzina</p>
                                    <p className={'personal__input personal__input-summary'}>16:58</p>
                                </div>
                                <div className={'personal__wrap textarea__summary-box'}>
                                    <p className={'personal__label personal__label-summary'}>Uwagi<br/>dla kuriera:</p>
                                    <p className={'personal__textarea personal__textarea-summary'}>Lore.</p>


                                </div>
                            </div>
                        </div>
                        <div className={'step__buttons'}>
                            <button onClick={prev} className={'steps__submit'}>Wstecz</button>
                            <button onClick={next} className={'steps__submit'}>Potwierdzam</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}