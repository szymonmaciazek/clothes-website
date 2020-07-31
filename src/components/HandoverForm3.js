import React from "react";
import {Important} from "./Important";
import {Select} from "./Select";

export const HandoverForm3 = () => {

    return (
        <>
            <Important info={'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.' +
            ' Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'} />
            <div className={'row'}>
                <div className={'col-12 steps__form-container'}>
                    <form className={'steps__form'}>
                        <p className={'steps__counter'}>3/4</p>
                        <h2 className={'steps__form-title'}>Lokalizacja:</h2>
                        <div>
                            <div className={'steps__select-box'}>
                                <Select title={'— wybierz —'} items={['Warszawa', 'Poznań', 'Kraków', 'Wrocław']} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}