import React, {useState} from "react";
import {HandoverHeader} from "./HandoverHeader";
import {HandoverForm1} from "./HandoverForm1";
import {HandoverForm2} from "./HandoverForm2";
import {HandoverForm3} from "./HandoverForm3";
import {HandoverForm4} from "./HandoverForm4";
import {HandoverForm5} from "./HandoverForm5";
import {HandoverForm6} from "./HandoverForm6";
import {HomeContact} from "./HomeContact";
import {auth} from "firebase";
import {Login} from "./Login";

export const Handover = () => {
    const [currForm, setCurrForm] = useState(1);
    const [giveAway, setGiveaway] = useState({
        collection: "",
        bags: "",
        cityTo: "",
        recipients: {
            kids: false,
            singleMother: false,
            homeless: false,
            disabled: false,
            elder: false
        },
        organization: "",
        street: "",
        city: "",
        postCode: "",
        phoneNumber: 0,
        date: "",
        time: "",
        notice: ""
    })
    const [currUser] = useState(auth().currentUser)

    const handleChangeGiveAwayData = e => {
        const {name,value} = e.target;
        setGiveaway(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    const handleDataID = e => {
        const {id} = e.target;
        setGiveaway(prev => ({
            ...prev,
            [id]: e.target.innerText
        }))
    }
    const prev = (e) => {
        e.preventDefault()
        setCurrForm(prev => prev - 1)
    }
    const next = (e) => {
        e.preventDefault()
        setCurrForm(prev => prev + 1)
    }
    // if (auth.currentUser === null) return <Login />
    if(!currUser) return <Login />

    return (
        <>
            <HandoverHeader/>
            <HandoverForm1
                next={next}
                currForm={currForm}
                dataChange={handleChangeGiveAwayData}/>
            <HandoverForm2
                prev={prev}
                next={next}
                currForm={currForm}
                selectChange={handleDataID} />
            <HandoverForm3
                prev={prev}
                next={next}
                currForm={currForm}
                selectChange={handleDataID}
                dataChange={handleChangeGiveAwayData} />
            <HandoverForm4
                prev={prev}
                next={next}
                currForm={currForm}
                dataChange={handleChangeGiveAwayData}/>
            <HandoverForm5
                prev={prev}
                next={next}
                currForm={currForm} />
            <HandoverForm6
                currForm={currForm} />
            <HomeContact />
        </>
    )
}