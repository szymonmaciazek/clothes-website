import React from "react";

export const Step = ({img, title, text}) => {

    return (
        <>
            <div className={'steps__content-column'}>
                <img src={img} alt={img}/>
                <div className={'steps__content-wrap'}>
                    <p className={'steps__content-column-title'}>{title}</p>
                </div>
                <p className={'steps__content-column-text'}>{text}</p>
            </div>
        </>
    )
}

