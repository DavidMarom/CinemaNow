// *********   PAGE 3- SHOWS
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowStrip } from '../cmps/ShowStrip'
import { loadShow } from '../store/actions/showActions'

export const Shows = () => {
    const dispatch = useDispatch();
    const showsInState = useSelector((state) => state.showReducer.show);

    useEffect(() => {
        dispatch(loadShow());
    }, [])

    return (
        <div className="page-general">
            {console.log(showsInState)}
            <div className="hor-block">
                <h1>Shows</h1>
            </div>


            { showsInState ? showsInState.map((show, idx) => { return <ShowStrip key={idx} show={show} /> }) : console.log('STATE NOT READY')}


        </div>
    )
}
