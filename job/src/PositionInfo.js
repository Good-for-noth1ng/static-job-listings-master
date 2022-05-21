import React from 'react'

function PositionInfo({postedAt, contract, location}) {
    return (
        <div className="positionInfo">
            <span>{postedAt}</span>
            <span>.</span>
            <span>{contract}</span>
            <span>.</span>
            <span>{location}</span>
        </div>
    )
}

export default PositionInfo
