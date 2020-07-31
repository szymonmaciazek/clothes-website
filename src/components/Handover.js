import React from "react";
import {HandoverHeader} from "./HandoverHeader";
import {HandoverForm1} from "./HandoverForm1";
import {HandoverForm2} from "./HandoverForm2";
import {HomeContact} from "./HomeContact";

export const Handover = () => {
    return (
        <>
            <HandoverHeader/>
            <HandoverForm2 />
            <HandoverForm1 />

            <HomeContact />
        </>
    )
}