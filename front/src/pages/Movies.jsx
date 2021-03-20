import React from "react";
import { useSelector } from "react-redux";
import { MovieStrip } from '../cmps/MovieStrip'

export const Movies = () => {

    const moviesInState = useSelector((state) => state.movReducer.mov);

    return (
        <div className="page-general">
            <div className="hor-block">
                <h1>Movies</h1>
                <p>This is our local movie library. Use the items below to create shows</p>
            </div>
            { moviesInState ?
                moviesInState.map((mov, idx) => { return <MovieStrip key={idx} mov={mov} btnAdd={false} btnRemove={true} /> }) : null}
        </div>
    )
}