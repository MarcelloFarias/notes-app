import React from "react";
import './style.css';

const SearchInput = ({ searchValue, handleSearchValue }) => {
    return (
        <>
            <li className="search-note">
                <input type='text' value={searchValue} onChange={handleSearchValue} className='input-search' placeholder="Search A Note Here..."/>
            </li>
        </>
    );
}

export default SearchInput;