import React from 'react'
import { moviesService } from '../services/moviesService'

export const MovieStrip = ({ title, movId, mov }) => {
    return (
        <div className="rb movie-strip">
            <div className="ral">

                <div className="add-button-col">

                    <button className="btn2 lnk-btn" onClick={() => {
                        moviesService.add(mov)
                    }
                    }>
                        <i className="fas fa-plus"></i>Add to cinema</button>
                </div>
                <p className="movie-title">{title}</p>
            </div>
            <p className="movie-id">{movId}</p>

        </div>
    )
}
