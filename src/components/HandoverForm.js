import React from "react";

export const HandoverForm1 = () => {

    return (
        <>
            <div className={'row'}>
                <div className={'warning__box'}>
                    <h2 className={'warning__title'}>Ważne!</h2>
                    <p className={'warning__text'}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12 form__steps-container'}>
                    <p>1/4</p>
                    <div className={'steps__form'}>
                        <h2>Zaznacz co chcesz oddać:</h2>
                        <div>
                            <input type={'checkbox'} className={'steps__form-checkbox'}/>
                            <label className={'steps__form-label'}>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div>
                            <input type={'checkbox'} className={'steps__form-checkbox'}/>
                            <label className={'steps__form-label'}>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div>
                            <input type={'checkbox'} className={'steps__form-checkbox'}/>
                            <label className={'steps__form-label'}>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div>
                            <input type={'checkbox'} className={'steps__form-checkbox'}/>
                            <label className={'steps__form-label'}>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}