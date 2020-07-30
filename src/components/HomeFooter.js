import React from "react";

export const HomeFooter = () => {

    return (
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
    )
}