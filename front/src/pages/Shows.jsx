import React from 'react'
import { useSelector } from "react-redux";
import { ShowStrip } from '../cmps/ShowStrip'

export const Shows = () => {
    const showsInState = useSelector((state) => state.showReducer.show);
    {console.log(showsInState)}
    return (
        <div className="page-general">
            <div className="hor-block">
                <h1>Shows</h1>
            </div>

            
            { showsInState ?
                showsInState.map((show, idx) => { return <ShowStrip key={idx} show={show} /> }) : null}


        </div>
    )
}
