import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addMov} from '../store/actions/movActions'
import history from '../history';

export const MovieStrip = ({ mov, btnAdd, btnRemove }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const doAdd = () => {
        console.log('hey');
    }


    return (
        <div className="rb movie-strip">
            <div className="ral">
                <div className="add-button-col">

                    <button className="btn2 lnk-btn" onClick={() => {
                        dispatch(addMov(mov));
                        history.push("/movies");
                    }}>
                        <i className="fas fa-plus"></i> Add</button>


                </div>
                <p className="movie-title">{mov.name}</p>
            </div>
            
            
            <p className="movie-id">id: {mov.id}</p>
        </div>
    )
}
