import React from "react";
export const Pagination = ({postsPerPage, totalPosts, paginate,currPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className="pagination__box">
                {(totalPosts > 3) &&
                pageNumbers.map(number => (
                    <li key={number} className="pagination__element">
                        <button onClick={() => paginate(number)} className={(currPage === number ? 'pagination__btn-active'
                            :"pagination__btn")}>{number}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}