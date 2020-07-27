import React, {useEffect, useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import local from "../data/collection";
import {CompanyList} from "./CompanyList";
import {Pagination} from "./Pagination";

export const HomeWeHelp = () => {
    const [company, setCompany] = useState(foundations);
    const [currPage, setCurrPage] = useState(1);
    const [companyPerPage] = useState(3);
    const [whoFun, setWhoFun] = useState('help__button');
    const [whoOrg, setWhoOrg] = useState('help__button');
    const [whoLoc, setWhoLoc] = useState('help__button');

    const handleToFoundation = () =>{
        setCompany(foundations);
        whoIsActive()
        setCurrPage(1)
    }
    const handleToOrganizations = () =>{
        setCompany(organizations);
        whoIsActive()
        setCurrPage(1)
    }
    const handleToLocals = () =>{
        setCompany(local);
        whoIsActive()
        setCurrPage(1)
    }
    const whoIsActive = () => {
        if (company === foundations) {
            setWhoFun("help__button active")
            setWhoLoc("help__button")
            setWhoOrg("help__button")
        } else if(company === organizations){
            setWhoFun("help__button")
            setWhoLoc("help__button")
            setWhoOrg("help__button active")
        }else if(company === local){
            setWhoFun("help__button ")
            setWhoLoc("help__button active")
            setWhoOrg("help__button")
        }
    }
    useEffect(() =>{
        whoIsActive()
    },[handleToFoundation, handleToOrganizations,handleToLocals]);
    const paginate = (pageNumber) => {
        setCurrPage(pageNumber)
    }
    const indexOfLastCompany = currPage * companyPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
    const currentCompany = company.slice(indexOfFirstCompany, indexOfLastCompany);

    return (
        <>
            <div id='WeHelp' className={'row help__container'}>
                <div className={'help__box'}>
                    <h2 className={'help__box-title'}>Komu pomagamy?</h2>
                    <img className={'help__decoration'} src={Decoration} alt={'Decoration'}/>
                </div>
                <div className={'help__box-buttons'}>
                    <button className={whoFun} onClick={handleToFoundation}>Fundacjom</button>
                    <button className={whoOrg} onClick={handleToOrganizations}>Organizacjom<br/> pozarządowym</button>
                    <button className={whoLoc} onClick={handleToLocals}>Lokalnym<br/> zbiórkom</button>
                </div>
                <p className={'help__box-text col-4'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <CompanyList company={currentCompany} />
            <Pagination currPage={currPage} postsPerPage={companyPerPage} totalPosts={company.length} paginate={paginate}/>
        </>
    )
}