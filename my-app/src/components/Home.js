import React from 'react';
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSteps} from "./HomeSteps";
import {HomeAbout} from "./HomeAbout";
import {HomeWeHelp} from "./HomeWeHelp";
import {HomeContact} from "./HomeContact";

export const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAbout/>
            <HomeWeHelp/>
            <HomeContact/>
        </>
    )
}