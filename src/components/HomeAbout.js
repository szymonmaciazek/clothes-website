import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";

export const HomeAbout = () => {
    return (
        <>
            <div id='About' className={'row about__container'}>
                <div className={'col-6 about__description'}>
                    <h2 className={'about__description-title'}>O nas</h2>
                    <img className={'about__decoration'} src={Decoration} alt={'Decoration'}/>
                    <p className={'about__description-text'}>Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                        greens parsnip.
                    </p>
                    <img className={'description'} src={Signature} alt={'Signature'}/>
                </div>
                <div className={'col-6 about__photo'}/>
            </div>
        </>
    )
}