import React from 'react'

export const MovieStrip = ({ title, movId }) => {
    return (
        <div className="rb movie-strip">
            <p className="movie-title">{title}</p>
            <p className="movie-id">{movId}</p>
            <button>Add to cinema</button>

        </div>
    )
}
