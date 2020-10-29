import React from 'react'

const SearchBlog = props => {

    return (
        <div className="mpblog-search">
            <div className="field search">
                <label className="label">
                    <span>Search</span>
                </label>
                <div className="control">
                    <input id="mpblog-search-box" type="text" name="query" placeholder="Search blogs here..." className="input-text" />
                </div>
            </div>
            <div className="actions">
                <button type="submit" title="Search" className="action search">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchBlog