import React, {useEffect, useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import local from "../data/collection";
import {CompanyList} from "./CompanyList";
import {Pagination} from "./Pagination";

export const HomeWeHelp = () => {
    const [company, setCompany] = useState(foundations)
    const [currPage, setCurrPage] = useState(1);
    const [companysPerPage] = useState(3);
    const [whoFun, setWhoFun] = useState('help__button')
    const [whoOrg, setWhoOrg] = useState('help__button')
    const [whoLoc, setWhoLoc] = useState('help__button')

    const handleToFundation = () =>{
        setCompany(foundations);
        whoIsActive()
        setCurrPage(1)
    }
    const handleToOrganizations = () =>{
        setCompany(organizations);
        whoIsActive2()
        setCurrPage(1)
    }
    const handleToLocals = () =>{
        setCompany(local);
        whoIsActive3()
        setCurrPage(1)
    }

    const whoIsActive = () =>{
        if(company === foundations) {
          setWhoFun("help__button active")
        }else{
            setWhoFun("help__button")
        }
    }
    const whoIsActive2 = () =>{
        if(company === organizations) {
            setWhoOrg("help__button active")
        }else{
            setWhoOrg("help__button")
        }
    }
    const whoIsActive3 = () =>{
        if(company === local) {
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

    const paginate = (pageNumber) => {
        setCurrPage(pageNumber)
    }
    const indexOfLastCompany = currPage * companysPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companysPerPage;
    const currentCompanys = company.slice(indexOfFirstCompany, indexOfLastCompany);

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
                <p className={'help__box-text col-4'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <CompanyList company={currentCompanys} />
            <Pagination postsPerPage={companysPerPage} totalPosts={company.length} paginate={paginate} />
        </>
    )
}