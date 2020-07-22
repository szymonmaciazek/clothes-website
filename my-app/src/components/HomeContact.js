import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";


export const HomeContact = () => {
    return (
        <>
            <div className={'row contact__container'}>
                <div className={'contact__form'}>
                    <h2 className={'contact__form-title'}>Skontaktuj się z nami</h2>
                    <img className={'contact__decoration'} src={Decoration} alt={'Decoration'}/>
                    <form>
                        <div className={'form__container'}>
                            <div className={'form__box'}>
                                <label className={'form__box-label'} >Wpisz swoje imię</label>
                                <input className={'form__box-input'} placeholder={'Szymon'} id={'pytanie'}  name="question" type="text"/>
                            </div>
                            <div className={'form__box'}>
                                <label className={'form__box-label'}>Wpisz swój email</label>
                                <input className={'form__box-input'} placeholder={'xyz@mail.com'} id={'pytanie'}  name="question" type="text"/>
                            </div>

                        </div>
                        <div className={'textarea__box'}>
                            <label className={'textarea__box-label'}>Wpisz swoją wiadomość</label>
                            <textarea className={'textarea__box-area'} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
                <div className={'footer'}>
                    <span className={'copyright '}>Copyright</span>
                    <a className={'facebook'} href={'http://facebook.com'} alt={'Instagram'}/>
                    <a className={'instagram'} href={'http://instagram.com'} alt={'Instagram'}/>


                </div>

            </div>
        </>
    )
}