import React from 'react';

export const HomeThreeColumns = () => {
    return (
        <>
            <div id='ThreeColumns' className={"row"}>
                <div className={'col-12 columns'}>
                    <div className={'column'}>
                        <h3 className={'column__number'}>10</h3>
                        <h4 className={'column__title'}>oddanych worków</h4>
                        <span className={'column__text'}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                    </div>
                    <div className={'column'}>
                        <h3 className={'column__number'}>5</h3>
                        <h4 className={'column__title'}>wspartych organizacji</h4>
                        <span className={'column__text'}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                    </div>
                    <div className={'column'}>
                        <h3 className={'column__number'}>7</h3>
                        <h4 className={'column__title'}>zorganizowanych zbiórek</h4>
                        <span className={'column__text'}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                    </div>
                </div>
            </div>
        </>
    )
}