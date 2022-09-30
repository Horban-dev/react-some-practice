import React from "react";
import {MdSearch} from 'react-icons/md'
const Search = ({ handleSearchText}) => {
    return (
        <div className="search">
            <MdSearch className="search-icon" size="1.3rem"/>
            <input onChange={(e) => handleSearchText(e.target.value)} className="search-input" placeholder="type to search..."/>
        </div>
    )
}
export default Search;