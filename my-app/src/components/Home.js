import React from 'react';
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSteps} from "./HomeSteps";
import {HomeAbout} from "./HomeAbout";


export const Home = () => {
    return (
        <>

            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAbout/>

        </>

    )
}