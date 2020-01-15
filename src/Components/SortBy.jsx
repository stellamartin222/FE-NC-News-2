import React from 'react'

export default function SortBy({getOrder}) {
    const handleSubmit = (e) => {
        getOrder(e.target.value)
    }

    return (
        <div className="sortByBox">
        <p>Sort By :-</p>
        <select className="sortByButtons" onChange={handleSubmit}>
            <option></option>
            <option value="created_at">Recent</option>
            <option value="comment_count">Number of comments</option>
            <option value="votes">Votes</option>    
        </select>
       </div>
    )
}
