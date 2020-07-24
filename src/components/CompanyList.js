import React from "react";

export const CompanyList = ({company}) =>{

    return(
        <>
            <div className={'row list__section'}>
                <ul className={'col-10 list_container'}>
                    {company.map((elem,index) =>(
                        <li key={index} className={'list__item'}>
                            <div className={'list__item-left'}>
                                <h2 className={'list__item-company'}>{elem.name}</h2>
                                <p className={'list__item-goal'}>{elem.goal}</p>
                            </div>
                            <div className={'list__item-right'}>
                                <p className={'list__item-need'}>{elem.items}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}