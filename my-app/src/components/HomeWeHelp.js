import React, {useEffect, useState} from 'react';
import Decoration from "../assets/Decoration.svg";




export const HomeWeHelp = () => {
    const [companys, setCompanys] = useState('fundations')
    const [helpers, setHelper] = useState('foundations')
    const [whoFun, setWhoFun] = useState('help__button')
    const [whoOrg, setWhoOrg] = useState('help__button')
    const [whoLoc, setWhoLoc] = useState('help__button')

    const handleToFundation = () =>{
        setHelper('foundations');
        whoIsActive()
    }
    const handleToOrganizations = () =>{
        setHelper('organization');
        whoIsActive2()
    }
    const handleToLocals = () =>{
        setHelper('local');
        whoIsActive3()
    }

    const whoIsActive = () =>{
        if(helpers === 'foundations') {
          setWhoFun("help__button active")
        }else{
            setWhoFun("help__button")
        }
    }

    const whoIsActive2 = () =>{
        if(helpers === 'organization') {
            setWhoOrg("help__button active")
        }else{
            setWhoOrg("help__button")
        }
    }

    const whoIsActive3 = () =>{
        if(helpers === 'local') {
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
            <div className={'row help__container'}>
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
        </>
    )
}