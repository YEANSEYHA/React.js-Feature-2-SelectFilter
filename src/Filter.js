import React from "react";

export default function Filter({ sorts, sorting, cat, filteringName }) {
    return (
        <div>
            {/* filtering by name */}
            <div className="select_filter">
                <select value={cat} onChange={filteringName}>
                    <option>All</option>
                    <option value="vegan">vegan</option>
                    <option value="meat">meat</option>
                    <option value="fish">fish</option>
                </select>
            </div>

            {/* sorting */}
            <div className="select_filter">
                <select value={sorts} onChange={sorting}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
                {sorts}
            </div>
        </div>
    );
}
