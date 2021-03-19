import React from 'react'

export const MovieStrip = ({ title, movId }) => {
    return (
        <div className="rb movie-strip">
            <div className="ral">

                <div className="add-button-col">

                    <button className="btn2 lnk-btn">
                        <i className="fas fa-plus"></i>Add to cinema</button>
                </div>
                <p className="movie-title">{title}</p>
            </div>
            <p className="movie-id">{movId}</p>

        </div>
    )
}
