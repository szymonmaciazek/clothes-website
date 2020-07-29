import React from "react";
import {HandoverHeader} from "./HandoverHeader";
import {HandoverForm1} from "./HandoverForm";
import {HomeContact} from "./HomeContact";

export const Handover = () => {
    return (
        <>
            <HandoverHeader/>
            <HandoverForm1 />
            <HomeContact />
        </>
    )
}