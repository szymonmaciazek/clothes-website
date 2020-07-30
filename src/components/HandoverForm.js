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
                <div className={'col-12 steps__form-container'}>
                    <form className={'steps__form'}>
                    <p className={'steps__counter'}>1/4</p>

                        <h2 className={'steps__form-title'}>Zaznacz co chcesz oddać:</h2>
                        <div className={'radio__box'}>
                            <input type={'radio'} name={'inpStep1'} className={'steps__form-radio'}/>
                            <label className={'steps__form-label'}>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div className={'radio__box'}>
                            <input type={'radio'} name={'inpStep1'} className={'steps__form-radio'}/>
                            <label className={'steps__form-label'}>ubrania, do wyrzucenia</label>
                        </div>
                        <div className={'radio__box'}>
                            <input type={'radio'} name={'inpStep1'} className={'steps__form-radio'}/>
                            <label className={'steps__form-label'}>zabawki</label>
                        </div>
                        <div className={'radio__box'}>
                            <input type={'radio'} name={'inpStep1'} className={'steps__form-radio'}/>
                            <label className={'steps__form-label'}>książki</label>
                        </div>
                        <div className={'radio__box'}>
                            <input type={'radio'} name={'inpStep1'} className={'steps__form-radio'}/>
                            <label className={'steps__form-label'}>Inne</label>
                        </div>
                        <button className={'steps__submit'}>Dalej</button>
                    </form>
                </div>
            </div>
        </>
    )
}