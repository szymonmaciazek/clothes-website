import React, {useEffect, useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import foundations from "../data/foundations";

export const HomeContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactNotice, setContactNotice] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [noticeErr, setNoticeErr] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [sendMessageClass, setSendMessageClass] = useState('contact__sendMessage');
    const [contactMessage, setContactMessage] = useState({
        name: contactName,
        email: contactEmail,
        message: contactNotice
    });

    const handleSubmitMessage = () =>{
        let newMessage = {
            name: contactName.trim(),
            email: contactEmail,
            message: contactNotice
        }
        setContactMessage(newMessage)
    }
    useEffect(() =>{
        handleSubmitMessage()
    },[contactNotice, contactEmail, contactName])
    const handleContactName = (e) =>{
        setContactName(e.target.value)
    }
    const handleContactEmail = (e) =>{
        setContactEmail(e.target.value)
    }
    const handleContactMessage = (e) =>{
        setContactNotice(e.target.value)
    }
    const handleSubmitData = () => {
        if(contactName.length<3 ){
            setNameErr("Podane imię jest nieprawidłowe!")
        }else{
            setNameErr("");
        }
        if(contactEmail<3 && !contactEmail.includes("@")){
            setEmailErr("Podany email jest nieprawidłowy!")
        }else{
            setEmailErr("");
        }
        if(contactNotice.length< 120){
            setNoticeErr("Wiadomość musi mieć 120 znaków!")
        }else{
            setNoticeErr("");
        }
    }
    const sendMessage = (e) =>{
        e.preventDefault()
        handleSubmitData()
        console.log(contactMessage);
        console.log(contactMessage);
        if(contactEmail.length > 1 && contactName.length >1 && contactNotice.length> 12){
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                method: "POST",
                body: JSON.stringify(contactMessage),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    if(response.status === 200){
                        setSuccessMessage("Wiadomość została wysłana! Wkrótce sie skontaktujemy")
                        setSendMessageClass('contact__sendMessage')
                        resetForm()
                        return response.json();
                    } else if(response.status === 400){
                        setSuccessMessage("Błąd serwera! Wiadomość nie została wysłana")
                        setSendMessageClass('contact__sendMessage contact__sendMessage-warning')
                        console.log(response);
                    }
                })
                .then( data => console.log(data))
                .catch( err => console.log(err));
        }else{
            return false
        }
    }
    const resetForm = () =>{
        setContactName('')
        setContactEmail('')
        setContactNotice('')
    }
    return (
        <>
            <div id='Contact' className={'row contact__container'}>
                <div className={'contact__form'}>
                    <h2 className={'contact__form-title'}>Skontaktuj się z nami</h2>
                    <img className={'contact__decoration'} src={Decoration} alt={'Decoration'}/>
                    <p className={sendMessageClass}>{successMessage}</p>
                    <form onSubmit={sendMessage}>
                        <div className={'form__container'}>
                            <div className={'form__box form__box-left'}>
                                <label className={'form__box-label'}>Wpisz swoje imię</label>
                                <input value={contactName} className={'form__box-input'} onChange={handleContactName} placeholder={'Szymon'} id={'name'}
                                       name="question" type="text"/>
                                <p className={'contact__warning'}> {nameErr}</p>
                            </div>
                            <div className={'form__box'}>
                                <label className={'form__box-label'}>Wpisz swój email</label>
                                <input value={contactEmail} className={'form__box-input'} onChange={handleContactEmail} placeholder={'xyz@mail.com'} id={'email'}
                                       name="question" type="email"/>
                                <p className={'contact__warning'}>{emailErr} </p>
                            </div>
                        </div>
                        <div className={'textarea__box'}>
                            <label className={'textarea__box-label'} >Wpisz swoją wiadomość</label>
                            <textarea value={contactNotice} rows={4} cols={4} onChange={handleContactMessage} className={'textarea__box-area'}
                                      placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
                                      ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim' +
                                      ' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                                      ' consequat.'}/>
                                      <p className={'contact__warning'}>{noticeErr} </p>
                        </div>
                        <div className={'form__btn-box'}>
                            <button className={'form__btn'}>Wyślij</button>
                        </div>
                    </form>
                </div>
                <div className={'footer'}>
                    <div className={'footer1 col-4'}/>
                    <div className={'footer2 col-4'}>
                        <span className={'copyright '}>Copyright by CodersLab</span>
                    </div>
                    <div className={'footer__media col-4'}>
                        <a className={'facebook'} href={'http://facebook.com'} alt={'Facebook'}/>
                        <a className={'instagram'} href={'http://instagram.com'} alt={'Instagram'}/>
                    </div>
                </div>
            </div>
        </>
    )
}