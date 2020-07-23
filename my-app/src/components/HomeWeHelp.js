import React, {useEffect, useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import local from "../data/local";
import {CompanyList} from "./CompanyList";




export const HomeWeHelp = () => {
    const [company, setCompany] = useState(foundations)
    // const [helpers, setHelper] = useState('foundations')
    const [whoFun, setWhoFun] = useState('help__button')
    const [whoOrg, setWhoOrg] = useState('help__button')
    const [whoLoc, setWhoLoc] = useState('help__button')

    const handleToFundation = () =>{
        setCompany('foundations');
        whoIsActive()
    }
    const handleToOrganizations = () =>{
        setCompany('organization');
        whoIsActive2()
    }
    const handleToLocals = () =>{
        setCompany('local');
        whoIsActive3()
    }

    const whoIsActive = () =>{
        if(company === 'foundations') {
          setWhoFun("help__button active")
        }else{
            setWhoFun("help__button")
        }
    }

    const whoIsActive2 = () =>{
        if(company === 'organization') {
            setWhoOrg("help__button active")
        }else{
            setWhoOrg("help__button")
        }
    }

    const whoIsActive3 = () =>{
        if(company === 'local') {
            setWhoLoc("help__button active")
        }else{
            setWhoLoc("help__button")
        }
    }

    useEffect(() =>{
        whoIsActive()
        whoIsActive2()
        whoIsActive3()
    },[handleToFundation, handleToOrganizations,handleToLocals])


    return (
        <>
            <div id='WeHelp' className={'row help__container'}>
                <div className={'help__box'}>
                    <h2 className={'help__box-title'}>Komu pomagamy?</h2>
                    <img className={'help__decoration'} src={Decoration} alt={'Decoration'}/>
                </div>
                <div className={'help__box-buttons'}>
                    <button className={whoFun} onClick={handleToFundation}>Fundacjom</button>
                    <button className={whoOrg} onClick={handleToOrganizations}>Organizacjom<br/> pozarządowym</button>
                    <button className={whoLoc} onClick={handleToLocals}>Lokalnym<br/> zbiórkom</button>
                </div>
                <p className={'help__box-text col-5'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <CompanyList company={company} />
        </>
    )
}