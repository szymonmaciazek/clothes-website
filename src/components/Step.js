import React from "react";
import Icon1 from "../assets/Icon-1.svg";

export const Step = ({img, title, text}) => {

    return (
        <>
            <div className={'steps__content-column'}>
                <img src={img} alt={img}/>
                <p className={'steps__content-column-title'}>{title}</p>
                <hr className={'steps__line'}/>
                <p className={'steps__content-column-text'}>{text}</p>
            </div>
        </>
    )
}