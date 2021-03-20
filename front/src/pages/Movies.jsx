import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MovieStrip } from '../cmps/MovieStrip'

export const Movies = () => {


    const moviesInState = useSelector((state) => state.movReducer.mov);

    return (
        <div className="page-general">
            <h1>Movies</h1>
            { moviesInState ?
                moviesInState.map((mov, idx) => { return <MovieStrip key={idx} mov={mov} btnAdd={false} btnRemove={true}  /> }) : null}
        </div>
    )
}