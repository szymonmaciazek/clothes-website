import React from 'react';
import Decoration from "../assets/Decoration.svg";

export const HomeContact = () => {
    return (
        <>
            <div id='Contact' className={'row contact__container'}>
                <div className={'contact__form'}>
                    <h2 className={'contact__form-title'}>Skontaktuj się z nami</h2>
                    <img className={'contact__decoration'} src={Decoration} alt={'Decoration'}/>
                    <form>
                        <div className={'form__container'}>
                            <div className={'form__box'}>
                                <label className={'form__box-label'}>Wpisz swoje imię</label>
                                <input className={'form__box-input'} placeholder={'Szymon'} id={'pytanie'}
                                       name="question" type="text"/>
                                <p className={'test'}></p>
                            </div>
                            <div className={'form__box'}>
                                <label className={'form__box-label'}>Wpisz swój email</label>
                                <input className={'form__box-input'} placeholder={'xyz@mail.com'} id={'pytanie'}
                                       name="question" type="text"/>
                                <p className={'test'}></p>
                            </div>

                        </div>
                        <div className={'textarea__box'}>
                            <label className={'textarea__box-label'}>Wpisz swoją wiadomość</label>
                            <textarea className={'textarea__box-area'}
                                      placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
                                      ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim' +
                                      ' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                                      ' consequat.'}/>
                        </div>
                        <div className={'form__btn-box'}>
                            <button className={'form__btn'}>Wyślij</button>
                        </div>
                    </form>
                </div>
                <div className={'footer'}>
                    <div className={'footer1 col-4'}/>
                    <div className={'footer2 col-4'}>
                        <span className={'copyright '}>Copyright by Szymon</span>
                    </div>
                    <div className={'footer__media col-4'}>
                        <a className={'facebook'} href={'http://facebook.com'} alt={'Instagram'}/>
                        <a className={'instagram'} href={'http://instagram.com'} alt={'Instagram'}/>
                    </div>
                </div>
            </div>
        </>
    )
}