import React from "react";

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <ul className="pagination__box">
                {pageNumbers.map(index => (
                    <li key={index} className="pagination__element">
                        <button onClick={() => paginate(index)} className="pagination__btn">{index}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}