import React from "react";
import {Important} from "./Important";
import {Select} from "./Select";

export const HandoverForm3 = ({currForm, prev, next}) => {

    if (currForm !== 3) {
        return null
    }
    return (
        <>
            <Important info={'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.' +
            ' Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'} />
            <div className={'row'}>
                <div className={'col-12 steps__form-container'}>
                    <form className={'steps__form'}>
                        <p className={'steps__counter'}>3/4</p>
                        <h2 className={'steps__form-title'}>Lokalizacja:</h2>
                            <div className={'steps__select-box'}>
                                <Select title={'— wybierz —'} items={['Warszawa', 'Poznań', 'Kraków', 'Wrocław']} />
                            </div>
                            <div className={"beneficiary__container"}>
                                <h3 className={"beneficiary__title"}>Komu chcesz pomóc?</h3>
                                <ul className={"beneficiary__list"}>
                                    <li className={"beneficiary__element"}>dzieciom</li>
                                    <li className={"beneficiary__element"}>samotnym matkom</li>
                                    <li className={"beneficiary__element"}>bezdomnym</li>
                                    <li className={"beneficiary__element"}>niepełnosprawnym</li>
                                    <li className={"beneficiary__element"}>osobom starszym</li>
                                </ul>
                            </div>
                            <div className={"beneficiary__organization-container"}>
                                <label className={"beneficiary__label"}>
                                    Wpisz nazwę konkretnej organizacji (opcjonalne)
                                </label>
                                <input className={"beneficiary__input"} type={"text"}/>
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