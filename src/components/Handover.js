import React, {useState} from "react";
import {HandoverHeader} from "./HandoverHeader";
import {HandoverForm1} from "./HandoverForm1";
import {HandoverForm2} from "./HandoverForm2";
import {HandoverForm3} from "./HandoverForm3";
import {HandoverForm4} from "./HandoverForm4";
import {HandoverForm5} from "./HandoverForm5";
import {HomeContact} from "./HomeContact";

export const Handover = () => {
    const [currForm, setCurrForm] = useState(1);


    const prev = (e) => {
        e.preventDefault()
        setCurrForm(prev => prev - 1)
    }
    const next = (e) => {
        e.preventDefault()
        setCurrForm(prev => prev + 1)
    }

    return (
        <>
            <HandoverHeader/>

            <HandoverForm5 prev={prev} next={next} currForm={currForm} />

            <HandoverForm1 next={next} currForm={currForm}/>
            <HandoverForm2 prev={prev} next={next} currForm={currForm}/>
            <HandoverForm3 prev={prev} next={next} currForm={currForm} />
            <HandoverForm4 prev={prev} next={next} currForm={currForm} />
            <HandoverForm5 prev={prev} next={next} currForm={currForm} />
            <HomeContact />
        </>
    )
}